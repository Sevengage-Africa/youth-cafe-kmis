// @codekit-prepend "../lib/jquery-1.12.1.min.js";
// @codekit-prepend "../lib/remodal.js";

/* ---------------------------------------------
	Global Utils
------------------------------------------------*/

// global name-space declaration
var YCAFE = YCAFE || {};



// trigger notification when the orientation changes.
window.addEventListener("orientationchange", function() {
	$(window).trigger("deviceOrientationChange", screen);
});



/* ----------------------------------------------------
	Utility Properties
---------------------------------------------------- */

// non Desktop Hand-held Devices
YCAFE.isHandheld = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

// Mobile Devices
YCAFE.isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

// Tablet (iPad) Devices
YCAFE.isIpad = /iPad/i.test(navigator.userAgent);



/* ----------------------------------------------------
	Utility Methods
---------------------------------------------------- */

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




/* ----------------------------------------------------
	Cookie Getter and Setter Methods
---------------------------------------------------- */

YCAFE.Cookie = {

	// create a new cookie
	set(args) {
		var cExpires = "";

		if (!args.name || /^(?:expires|max\-age|path|domain|secure)$/i.test(args.name)) {
			return false;
		}

		if (args.end) {
			switch (args.end.constructor) {
			case Number:
				cExpires = (args.end === Infinity) ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + args.end;
				break;
			case String:
				cExpires = "; expires=" + args.end;
				break;
			case Date:
				cExpires = "; expires=" + args.end.toUTCString();
				break;
			}
		}

		document.cookie = encodeURIComponent(args.name) + "=" + encodeURIComponent(args.value) + cExpires + (args.domain ? "; domain=" + args.domain : "") + (args.path ? "; path=" + args.path : "") + (args.secure ? "; secure" : "");
		return true;
	},


	// fetch an existing cookie
	get(name) {
		return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	},


	// remove a cookie
	delete(args) {
		if (!args.name || !this.hasCookie(args.name)) {
			return false;
		}
		document.cookie = encodeURIComponent(args.name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (args.domain ? "; domain=" + args.domain : "") + (args.path ? "; path=" + args.path : "");
		return true;
	},

	// check for a cookies existence
	hasCookie(name) {
		return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	}

};
