$(document).ready(function () {
	// dd navbar color swap on scroll.
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$('.sticky').addClass('stickyadd');
		} else {
			$('.sticky').removeClass('stickyadd');
		}
	});

	// Add Typing effect.
	let typed = new Typed('.element', {
		strings: ['Marvin', 'a Developer', 'a Designer', 'a Businessman'],
		smartBackspace: true,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity,
		startDelay: 1000,
	});

	// Waypoints
	var waypoint = new Waypoint({
		element: document.getElementById('exp-id'),
		handler: function () {
			// Progress Bars
			let p = document.querySelectorAll('.progress-bar');
			p[0].setAttribute('style', 'width: 100%; transition: 1s all');
			p[1].setAttribute('style', 'width: 95%; transition: 1.5s all');
			p[2].setAttribute('style', 'width: 85%; transition: 1.7s all');
			p[3].setAttribute('style', 'width: 99%; transition: 2s all');
			p[4].setAttribute('style', 'width: 85%; transition: 2.3s all');
			p[5].setAttribute('style', 'width: 95%; transition: 2.5s all');
		},
		offset: '90%',
	});
});
