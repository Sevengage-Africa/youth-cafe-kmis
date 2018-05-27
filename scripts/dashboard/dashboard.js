/*----------------------------------------------------------
	Dashboard Youth Cafe
------------------------------------------------------------*/

// @codekit-prepend "../lib/mustache.js";
// @codekit-prepend "../lib/jquery-1.12.1.min.js";
// @codekit-prepend "../lib/remodal.js";
// @codekit-prepend "../lib/moment.js";
// @codekit-prepend "cafeConfigs.js";

/*----------------------------------------------------------
	Initialize Firebase and setup today's database
	if not already created
------------------------------------------------------------*/

// George Youth Cafe database
firebase.initializeApp(YCAFE.Cafes.George.firebase);


// Dashboard globals
YCAFE.Dashboard = {
	today: moment().format("DD-MM-YYYY"),
	db: firebase.database()
};

// @codekit-append "dashboardSetup.js";
// @codekit-append "scannerModule.js";
// @codekit-append "timeStation.js";