import 'script!jquery';
import 'script!foundation-sites/dist/foundation';
import 'script!slick-carousel/slick/slick';

$(document).ready(function(){
	$(document).foundation();
    $('.slick').slick({
      		slidesToShow: 1,
      		slidesToScroll: 1,
      		autoplay: true,
  			autoplaySpeed: 4000,
  			fade: true,
  			cssEase: 'linear',
  			speed: 500,
  			arrows: true
      });
});