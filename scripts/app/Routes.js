/* ----------------------------------------------------------
	Application Route Configuration
----------------------------------------------------------*/

angular
    .module("YouthCafe")
	.config(['$routeProvider', '$locationProvider', 'config', ($routeProvider, $locationProvider, config) => {
		
		$routeProvider
			.when("/", {templateUrl: config.baseUrl, title: "Get Connected. Stay Connected."})
			.when("/about", {templateUrl: config.baseUrl + "/mobile/page/about", title: "About Us"})
			.when("/contact", {templateUrl: config.baseUrl + "/mobile/page/contact", title: "Contact Us"})
			.when("/privacy-policy", {templateUrl: config.baseUrl + "/mobile/page/privacy-policy", title: "Privacy Policy"})
			.when("/terms-of-use", {templateUrl: config.baseUrl + "/mobile/page/terms-of-use", title: "Terms Of Use"})
			.when("/locations", {templateUrl: config.baseUrl + "/locations", title: "Locations"})
			.when("/hubs", {templateUrl: config.baseUrl + "/hubs", title: "Hubs"})
			.when("/events", {templateUrl: config.baseUrl + "/events", title: "Upcoming Events"})
			.when("/team", {templateUrl: config.baseUrl + "/team", title: "Our Team"})
			.when("/messenger", {templateUrl: config.baseUrl + "/messenger", title: "Messenger"})
			.when("/profile", {templateUrl: config.baseUrl + "/profile", title: "Profile"})

			/* Dynamic Pages */
			.when("/:template/:name", {template: '<div ng-include="templateURL()"></div>', title: "", controller: RouteController})
			.when("/:template/:name/:url_title", {template: '<div ng-include="templateURL()"></div>', title: "", controller: RouteController})

			/* 404 */
			.otherwise({ templateUrl: config.baseUrl + "/404", title: "Page Not Found" });
		}])


	/* 
		handles updating the doc title when the route changes
	-------------------------------------------------------------------*/
	.run(["$rootScope", "$route", "$location", ($rootScope, $route, $location) => {


		function handleDocumentTitle(){
			document.title = "Youth Cafe | " + $route.current.title;
			window.scrollTo(0, 0);
		}


		function checkAuthStatus(event, next, current){
			console.log(event)
			console.log(next)
			console.log(current)

			if ( YCAFE.Globals !== undefined && !YCAFE.Globals.isLoggedIn ){

				let section = next.params.hasOwnProperty("template") ? next.params.template : next.$$route.originalPath.split("/")[1];

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


		function handleUnAuthedUser(nextUrl){

			// trigger login model
			$(document).trigger({
				type: "triggerLoginModel",
				rel: "login"
			});

			//store next page
			$rootScope.nextPage = nextUrl;
		}
		


		$rootScope.$on("$routeChangeSuccess", handleDocumentTitle);
		$rootScope.$on("$routeChangeStart", checkAuthStatus);
		
	}]);