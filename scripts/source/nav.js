/* ------------------------------------------------------
	Primary Navigation & Primary Mobile Navigation
---------------------------------------------------------*/

(function ($){

	var navModule = {

		// setup and cache reused objects
		init: function(){
			navModule.nav = $("#mobileNav");
			// navModule.setOffScreen();
			return this;
		},


		// opens mobile nav
		openNav: function(e){
			$("#mobileNav").toggleClass("mobileNav--show");
			$(document.body).toggleClass("body--fixed");

			e.preventDefault();
			
			return this;
		},


		// close mobile nav
		closeNav: function(){
			$("#mobileNav").removeClass("mobileNav--show");
			$(document.body).removeClass("body--fixed");

			return this;
		},


		mobileNavClick: function(){
			setTimeout(function (){
				navModule.closeNav();
			}, 1000);
		},


		// sets the mobile nav off screen for a quicker animation
		setOffScreen: function(event, screen){
			var screenWidth = screen ? screen.availWidth : YCAFE.Utility.getWindowWidth();

			navModule.nav
				.addClass("hide")
				.css({"right": - (screenWidth + 10) });

			// wait for the animation in the CSS has complete to show
			// nav on DOM
			setTimeout(function (){
				navModule.nav.removeClass("hide");
			}, 1500);

			return this;
		},


		goBack: function(e){
			e.preventDefault();
			window.history.back();

			return this;
		}

	};


	$(document)
		// .on("ready", navModule.init)
		.on("click", "#mobileNavOpen", navModule.openNav)
		.on("click", "#mobileNavClose", navModule.openNav)
		.on("click", ".mobileNav__link", navModule.mobileNavClick)
		.on("click", ".header__backButtonLink", navModule.goBack);

	$(window)
		.on("loginTrigger", navModule.closeNav)
		// .on("deviceOrientationChange", navModule.setOffScreen);


}(window.jQuery));

