/* ---------------------------------------------
	Global Utils
------------------------------------------------*/

// global name-space declaration
var YCAFE = YCAFE || {};


// Handel offline and online notifications
window.addEventListener("load", () => {

	function handleNetworkChange(event) {
		if (navigator.onLine) {
			document.body.classList.remove("offline");
		} else {
			document.body.classList.add("offline");
		}
	}

	window.addEventListener("online", handleNetworkChange);
	window.addEventListener("offline", handleNetworkChange);
});


// trigger notification when the orientation changes.
window.addEventListener("orientationchange", function() {
	$(window).trigger("deviceOrientationChange", screen);
});



/* --------------------------
	Utility Properties
-------------------------- */

// non Desktop Hand-held Devices
YCAFE.isHandheld = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

// Mobile Devices
YCAFE.isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

// Tablet (iPad) Devices
YCAFE.isIpad = /iPad/i.test(navigator.userAgent);



/* --------------------------
	Utility Methods
-------------------------- */

YCAFE.Utility = {

	// get the current position of location
	getWindowLocation(){
		return $(window).scrollTop();
	},


	// returns device width
	getWindowWidth(){
		return $(window).width();
	}

};