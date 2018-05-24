/* ----------------------------------------------------------
	Parent Application Controller
----------------------------------------------------------*/

function AppServices(){


	// Handel off-line and on-line notifications
	function offline(){
		window.addEventListener("load", function (){

			function handleNetworkChange(event) {
				if (navigator.onLine) {
					document.body.classList.remove("is__offline");
				} else {
					document.body.classList.add("is__offline");
				}
			}

			window.addEventListener("online", handleNetworkChange);
			window.addEventListener("offline", handleNetworkChange);
		});

	}


	return{
		offline: offline
	};

}



AppServices.$inject = [];


angular
	.module("YouthCafe")
	.factory("AppServices", AppServices);