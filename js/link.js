
$(function()
{

    var header = $("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset= $(window).scrollTop();

        checkscroll(scrollOffset);

    $(window).on("scroll",function(){
        scrollOffset=$(this).scrollTop();
        
        checkscroll(scrollOffset);
    });
        function checkscroll(scrollOffset)
        {
            scrollOffset=$(this).scrollTop();
        if(scrollOffset >= introH)
        {
            header.addClass("header--fixed");
           
        }
        else 
        {
            header.removeClass("header--fixed");
        }

        }

    $("[data-scroll]").on("click",function(event)
    {
        event.preventDefault();

        var $this=$(this),
            blockId= $(this).data('scroll'),
            blockOffset=$(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        },1000);


    });


    $("#nav_toggle").on("click",function(event)
    {event.preventDefault();

        $("#nav").toggleClass("active");

    });


   
    $("[data-accordion]").on("click",function(event)
    {
        event.preventDefault();
        
        var $this=$(this), 
            blockId= $(this).data('accordion');

            $(blockId).slideToggle();
    });

});
