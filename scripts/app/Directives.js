/* ----------------------------------------------------------
	Dynamic JS Loader Directive
----------------------------------------------------------*/

function scriptLoader ($rootScope, $location){
	return{
		restrict: "A",
		link: function (scope, element){

			function loadChannelFormJS(event, templateName){
				var body, script;

				if ( $location.$$url.split("/")[2] === "edit" ){
					body = document.getElementsByTagName('body').item(0);
					script = document.createElement('script');
					
					script.setAttribute('src', '//ycafes.co.za/scripts/lib/ee-channnel-form.js');
					body.appendChild(script);
				}
			}


			$rootScope.$on("$includeContentLoaded", loadChannelFormJS);
						
		}
	};
}



scriptLoader.$inject = ["$rootScope", "$location"];


angular
	.module("YouthCafe")
	.directive("scriptLoader", scriptLoader);




/* ----------------------------------------------------------
	Back Button Directive


function backButton ($window){
	return{
		restrict: "A",
		link: function (scope, element){
			element.on("click", function (){
				$window.history.back();
			});
		}
	};
}



backButton.$inject = ["$window"];


angular
	.module("YouthCafe")
	.directive("backButton", backButton);

----------------------------------------------------------*/



/* ----------------------------------------------------------
	Preloader Directive


function preloader ($rootScope){
	return{
		restrict: "E",
		replace: true,
		template: '<img src="/assets/preloader3.svg" class="app__loader" ng-if="isLoading" alt="preloader" />',
		link: (scope, element) => {
			

			function showPreloader(){
				scope.isLoading = true;
			}

			function hidePreloader(){
				scope.isLoading = false;
			}


			$rootScope.$on("$routeChangeSuccess", hidePreloader);
			$rootScope.$on("$routeChangeStart", showPreloader);


		}
	};
}



preloader.$inject = ["$rootScope"];


angular
	.module("YouthCafe")
	.directive("preloader", preloader);


----------------------------------------------------------*/