$(function () {

	"use strict";

	var $document = $(document),
		$window = $(window),
		windowWidth = window.innerWidth || $window.width(),
		windowH = $window.height();

	// Template options
	var templateOption = {
			mobileMenuBreikpont: 1023,
			smoothScroll: true, // smooth scroll enable (set 'false' for disable)
			backToTop: true // back to top button enable (set 'false' for disable)
		};



	// Back To Top
	function backToTop(button, flag) {
		if (flag) {
			var $button = $(button);
			$(window).on('scroll', function () {
				if ($(this).scrollTop() >= 500) {
					$button.addClass('visible');
				} else {
					$button.removeClass('visible');
				}
			});
			$button.on('click', function () {
				$('body,html').animate({
					scrollTop: 0
				}, 1000);
			});
		} else {
			$(button).hide();
		}
	}


	// Functions Initializations
	
	backToTop('.js-backToTop', templateOption.backToTop);

})


