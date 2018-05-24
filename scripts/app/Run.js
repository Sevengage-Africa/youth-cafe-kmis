/* ----------------------------------------------------------
	Application Run Time Configuration
----------------------------------------------------------*/

angular
    .module("YouthCafe")
	.run(["$rootScope", "$route", "$location", "ngProgressFactory", function ($rootScope, $route, $location, ngProgressFactory) {
		
		// keeps the route fresh
		$route.reload();


		// handles updating the doc title when the route changes
		function handleDocumentTitle(){
			var loc = $location.$$url.split("/")[2];

			document.title = "Youth Cafe | " + $route.current.title;
			window.scrollTo(0, 0);

			// targeting cafe locations, hubs, and events pages.
			if (YCAFE.Lazyload !== undefined && (loc === "location" || loc === "events" || loc === "hubs" )){
				setTimeout(function(){
					YCAFE.Lazyload.update();
				},1);
			}
		}


		// checks if the user is logged in before proceeding to the next page
		// if the user is going to a given page and is not logged in we are 
		// triggering the login modal in loginRegister.js

		function checkAuthStatus(event, next, current){
			var section;

			if ( YCAFE.Globals !== undefined && !YCAFE.Globals.isLoggedIn ){

				section = next.params.hasOwnProperty("template") ? next.params.template : next.$$route.originalPath.split("/")[1];

				switch(section){
					case "profile":
						handleUnAuthedUser(next);
						event.preventDefault();
						break;

					case "messenger":
						handleUnAuthedUser(next);
						event.preventDefault();
						break;
				}
			}
		}


		// Triggers the Auth modal and saves the URL to root
		function handleUnAuthedUser(nextUrl){

			// trigger login model
			$(document).trigger({
				type: "triggerLoginModel",
				rel: "login",
				next_page: nextUrl.$$route.originalPath

			});

			//store next page
			$rootScope.nextPage = nextUrl;
		}

		$rootScope.$on("$routeChangeSuccess", handleDocumentTitle);
		$rootScope.$on("$routeChangeStart", checkAuthStatus);

	}]);