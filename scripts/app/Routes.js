/* ----------------------------------------------------------
	Application Route Configuration
----------------------------------------------------------*/

angular
    .module("YouthCafe")
	.config(['$routeProvider', '$locationProvider', 'config', function ($routeProvider, $locationProvider, config){
		
		$routeProvider
			.when("/", {templateUrl: config.baseUrl + "/mobile/index", title: "Get Connected. Stay Connected.", controller: StaticRouteController})
			.when("/about", {templateUrl: config.baseUrl + "/mobile/page/about", title: "About Us", controller: StaticRouteController})
			.when("/contact", {templateUrl: config.baseUrl + "/mobile/page/contact", title: "Contact Us", controller: StaticRouteController})
			.when("/privacy-policy", {templateUrl: config.baseUrl + "/mobile/page/privacy-policy", title: "Privacy Policy", controller: StaticRouteController})
			.when("/code-of-conduct", {templateUrl: config.baseUrl + "/mobile/page/code-of-conduct", title: "Code Of Conduct", controller: StaticRouteController})
			.when("/terms-of-use", {templateUrl: config.baseUrl + "/mobile/page/terms-of-use", title: "Terms Of Use", controller: StaticRouteController})
			.when("/locations", {templateUrl: config.baseUrl + "/locations", title: "Locations", controller: StaticRouteController})
			.when("/hubs", {templateUrl: config.baseUrl + "/hubs", title: "Hubs", controller: StaticRouteController})
			.when("/events", {templateUrl: config.baseUrl + "/events", title: "Upcoming Events", controller: StaticRouteController})
			.when("/team", {templateUrl: config.baseUrl + "/team", title: "Our Team", controller: StaticRouteController})
			.when("/messenger", {templateUrl: config.baseUrl + "/messenger", title: "Messenger", controller: StaticRouteController})
			.when("/profile", {templateUrl: config.baseUrl + "/profile", title: "Profile", controller: StaticRouteController})

			/* Dynamic Pages */
			.when("/:template/:template_group", {template: '<div ng-include="templateURL()"></div>', title: "", controller: DynamicRouteController})
			.when("/:template/:template_group/:url_title", {template: '<div ng-include="templateURL()"></div>', title: "", controller: DynamicRouteController})
			.when("/:template/:template_group/:section/:url_title", {template: '<div ng-include="templateURL()"></div>', title: "", controller: DynamicRouteController})

			/* 404 */
			.otherwise({ templateUrl: config.baseUrl + "/404", title: "Page Not Found" });
		}]);