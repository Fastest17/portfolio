$(document).ready(function(){
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    //animate button
    $(".toggle_menu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    //hide nav menu, when click on link
    $(".top_menu ul a").click(function () {
        $(".top_menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").removeClass("h_opacity");
    }).append("<span>");

    //show-hide nav menu
    $(".toggle_menu").click(function () {
        if($(".top_menu").is(":visible")){
            $(".top_text").removeClass("h_opacity");
            $(".top_menu").fadeOut(600);
            $(".top_menu li a").removeClass("fadeInUp animated");
        } else  {
            $(".top_text").addClass("h_opacity");
            $(".top_menu").fadeIn(600);
            $(".top_menu li a").addClass("fadeInUp animated");
        }
    });


    // animation h1 name
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

    //popup
    $(".popup").magnificPopup({type: "image"});

    //animation about me section
    $(".animation_center").animated("flipInY", "flipOutY");
    $(".animation_left").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_right").animated("fadeInRight", "fadeOutRight");

    //animation CV  section
    $(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right .resume_item").animated("fadeInRight", "fadeOutRight");

    //portfolio
    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });


    $(".top_menu ul a").mPageScroll2id();
});



// loader
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

