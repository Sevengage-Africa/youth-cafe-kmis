/* ---------------------------------------------
	Methods for Login & Register
		- jQuery is a dependency
------------------------------------------------*/

const contact = {

	focus(e){
		if( $(e.target).hasClass("loginModal") ){
			$("#username").focus();
		}

		if( $(e.target).hasClass("regModal") ){
			$("#regUsername").focus();

			// doing this to tighten up the UI when the modal is shown, primarily via the login modal
			if( YCAFE.isMobile ){
				$(".remodal-wrapper").scrollTop(0);
			}
		}

		$(window).trigger("loginTrigger", {});
	}

};

$(document)
	.on("opened", ".remodal", contact.focus);