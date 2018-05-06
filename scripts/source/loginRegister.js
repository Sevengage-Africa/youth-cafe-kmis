/* ---------------------------------------------
	Methods for Login & Register
		- jQuery is a dependency
------------------------------------------------*/

(function ($){


	const authModal = {

		focus(e){

			// login modal
			if( $(e.target).hasClass("loginModal") ){
				$("#username").focus();
			}

			// registration modal
			if( $(e.target).hasClass("regModal") ){
				$("#first").focus();

				// doing this to tighten up the UI when the modal is shown, primarily via the login modal
				if( YCAFE.isMobile ){
					$(".remodal-wrapper").scrollTop(0);
				}
			}

			// forgot password modal
			if ( $(e.target).hasClass("forgotModal") ){
				$("#forgotEmail").focus();
			}

			$(window).trigger("loginTrigger", {});

			return this;
		},



		// show/hide control for the password field
		passwordToggleControler(e){
			var $passwordToggle = $(e.currentTarget),
				$input = $passwordToggle.prev("input"),
				isText = $input.prop("type") === "text";

			$input.prop("type", isText ? "password" : "text");

			$passwordToggle
				.find(".control-icon-show").toggleClass("hide", !isText)
					.end()
				.find(".control-icon-hide").toggleClass("hide", isText);
			
			e.preventDefault();

			return this;
		},



		// method for adding the show/hide button for ALL password fields
		appendPasswordToggle(){
			let toggleHTML = [	
				'<a href="" class="control-password-toggle" togglePassword>',
					'<svg class="control-icon control-icon-show" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">',
						'<title>show password</title>',
						'<path d="M23.9 11.6c-0.2-0.4-4.4-8.6-11.9-8.6s-11.7 8.2-11.9 8.6c-0.1 0.3-0.1 0.6 0 0.9 0.2 0.3 4.4 8.5 11.9 8.5s11.7-8.2 11.9-8.6c0.1-0.2 0.1-0.6 0-0.8zM12 19c-5.4 0-8.9-5.4-9.9-7 0.9-1.6 4.5-7 9.9-7s8.9 5.4 9.9 7c-1 1.6-4.5 7-9.9 7z"></path>',
						'<path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 14c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"></path>',
					'</svg>',
					'<svg class="control-icon control-icon-hide hide" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">',
						'<title>hide password</title>',
						'<path d="M10.1 5.2c0.6-0.1 1.3-0.2 1.9-0.2 5.4 0 8.9 5.4 9.9 7-0.5 0.9-1.1 1.8-1.8 2.5-0.4 0.4-0.3 1.1 0.1 1.4 0.2 0.2 0.4 0.2 0.6 0.2 0.3 0 0.6-0.1 0.8-0.4 0.9-1 1.6-2.2 2.3-3.4 0.2-0.3 0.2-0.6 0-0.9-0.2-0.2-4.4-8.4-11.9-8.4-0.8 0-1.6 0.1-2.3 0.3-0.6 0.1-0.9 0.6-0.8 1.2 0.2 0.5 0.7 0.8 1.2 0.7z"></path>',
						'<path d="M23.7 22.3l-22-22c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3c-1.8 1.6-3.3 3.4-4.5 5.5-0.2 0.3-0.2 0.6 0 0.9 0.2 0.4 4.4 8.6 11.9 8.6 2.1 0 4.1-0.6 5.8-1.8l4.5 4.5c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM10 11.4l2.5 2.5c-0.2 0.1-0.4 0.1-0.6 0.1-0.5 0-1-0.2-1.4-0.5-0.4-0.4-0.6-0.9-0.6-1.4 0-0.2 0.1-0.4 0.1-0.7zM12 19c-5.4 0-8.9-5.4-9.9-7 1-1.8 2.3-3.3 3.9-4.6l2.5 2.6c-0.4 0.7-0.6 1.5-0.6 2.3 0 1.1 0.5 2.1 1.3 2.8 0.7 0.7 1.7 1.1 2.7 1.1 0 0 0.1 0 0.1 0 0.7 0 1.4-0.3 2-0.6l2.3 2.3c-1.3 0.7-2.8 1.1-4.3 1.1z"></path>',
					'</svg>',
				'</a>'].join(""),
				passwordInputs = $("input[type=password]", "form");

				passwordInputs.after(toggleHTML);


			if ( YCAFE.isMobile ){
				passwordInputs.prop("type", "text");

				passwordInputs
					.next(".control-password-toggle")
						.find(".control-icon-show").addClass("hide")
							.end()
						.find(".control-icon-hide").removeClass("hide");
			}
			
			return this;
		},


		// clones the password field for the confirm password field on the registration page
		cloneValue(){
			$("#regPasswordConfirm").val($(this).val());
			return this;
		},


		// generic open model method
		openModel(e){
			let modal = (e.type === "triggerLoginModel") ? $('[data-remodal-id='+ e.rel +']') : $('[data-remodal-id='+ e.currentTarget.rel +']');
			
			modal.remodal({hashTracking: false}).open();
			authModal.loginNotify(e);
			e.preventDefault();

			return this;
		},


		loginNotify(e){
			$("#loginAlert").toggleClass("hide", e.type !== "triggerLoginModel");
			return this;
		},

		hideLoginNotify(){
			$("#loginAlert").addClass("hide");
			return this;
		}

	};


	authModal.appendPasswordToggle();


	$(document)
		.on("opened", ".remodal", authModal.focus)
		.on("closed", ".remodal", authModal.hideLoginNotify)
		.on("click", "[rel='login'], [rel='register'], [rel='forgot'], [rel='checkIn']", authModal.openModel)
		.on("triggerLoginModel", authModal.openModel)
		.on("keyup", "#regPassword", authModal.cloneValue)
		.on("click touchend", "[togglePassword]",  authModal.passwordToggleControler);


}(window.jQuery));

