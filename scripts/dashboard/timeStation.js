
/*----------------------------------------------------------
	Time Station Module
------------------------------------------------------------*/

(function(YCAFE, $){

	var timeStation = {

		settings: {
			getMemberApi: "https://ycafes.co.za/data/getMember/"
		},

		currentVisitors: [],

		init: function(data){
			var visitorData = data.val(),
				arr = [], i;

			$("#contentTable, #contentPreloader").toggleClass("hide");


			for(autoKey in visitorData){
				arr.push(visitorData[autoKey]);
			}

			for (i = 0; i < arr.length; i++) {
				timeStation.currentVisitors.push(arr[i].member_id);
				timeStation.printVisitors(arr[i]);
			}
			
			return this;
		},



		// open confirmation modal
		openModal: function(){
			var modal = $('[data-remodal-id="scanSuccessModal"]').remodal({hashTracking: false});
			
			modal.open();

			setTimeout(function(){
				modal.close();
			},3000);

			return this;
		},


		// print data to modal HTML
		printModal: function(){
			$("#scannName").text(timeStation.scanData.name);
			return this;
		},


		// on can success parse data and notify user
		// 	id=480298179,ycafeid=1,gender=Male,name=Marshall Grant

		scanSuccess: function(e, data){
			var dataArr = data.split(","), i;

			timeStation.scanData = {};

			for (i = 0; i < dataArr.length; i++) {
				timeStation.scanData[dataArr[i].split("=")[0]] = dataArr[i].split("=")[1];
			}

			timeStation
				.fetchMember()
					.fail(timeStation.userFail)
					.done(timeStation.saveUser)
						.then(timeStation.firebaseWrite);

			return this;
		},


		// fetch the users information from the app
		fetchMember: function(){
			return $.ajax({
				url: timeStation.settings.getMemberApi + timeStation.scanData.ycafeid,
				timeout: 10000,
				dataType: "json"
			});
		},


		// gets the registered (now check-in) users response back from the app to save
		saveUser: function(response){
			timeStation.visitor = response;
			return this;
		},


		// when this user does not exist.
		userFail: function(){
			window.alert("This user " + timeStation.scanData.name + " either does not exist, your connection is slow, or an error occurred. Please try again.  If the issue persists please contact the help desk administrator");
			return this;
		},



		// write their attendance to the db
		firebaseWrite: function(){
			var newUserRef = YCAFE.Dashboard.db.ref("dailyVisitors/" + YCAFE.Dashboard.today + "/visitors").push();

			if ( timeStation.currentVisitors.indexOf(timeStation.visitor["member_id"]) === -1 ){

				timeStation.visitor["confirmed"] = true;
				timeStation.currentVisitors.push(timeStation.visitor["member_id"]);
				
				newUserRef.set(timeStation.visitor);

				timeStation
					.printModal()
					.openModal()
					.printVisitors(timeStation.visitor);

			}else{
				window.alert("Hmmm...looks like " + timeStation.scanData.name +" already checked in.");
			}

			return this;
		},



		printVisitors: function(data){
			var tpl = ['{{#.}}',
						'<tr>',
							'<td>{{timeIn}}</td>',
							'<td>{{name}}</td>',
							'<td>{{dob}}</td>',
							'<td>{{gender}}</td>',
							'<td>{{organization}}</td>',
							'<td>{{cell}}</td>',
							'<td>{{email}}</td>',
						'</tr>',
						'{{/.}}'].join(""),
				html = Mustache.render(tpl, data);

			$("#checkIns").prepend(html);

			return this;
		}


	};


	$(window).on("scan", timeStation.scanSuccess);

	// listen for changes
	YCAFE.Dashboard.todayVisitors.on("child_added", timeStation.init);


}(window.YCAFE, window.jQuery));


