(function($) { "use strict";
		
	//Page cursors

	
$(window).mousemove(function(e) { 	  
	$(".cursor").css({
		left: e.pageX,
		top: e.pageY
	})	  
})
$(".cursor-link")
.on("mouseenter", function() {	 
$('.cursor').addClass("active")	  
})
.on("mouseleave", function() {	  
$('.cursor').removeClass("active")	  
})		
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	          
})(jQuery); 