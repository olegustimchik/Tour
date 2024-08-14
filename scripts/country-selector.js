$(document).ready(function() {
    $(".select-box__current").on("click", function(){
        $("#select-box").css("display", "flex");
        $(".select-box__value").css("display", "flex");
        $(".select-box__input-text").css("display", "block");
        $(".select-selected").removeClass("active-text");    
    }); 

    $(".select-box__value").on("click", function(){
        const inputValue = $(this).children(".select-box__input").val(); 
        $(".select-selected").text(inputValue);
        $(".select-selected").toggleClass("active-text");
        $("#select-box").css("display", "none");
        $(".select-box__value").css("display", "none");
        $(".select-box__input-text").css("display", "none") 
        console.log("display none");
    }); 
    
});