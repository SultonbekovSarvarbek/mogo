
$(function()
{

    var header = $("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset= $(window).scrollTop();

    $(window).on("scroll",function(){
        scrollOffset=$(this).scrollTop();
        
    });

    $("[data-scroll]").on("click",function(event)
    {
        event.preventDefault();

        var blockId= $(this).data('scroll'),
            blockOffset=$(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        },1000);


    });

});