/* juqeyr.smoothPageScroll init setting */
$('a[href^="#"]:not(.flower_nav a)').smoothPageScroll({
	speed: 1500,
	isLeftScroll: false
});

/* background flowers */
$('.materials').randomElements([
	'<img src="/img/bg_flower_01.png">',
	'<img src="/img/bg_flower_02.png">',
	'<img src="/img/bg_flower_04.png">',
	'<img src="/img/bg_flower_07.png">'
],{
	num: 15,
	min: 300
});

/* flowers tab */
$('.flower_nav').tab();

/* parallax */
const parallaxMain = (function() {
	const $contents = $('#header, #present, #particular_about, #flower');
	const $nav = $('.nav_item');

	// header material
	const $headerMaterial = $('#header [class^=material]');
	$headerMaterial.each(function(){
		const speedRandom = Math.floor(Math.random() * 2) + 10;
		const isPlus = Math.floor(Math.random() * 2);
		$(this).parallaxSpeed({
    	style: ['top'],
			speed: speedRandom * (isPlus ? 1 : -1)
		})
	});

	// nav
	$contents.each(function(){
		$(this).parallaxTiming({
    	timingLinePercent: 60,
			toggle:[selectNav, selectNav]
		})
	});

	function selectNav(e) {
		const index = $contents.index(e.target) + (e.isOver ? 0 : -1);
		$nav.removeClass('on').eq(index).addClass('on');

		if(e.isOver) {
			e.target.addClass('on');
		} else {
			e.target.removeClass('on');
		}
	}

	// ribbon
	$('.ribbon').parallaxFit({
	    start: 0,
	    end: 1000,
	    fromStyle: {
        top: 0,
				right: 0
	    },
	    toStyle: {
				top: '-343px',
	      right: '-30px',
	    },
	    easing: 'easeOutQuad'
	});

	// present
	const $presentMaterial1 = $('.present_material_1');
	const presentMaterial1Top = parseInt($presentMaterial1.css('top'));
	const presentMaterial1Left = parseInt($presentMaterial1.css('left'));
	$presentMaterial1.parallaxFit({
	    start: '.present,-300',
	    end: '.present',
	  	fromStyle: {
				'opacity': 0,
				'top': presentMaterial1Top + 70 +'px',
				'left': presentMaterial1Left - 70 +'px',
	      'transform': 'rotate(10deg)',
	    },
	    toStyle: {
				'opacity': 1,
				'top': presentMaterial1Top + 'px',
				'left': presentMaterial1Left + 'px',
	      'transform': 'rotate(0deg)',
	    },
	    easing: 'easeOutBack'
	});


	const $presentMaterial2 = $('.present_material_2');
	const presentMaterial12Top = parseInt($presentMaterial2.css('top'));
	const presentMaterial12Left = parseInt($presentMaterial2.css('left'));
	$presentMaterial2.parallaxFit({
	    start: '.present,-200',
	    end: '.present',
	  	fromStyle: {
				'opacity': 0,
				'top': presentMaterial12Top - 10 +'px',
				'left': presentMaterial12Left + 50 +'px',
	      'transform': 'rotate(-80deg)',
	    },
	    toStyle: {
				'opacity': 1,
				'top': presentMaterial12Top + 'px',
				'left': presentMaterial12Left + 'px',
	      'transform': 'rotate(0deg)',
	    },
	    easing: 'easeOutBack'
	});

	// particular_about
	const $particularAboutNaterial1 = $('.particular_about_material_1');
	const particularAboutNaterial1Top = parseInt($particularAboutNaterial1.css('top'));
	const particularAboutNaterial1Left = parseInt($particularAboutNaterial1.css('left'));
	$particularAboutNaterial1.parallaxFit({
	    start: '.particular_about,-300',
	    end: '.particular_about',
	  	fromStyle: {
				'opacity': 0,
				'top': particularAboutNaterial1Top + 70 +'px',
				'left': particularAboutNaterial1Left - 70 +'px',
	      'transform': 'rotate(10deg)',
	    },
	    toStyle: {
				'opacity': 1,
				'top': particularAboutNaterial1Top + 'px',
				'left': particularAboutNaterial1Left + 'px',
	      'transform': 'rotate(0deg)',
	    },
	    easing: 'easeOutBack'
	});

	// particular_about
	const $particularAboutNaterial2 = $('.particular_about_material_2');
	const particularAboutNaterial2Top = parseInt($particularAboutNaterial2.css('top'));
	$particularAboutNaterial2.parallaxFit({
	    start: '.particular_about,-200',
	    end: '.particular_about',
	  	fromStyle: {
				'opacity': 0,
				'top': particularAboutNaterial2Top + 20 +'px',
	    },
	    toStyle: {
				'opacity': 1,
				'top': particularAboutNaterial2Top + 'px',
	    },
	    easing: 'easeOutBack'
	});

	// background flower
	const $backgroundFlowers = $('[class^=randomContent]');
	$backgroundFlowers.each(function(){
		const speedRandom = Math.floor(Math.random() * 2) + 3;
		const isPlus = Math.floor(Math.random() * 2);
		$(this).parallaxSpeed({
    	style: ['top'],
			speed: speedRandom * (isPlus ? 1 : -1)
		})
	});

	let deg = [];
	const random1 = Math.random() * 2.5 + 1;
	const random2 = Math.random() * 2.5 + 1;

	$(window).on('scroll resize load', function () {
		$backgroundFlowers.each(function(i){
			deg[i] = deg[i] || 0;
			deg[i] += i % 2 ? random1 : -random2;
			deg[i] -= i % 3 ? 0.5 : 0;
			$(this).css({
				transform: `rotate(${deg[i]}deg)`
			})
		});
	});
})();