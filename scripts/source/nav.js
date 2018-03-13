/* ------------------------------------------------------
	Primary Navigation & Primary Mobile Navigation
---------------------------------------------------------*/
const navModule = {

	// setup and cache reused objects
	init(){
		navModule.nav = $("#mobileNav");
		navModule.setOffScreen();
		return this;
	},


	// opens mobile nav
	openNav(e){
		navModule.nav.toggleClass("mobileNav--show");
		$(document.body).toggleClass("body--fixed");

		e.preventDefault();
		
		return this;
	},


	// close mobile nav
	closeNav(){
		navModule.nav.removeClass("mobileNav--show");
		$(document.body).removeClass("body--fixed");

		return this;
	},


	// sets the mobile nav off screen for a quicker animation
	setOffScreen(event, screen){
		let screenWidth = screen ? screen.availWidth : YCAFE.Utility.getWindowWidth();

		navModule.nav
			.addClass("hide")
			.css({"right": - (screenWidth + 10) });

		// wait for the animation in the CSS has complete to show
		// nav on DOM
		setTimeout(() => {
			navModule.nav.removeClass("hide");
		}, 1500);

		return this;
	}

};


$(document)
	.on("ready", navModule.init)
	.on("click", "[href='#mobileNav']", navModule.openNav)
	.on("click", "#mobileNavClose", navModule.openNav);

$(window)
	.on("loginTrigger", navModule.closeNav)
	.on("deviceOrientationChange", navModule.setOffScreen);

