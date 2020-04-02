var controller = {
	mobileMenu: function () {
		var $menuTrigger = document.getElementById('mobileMenu'),
			$closeTrigger = document.getElementById('mobileMenuClose'),
			$opacityLayer = document.getElementById('opacityLayer'),
			$nav = document.querySelector('nav');
			$header = document.querySelector('header');

		var openMenu = function() {
			$header.classList.add('nav-open');
			$opacityLayer.classList.add('nav-open');
			$nav.classList.add('open');
		}
		var closeMenu = function(){
			$header.classList.remove('nav-open');
			$opacityLayer.classList.remove('nav-open');
			$nav.classList.remove('open');
		};

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 500
		});

		var mobileTrigger = function() {
			
			if ($header.classList.contains('nav-open')) {
				closeMenu();
			}
		}

		document.addEventListener('scrollStart', mobileTrigger, false);

		$menuTrigger.addEventListener('click', openMenu);
		$closeTrigger.addEventListener('click', closeMenu);
		$opacityLayer.addEventListener('click', closeMenu);

	},
	mobileAccordion: function (accordionTargets) {
	
		var accordion = function(item) {
			item.addEventListener('click', function(){
				item.classList.toggle('accordion-active');
			});
		}

		accordionTargets.forEach(accordion);

	},
	popup: function (popupTargets, closePopupTargets) {

		$body = document.querySelector('body');

		var popup = function(item) {
			item.addEventListener('click', function(){
				if (!$body.classList.contains('popup-open')) {
					$body.classList.add('popup-open');
				}
				if (!item.classList.contains('current-popup-open')) {
					item.classList.add('current-popup-open');
				}
			});
		}

		var close = function(close) {

			close.addEventListener('click', function(){
				var $currentPop = document.querySelector('.current-popup-open');

				$body.classList.remove('popup-open');
				$currentPop.classList.remove('current-popup-open');

			});

		}

		popupTargets.forEach(popup);
		closePopupTargets.forEach(close);

	}
}

controller.mobileMenu();

var accordionTargets = document.querySelectorAll('.accordion');
controller.mobileAccordion(accordionTargets);

var popupTargets = document.querySelectorAll('.popup');
var closePopupTargets = document.querySelectorAll('.popup-close');
controller.popup(popupTargets, closePopupTargets);