/* ---------------------------------------------
	Handles toggle switch form element
		- jQuery is a dependency
------------------------------------------------*/

(function ($){

	function handelSwitch(e){

		var $target = $(e.currentTarget),
			$switchInput = $target.find("input"),
			data = $switchInput.data(),
			value = $switchInput.prop("checked").toString();

		$switchInput.prop("value", value);

		$target
			.parents("form")
				.find("[data-switch='"+ data.targetSwitch +"']")
				.toggleClass("control-switch-tag-on control-switch-tag-off");


		$("[data-switch='"+ data.targetSwitch +"']")
			.find(".unlock").toggleClass("hide")
				.end()
			.find(".lock").toggleClass("hide");

	}

	$(document).on("change", "label.control-switch", handelSwitch);

}(window.jQuery));