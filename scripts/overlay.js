$(document).ready(function(){ 
    $(".menu-button").on("click", function(){
        $(".nav-container").toggleClass("overlay");
        $(".contact-information").toggleClass("overlay-content");
        $(".nav-menu-container").toggleClass("overlay-content");
        $("body").toggleClass("deactivate-scroll");
        $(this).toggleClass("deactivate");
        $(".close-menu").removeClass("deactivate");
    });

    $(".close-menu").on("click", function(){
        $(".nav-container").removeClass("overlay");
        $(".contact-information").removeClass("overlay-content");
        $(".nav-menu-container").removeClass("overlay-content");
        $("body").removeClass("deactivate-scroll");
        $(this).toggleClass("deactivate");
        $(".menu-button").removeClass("deactivate");
    });
})