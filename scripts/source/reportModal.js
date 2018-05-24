/* ---------------------------------------------
	Methods for the Report Abuse Modal
		- jQuery is a dependency
------------------------------------------------*/

(function ($){

	var flagged = {

		toggleOptions: function(e){
			var $target = $(e.currentTarget), 
				id = $target.prop("id"),
				isButton = $target.hasClass("btn");


			if ( isButton ){
				e.preventDefault();
			}

			$("[data" + (isButton ? "-fieldset" : "" ) + "-id]", flagged.form).addClass("hide");
			$("[data" + (isButton ? "-fieldset" : "" ) + "-id='"+ id +"']", flagged.form).toggleClass("hide");

			return this;
		},


		toggleDisabled: function(e){
			$(e.currentTarget).parents("fieldset").find("a.disabled").removeClass("disabled");
			return this;
		}
	};


	$(document)
		.on("click touchend", "[name='what_is_going_on'], a.btn", flagged.toggleOptions)
		.on("click touchend", "[name='i_am_reporting'], [name='what_is_going_on']", flagged.toggleDisabled)


}(window.jQuery));