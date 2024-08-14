$(document).ready(function(){
    $('.slider').slick({
        autoplay: false,
	    dots: false,
        prevArrow:  $('.left-arrow'), 
        nextArrow: $('.right-arrow'),
        arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        centerMode : false,
        mobileFirst: true,
		responsive: [
            {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 3,
                }          
            }, 
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }          
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }          
            }, 
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }          
            }, 
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }          
            }

    	]
    });
})
