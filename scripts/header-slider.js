$(document).ready(function(){
    $('.header-slider').slick({
        autoplay: true,
	    dots: false,
        arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
        centerMode : false,
    });
  
    $(".header-slider-dot").on("click",function(event){
        event.preventDefault();
        const indexToGo = $(this).data("index");
        $( '.header-slider' ).slick('slickGoTo', indexToGo);
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
    }); 

    $('.header-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".header-slider-dot").siblings().removeClass("active");
        $(".header-slider-dot").filter(function(){return $(this).data("index") === nextSlide + 1 }).toggleClass("active");
    });
})