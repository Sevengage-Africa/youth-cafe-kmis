/*----------------------------------------------------------
	Sanner Initializer and Methods
------------------------------------------------------------*/

(function(YCAFE, Instascan){

	var scanner = {

		settings: {
			isRunning: false, /* makes the assumption that if it's not running then it's hidden */
			isMinimized: false
		},

		// setup the scanner state from the lasts saved settings
		initScannerState: function(){
			scanner.$pip = $("#scannerPip");

			if (window.localStorage){
				scanner.settings = window.localStorage.getItem("YCAFE_Dashboard_settings") ? window.localStorage.getItem("YCAFE_Dashboard_settings") : window.localStorage.setItem("YCAFE_Dashboard_settings", JSON.stringify(scanner.settings));
			}

			scanner.settings = JSON.parse(scanner.settings);

			return this;
		},


		// start the scanner
		start: function() {

	  		YCAFE.Dashboard.Scanner = new Instascan.Scanner({
	  			video: document.getElementById("mainScanner"),
	  			continuous: true,
	  			refractoryPeriod: 3000
	  		});

	  		$("scannerPreloader").addClass('hide');

	  		// listner to put put the scanned content of the qr code
	  		YCAFE.Dashboard.Scanner.addListener("scan", function(content) {
	  			console.log(content);
	  			$(window).trigger("scan", content);
	  		});

	  		Instascan.Camera.getCameras().then(function (cameras){

	  			if (cameras.length > 0) {
	  				YCAFE.Dashboard.Scanner.start(cameras[0]);
	  				// console.log(cameras[0].id);

	  			} else {
	  				alert("Please first attach a camera and try again");
	  			}

	  		}).catch(function(e) {
	  			console.error(e);
	  		});

	  		return this;
	  	},


	  	// stop the scanner
	  	stop: function(){
	  		YCAFE.Dashboard.Scanner.stop();
	  		return this;
	  	},


	  	// show/hide the Picture-in-Picture (pip) scanner window
	  	toggleHide: function(e){
	  		$(".camera-off .camera-on", "#auxNav").toggleClass("hide")
	  		// $("", "#auxNav").toggleClass("hide");
	  		scanner.$pip.toggleClass("hide");

	  		scanner.settings.isRunning = $(".camera-on", "#auxNav").hasClass("hide");

	  		if (scanner.settings.isRunning){
	  			scanner.start();
	  		} else{
	  			scanner.stop();
	  		}

	  		window.localStorage.setItem("YCAFE_Dashboard_settings", JSON.stringify(scanner.settings));

	  		e.preventDefault();

	  		return this;
	  	},


	  	// minimize & grow the pop scanner window
	  	mimimize: function(e){
	  		scanner.$pip.toggleClass("scanner--pipMin");

	  		scanner.settings.isMinimized = scanner.$pip.hasClass("scanner--pipMin");

	  		window.localStorage.setItem("YCAFE_Dashboard_settings", JSON.stringify(scanner.settings));

	  		e.preventDefault();

	  		return this;
	  	}

	};

  	

  	$(document)
  		.on("ready", scanner.initScannerState)
  		.on("click", "#cameraToggle, #hideScannerPip", scanner.toggleHide)
  		.on("click", "#minimizeScannerPip", scanner.mimimize);


}(window.YCAFE, window.Instascan));


