/* ---------------------------------------------
	Methods for Ajax Forms and Ajax Links
		- jQuery is a dependency
------------------------------------------------*/

(function ($){

	var formHandler = {

		responseText: {
			login: {
				start: {
					status: 100,
					statusText: 'Login has started'
				},
				success: {
					status: 200,
					statusText: 'You are now logged in'
				}
			},
			logout: {
				start: {
					status: 100,
					statusText: 'Loggout Has Started'
				},
				success: {
					status: 205,
					statusText: 'You have logged out'
				}
			}
		},


		// Global Login Form 
		login: function(e){
			var $loginForm = $("#loginForm");

			e.preventDefault();


			// login start
			$(document).trigger('XHRLoginStart', formHandler.responseText.login.start);


			// login success
			function loginDone(){
				$(document).trigger('XHRLoginSuccess',  formHandler.responseText.login.success);
			}


			// login failure
			function loginFail(response){
				$(document).trigger('XHRLoginFail', {
					status: response.status,
					statusText: response.statusText
				});
			}


			$.post( $loginForm.prop("action"), $loginForm.serialize())
				.done(loginDone)
				.fail(loginFail);


			return this;
		},




		// logout link 
		logout: function(e){
			e.preventDefault();

			// logout start
			$(document).trigger('XHRLogoutStart', formHandler.responseText.logout.start);


			// logout success
			function logoutDone(){
				$(document).trigger('XHRLogoutSuccess', formHandler.responseText.logout.success);
			}

			// logout fail
			function logoutFail(response){
				$(document).trigger('XHRLogoutFail', {
					status: response.status,
					statusText: response.statusText
				});
			}


			$.get( $("#ajaxauth_logout_link").prop("href") )
				.done(logoutDone)
				.fail(logoutFail);


			return this;
		},




		// profile page edit form
		edit: function(e){
			var $form = $(this);

			e.preventDefault();

			$(".remodal-overlay").addClass("show");
			$(".app__loader").removeClass("hide");


			// success
			function postDone(response){
				if ( response !== undefined && response.success === 1 ){
					window.location.href = (YCAFE.isMobile ? "#!" : "") +  "/profile/curriculum-vitae/success";
				
				}else{
					window.location.reload();
				}
			}


			// fail
			function postFail(){
				alert("Unable to log out for some reason. Please try again.");
				postDone();
			}

			$.post( $form.prop("action"), $form.serialize())
				.done(postDone)
				.fail(postFail);


			return this;
		},




		// handles the ajax gets to add/remove/block contacts
		messengerContact: function(e){
			var requestURL = $(this).prop("href");

			e.preventDefault();

			// success
			function handelResponsse(response){
				console.log(response);
			}

			// fail
			function handelError(data){
				console.log(data);
			}

			$.get(requestURL)
				.done(handelResponsse)
				.fail(handelError);

			return this;
		}

	};



	$(document)
		.on("click", "#ajaxauth_logout_link", formHandler.logout)
		.on("submit", "#loginForm", formHandler.login)
		.on("submit", "#cform, #editPersonal", formHandler.edit)
		.on("click", "[data-id='contactHandler']", formHandler.messengerContact);



}(window.jQuery));
