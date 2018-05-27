/*----------------------------------------------------------
	setup the todays visitors database
------------------------------------------------------------*/

(function(YCAFE){
	YCAFE.Dashboard.todayVisitors = YCAFE.Dashboard.db.ref("dailyVisitors/" + YCAFE.Dashboard.today);


	// check to see if today has been created
	YCAFE.Dashboard.todayVisitors.once("value", function (snapshot){
		if( !snapshot.val() ){
			createToday();
		}
	});


	// use the first logged in cafe staff member to the dashboard to setup the database
	function createToday(){
		var dag = YCAFE.Dashboard.db.ref("dailyVisitors/" + YCAFE.Dashboard.today + "/visitors").push();
		dag.set(YCAFE.staffMember);
	}

}(window.YCAFE));