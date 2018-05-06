/* ----------------------------------------------------------
	Parent Application Controller
----------------------------------------------------------*/

function AppController ($scope, $location, $routeParams, AppServices){

	this.Globals = YCAFE.Globals;
	this.nextPage = null;


	// instantiate off-line service
	AppServices.offline();
}



AppController.$inject = ["$scope", "$location", "$routeParams", "AppServices"];


angular
	.module("YouthCafe")
	.controller("AppController", AppController);






/* ----------------------------------------------------------
	Route Controller
----------------------------------------------------------*/

function RouteController ($scope, $routeParams, config){

	$scope.templateURL = () => {
		return config.baseUrl +"/"+ $routeParams.template +"/"+ $routeParams.name + ($routeParams.hasOwnProperty("url_title") ? "/" + $routeParams.url_title : "");
	};

}



RouteController.$inject = ["$scope", "$routeParams", "config"];


angular
	.module("YouthCafe")
	.controller("RouteController", RouteController);





