/* ----------------------------------------------------------
	Back Button Directive
----------------------------------------------------------*/

function backButton ($window){
	return{
		restrict: "A",
		link: (scope, element) => {
			element.on("click", () => {
				$window.history.back();
			});
		}
	};
}



backButton.$inject = ["$window"];


angular
	.module("YouthCafe")
	.directive("backButton", backButton);


