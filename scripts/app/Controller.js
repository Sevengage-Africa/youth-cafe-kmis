/* ----------------------------------------------------------
	Parent Application Controller
----------------------------------------------------------*/

function AppController ($scope, $rootScope, $location, $timeout, $routeParams, AppServices){

	this.Globals = YCAFE.Globals;
	$scope.isLoading = true;

	// saved from checkAuthStatus - use to redirect upon successful login
	$rootScope.nextPage = null;


	// instantiate off-line service
	AppServices.offline();


	
}



AppController.$inject = ["$scope", "$rootScope", "$location", "$timeout", "$routeParams", "AppServices"];


angular
	.module("YouthCafe")
	.controller("AppController", AppController);






/* ----------------------------------------------------------
	Route Controller
----------------------------------------------------------*/

function DynamicRouteController ($scope, $routeParams, $timeout, config){

	$scope.templateURL = function (){
		return config.baseUrl +"/"+ $routeParams.template +"/"+ $routeParams.template_group + ($routeParams.hasOwnProperty("section") ? "/" + $routeParams.section : "") + ($routeParams.hasOwnProperty("url_title") ? "/" + $routeParams.url_title : "");
	};

}



DynamicRouteController.$inject = ["$scope", "$routeParams", "$timeout", "config"];


angular
	.module("YouthCafe")
	.controller("DynamicRouteController", DynamicRouteController);







/* ----------------------------------------------------------
	Static Route Controller
----------------------------------------------------------*/

function StaticRouteController ($scope, $rootScope, $timeout, ngProgressFactory){
	$scope.progressbar = ngProgressFactory.createInstance();


	function startProgressBar(){
		$scope.progressbar.start();
		$timeout($scope.progressbar.complete(), 1000);
	}

	$rootScope.$on("$routeChangeStart", startProgressBar);
}



StaticRouteController.$inject = ["$scope", "$rootScope", "$timeout", "ngProgressFactory"];


angular
	.module("YouthCafe")
	.controller("StaticRouteController", StaticRouteController);



