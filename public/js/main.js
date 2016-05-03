$(document).ready(function(){
	$(document).foundation();
	$("img.lazy").lazyload({effect : "fadeIn"});
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