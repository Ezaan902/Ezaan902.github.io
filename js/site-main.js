; (function () {
	'use strict';

	var mobileMenuOutsideClick = function () {
		$(document).click(function (e) {
			var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-gtco-nav-toggle').removeClass('active');
				}
			}
		});
	};

	var offcanvasMenu = function () {
		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);
			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {
			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});

		$(window).resize(function () {
			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-gtco-nav-toggle').removeClass('active');
			}
		});
	};

	var burgerMenu = function () {
		$('body').on('click', '.js-gtco-nav-toggle', function (event) {
			var $this = $(this);

			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();
		});
	};

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '85%' });
	};

	var dropdown = function () {
		$('.has-dropdown').mouseenter(function () {
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');
		}).mouseleave(function () {
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});
	};

	var testimonialCarousel = function () {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});
	};

	var tabs = function () {
		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function () {
			setTimeout(function () {
				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

				tabContentWrap.css('height', totalHeight);

				$(window).resize(function () {
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight);
				});
			}, 100);
		};

		autoHeight();

		// Click tab menu
		$('.gtco-tab-nav a').on('click', function (event) {
			var $this = $(this),
				tab = $this.data('tab');
			$('.tab-content')
				.addClass('animated-fast fadeOutDown');
			$('.tab-content')
				.removeClass('active');
			$('.gtco-tab-nav li').removeClass('active');
			$this
				.closest('li')
				.addClass('active')
			$this
				.closest('.gtco-tabs')
				.find('.tab-content[data-tab-content="' + tab + '"]')
				.removeClass('animated-fast fadeOutDown')
				.addClass('animated-fast active fadeIn');
			autoHeight();
			event.preventDefault();
		});
	};

	var goToTop = function () {
		$('.js-gotop').on('click', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
				$('.gocolormode').addClass('active');
			} else {
				$('.js-top').removeClass('active');
				$('.gocolormode').removeClass('active');
			}
		});
	};

	var goToAbout = function () {
		$('.js-goabout').on('click', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('#gtco-testimonial').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};

	var goToPortfolio = function () {
		$('.js-goportfolio').on('click', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('#gtco-features-2').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};

	var goToPresta = function () {
		$('.js-gopresta').on('click', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('#gtco-features').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};

	var goToContact = function () {
		$('.js-gocontact').on('click', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('#gtco-subscribe').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};

	// Loading page
	var loaderPage = function () {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#gtco-counter').length > 0) {
			$('#gtco-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	$(function () {
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		tabs();
		goToAbout();
		goToPortfolio();
		goToPresta();
		goToContact();
		goToTop();
		loaderPage();
		counterWayPoint();
	});
}());

fetch('config.json')
	.then(response => response.json())
	.then(jsonData => {
		const logoImage = document.getElementById("logo-pic");
		logoImage.src = jsonData.logoPic;

		const authorImage = document.getElementById("author-pic");
		authorImage.src = jsonData.author.authorPic;

		const authorPresentationContainer = document.getElementById("author-presentation-container");
		jsonData.author.authorPresentation.forEach(paragraph => {
			const p = document.createElement("p");
			p.innerHTML = paragraph;
			authorPresentationContainer.appendChild(p);
		});

		const miniIconContainer = document.getElementById("author-social-media-container");
		jsonData.author.authorSocialMedias.forEach(item => {
			const anchor = document.createElement('a');
			anchor.href = item.url;
			anchor.target = '_blank';
			const img = document.createElement('img');
			img.id = item.icon.split('.')[0].replace('images/', '');
			img.src = item.icon;
			img.alt = item.name;
			img.className = 'mini-icon';
			anchor.appendChild(img);
			miniIconContainer.appendChild(anchor);
			miniIconContainer.append(" ");
		});

		const portfolioPresentationContainer = document.getElementById("portfolio-presentation-container");
		jsonData.portfolio.portfolioPresentation.forEach(paragraph => {
			const p = document.createElement("p");
			p.innerHTML = paragraph;
			portfolioPresentationContainer.appendChild(p);
		});

		var colDiv = document.getElementById("portfolio-video-1");
		var link = colDiv.querySelector("a");
		var videoDiv = colDiv.querySelector(".gtco-video");
		var overlayDiv = colDiv.querySelector(".overlay");
		var playIcon = overlayDiv.querySelector("img");
		link.href = jsonData.portfolio.portfolioContentVideoPresentation.item1.content;
		videoDiv.style.backgroundImage = `url(${jsonData.portfolio.portfolioContentVideoPresentation.item1.miniature})`;
		playIcon.src = jsonData.portfolio.portfolioContentVideoPresentation.videoIcon;

		var colDiv = document.getElementById("portfolio-video-2");
		var link = colDiv.querySelector("a");
		var videoDiv = colDiv.querySelector(".gtco-video");
		var overlayDiv = colDiv.querySelector(".overlay");
		var playIcon = overlayDiv.querySelector("img");
		link.href = jsonData.portfolio.portfolioContentVideoPresentation.item2.content;
		videoDiv.style.backgroundImage = `url(${jsonData.portfolio.portfolioContentVideoPresentation.item2.miniature})`;
		playIcon.src = jsonData.portfolio.portfolioContentVideoPresentation.videoIcon;

		var colDiv = document.getElementById("portfolio-video-3");
		var link = colDiv.querySelector("a");
		var videoDiv = colDiv.querySelector(".gtco-video");
		var overlayDiv = colDiv.querySelector(".overlay");
		var playIcon = overlayDiv.querySelector("img");
		link.href = jsonData.portfolio.portfolioContentVideoPresentation.item3.content;
		videoDiv.style.backgroundImage = `url(${jsonData.portfolio.portfolioContentVideoPresentation.item3.miniature})`;
		playIcon.src = jsonData.portfolio.portfolioContentVideoPresentation.videoIcon;


		const portfolioType1 = document.getElementById("portfolio-type-1");
		var iconElement = portfolioType1.querySelector("img");
		var titleElement = portfolioType1.querySelector("h3");
		iconElement.src = jsonData.portfolio.portfolioMiniatureTypes.item1.icon;
		iconElement.alt = jsonData.portfolio.portfolioMiniatureTypes.item1.title;
		titleElement.textContent = jsonData.portfolio.portfolioMiniatureTypes.item1.title;

		const portfolioType2 = document.getElementById("portfolio-type-2");
		var iconElement = portfolioType2.querySelector("img");
		var titleElement = portfolioType2.querySelector("h3");
		iconElement.src = jsonData.portfolio.portfolioMiniatureTypes.item2.icon;
		iconElement.alt = jsonData.portfolio.portfolioMiniatureTypes.item2.title;
		titleElement.textContent = jsonData.portfolio.portfolioMiniatureTypes.item2.title;

		const portfolioType3 = document.getElementById("portfolio-type-3");
		var iconElement = portfolioType3.querySelector("img");
		var titleElement = portfolioType3.querySelector("h3");
		iconElement.src = jsonData.portfolio.portfolioMiniatureTypes.item3.icon;
		iconElement.alt = jsonData.portfolio.portfolioMiniatureTypes.item3.title;
		titleElement.textContent = jsonData.portfolio.portfolioMiniatureTypes.item3.title;

		const portfolioType4 = document.getElementById("portfolio-type-4");
		var iconElement = portfolioType4.querySelector("img");
		var titleElement = portfolioType4.querySelector("h3");
		iconElement.src = jsonData.portfolio.portfolioMiniatureTypes.item4.icon;
		iconElement.alt = jsonData.portfolio.portfolioMiniatureTypes.item4.title;
		titleElement.textContent = jsonData.portfolio.portfolioMiniatureTypes.item4.title;

		const portfolioType5 = document.getElementById("portfolio-type-5");
		var iconElement = portfolioType5.querySelector("img");
		var titleElement = portfolioType5.querySelector("h3");
		iconElement.src = jsonData.portfolio.portfolioMiniatureTypes.item5.icon;
		iconElement.alt = jsonData.portfolio.portfolioMiniatureTypes.item5.title;
		titleElement.textContent = jsonData.portfolio.portfolioMiniatureTypes.item5.title;

		const portfolioContentContainer = document.getElementById("portfolio-content-container");
		jsonData.portfolio.portfolioContent.forEach(item => {
			const div = document.createElement("div");
			const a = document.createElement("a");
			const img = document.createElement("img");

			div.className = "col-md-12 margin-bottom-portfolio";
			a.href = item.content;
			a.target = "_blank";
			img.src = item.content;
			img.style.cssText = "height:auto; width:100%; border-radius:7px;";

			a.appendChild(img);
			div.appendChild(a);
			portfolioContentContainer.appendChild(div);
		});

		const portfolioContentAddContainer = document.getElementById("portfolio-content-additional-container");
		jsonData.portfolio.portfolioContentAdditionnal.forEach(item => {
			const div = document.createElement("div");
			const a = document.createElement("a");
			const img = document.createElement("img");

			div.className = "col-md-12 margin-bottom-portfolio";
			a.href = item.content;
			a.target = "_blank";
			img.src = item.content;
			img.style.cssText = "height:auto; width:100%; border-radius:7px;";

			a.appendChild(img);
			div.appendChild(a);
			portfolioContentAddContainer.appendChild(div);
		});

		const prestationPresentationContainer = document.getElementById("prestation-presentation-container");
		jsonData.prestation.prestationPresentation.forEach(paragraph => {
			const p = document.createElement("p");
			p.innerHTML = paragraph;
			prestationPresentationContainer.appendChild(p);
		});

		const contactPresentationContainer = document.getElementById("contact-presentation-container");
		jsonData.contact.contactPresentation.forEach(paragraph => {
			const p = document.createElement("p");
			p.innerHTML = paragraph;
			contactPresentationContainer.appendChild(p);
		});
		const contactMailLink = document.getElementById("mailto-contact");
		contactMailLink.innerHTML = jsonData.contact.contactMail;
		contactMailLink.href = "mailto:" + jsonData.contact.contactMail;

		const devSection = document.getElementById("the-dev");
		if (jsonData.devIsVisible) {
			devSection.style.display = "block";
		} else {
			devSection.style.display = "none";
		}
	}).catch(error => console.error('Error fetching JSON:', error));