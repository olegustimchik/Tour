$(document).ready(function(){
    $(".tour-item").on("click",function(event){
            event.preventDefault();
            $(this).siblings().removeClass("active-text");
            $(this).toggleClass("active-text");
        }); 
}
);

