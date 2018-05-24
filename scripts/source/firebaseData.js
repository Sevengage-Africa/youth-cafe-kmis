/*----------------------------------------------------------
	Firebase auth, setup, methods for check-in and push
	notifications
------------------------------------------------------------*/

// @codekit-prepend "../../data/configs/GeorgeConfig.js";

(function (firebase){

	var config = YCAFE.George.config;

	firebase.initializeApp(config);

}(window.firebase));

