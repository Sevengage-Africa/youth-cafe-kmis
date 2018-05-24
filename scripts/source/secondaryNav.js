/* ---------------------------------------------
	Secondary Nav
------------------------------------------------*/
(function ($){
	
	var navMoreBtn = [
		'<li class="content__navItem content__navItem--more">',
			'<a href="" class="content__navLink content__navLink--icon" id="secNavMore">',
				'<svg class="content__navIcon" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">',
					'<path d="M18.7 11.3l-5-5c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3-4.3 4.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5-5c0.4-0.4 0.4-1 0-1.4z"></path>',
					'<path d="M11.7 11.3l-5-5c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3-4.3 4.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5-5c0.4-0.4 0.4-1 0-1.4z"></path>',
				'</svg>',
			'</a>',
		'</li>'].join("");


	var secNavModule = {

		// setup and cache elements
		init: function(){
			secNavModule.nav = $("#contentNav");
			secNavModule.column = $("#contentColumn");
			secNavModule.secNavMore = $("#secNavMore");
			secNavModule.moreListItems = secNavModule.nav.find("li:gt(2)");

			if (YCAFE.isHandheld){
				secNavModule.addMoreBtn();
			}
			
			return this;
		},

		//show/hide the extra navigation hidems
		toggleExtras: function(opt){
			secNavModule.moreListItems.toggleClass("show", opt);
			return this;
		},

		// inserts the icon to for expansion of the nav
		addMoreBtn: function(){
			secNavModule.nav.find("li:eq(2)").after(navMoreBtn);
			return this;
		},

		// show/hide of the extra nav items when on ipad or larger device
		handelExtras: function(event, data){
			secNavModule.secNavMore.toggleClass("hide", YCAFE.isIpad && data.orientation.type === "landscape-primary");
			secNavModule.column.removeClass("content__column--expanded");
			secNavModule.toggleExtras(false);

			if( !YCAFE.isMobile ){
				$(document.body).removeClass("body--fixed");
			}

			return this;
		},

		// expands column
		toggleContentNav: function(e){
			secNavModule.column.toggleClass("content__column--expanded");
			secNavModule.toggleExtras(secNavModule.column.hasClass("content__column--expanded"));

			$(document.body).toggleClass("body--fixed");

			e.preventDefault();

			return this;
		}

	};



	$(document)
		.on("ready", secNavModule.init) // may make this a hard call
		.on("click", "#secNavMore", secNavModule.toggleContentNav)
		.on("click", "#closeMore", secNavModule.toggleContentNav);

	$(window)
		.on("deviceOrientationChange", secNavModule.handelExtras);


}(window.jQuery));
