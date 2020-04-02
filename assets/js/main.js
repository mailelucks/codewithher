var controller = {
	mobileMenu: function () {
		var $menuTrigger = document.querySelectorAll('[data-mobile-menu]'),
			$closeTrigger = document.querySelectorAll('[data-mobile-menu-close]'),
			$opacityLayer = document.getElementById('opacityLayer'),
			$nav = document.querySelector('nav');
			$header = document.querySelector('header');

		var openMenu = function() {
			$header.classList.add('nav-open');
			$opacityLayer.classList.add('nav-open');
			$nav.classList.add('open');console.log(1);
		}
		var closeMenu = function(){
			$header.classList.remove('nav-open');
			$opacityLayer.classList.remove('nav-open');
			$nav.classList.remove('open');
			
		};

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 750
		});

		var mobileTrigger = function() {
			
			if ($header.classList.contains('nav-open')) {
				closeMenu();
			}
		}

		document.addEventListener('scrollStart', mobileTrigger, false);

		$menuTrigger.forEach((element) => { 
			element.addEventListener('click', openMenu);
		});

		$closeTrigger.forEach((element) => { 
			element.addEventListener('click', closeMenu);
		});

		$opacityLayer.addEventListener('click', closeMenu);

	},
	stickyHeaderMarkup: function () {
		var $header = $('header');

		$header.clone().addClass('sticky').insertAfter('header').attr('id', 'cwh-sticky');

		this.stickyHeader();

	},
	stickyHeader: function () {
		var target = 500;

		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();

			if (scroll >= target) {
				$('.sticky').addClass('visible');
			} else {
				$('.sticky').removeClass('visible');
			}
		});
	},
	mobileAccordion: function (accordionTargets) {
	
		var accordion = function(item) {
			item.addEventListener('click', function(){
				item.classList.toggle('accordion-active');
			});
		}

		accordionTargets.forEach(accordion);

	},
	staffPopup: function () {

		$('#kylie-trigger').magnificPopup({
			type:'inline',
			src: '#kylie-info'
		});

		$('#manisha-trigger').magnificPopup({
			type:'inline',
			src: '#manisha-info'
		});

		$('#michaela-trigger').magnificPopup({
			type:'inline',
			src: '#michaela-info'
		});

		$('#maile-trigger').magnificPopup({
			type:'inline',
			src: '#maile-info'
		});
	}
}


$(document).ready( function(){
	controller.stickyHeaderMarkup();
	controller.mobileMenu();

	var resizer;

	$(window).on('resize', function(e){
		clearTimeout(resizer);
		resizer = setTimeout( function(){
			controller.stickyHeader();
		}, 250);
	});

	if ($('.accordion')) {
		var accordionTargets = document.querySelectorAll('.accordion');
		controller.mobileAccordion(accordionTargets);
	}

	if ($('.home')) {
		controller.staffPopup();
	}

});


