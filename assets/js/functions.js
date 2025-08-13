(function ($) {
    "use strict";
    
    $("ul>li>ul").parent("li").addClass("menu-item-has-children");
    $('.navbar-menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (parseInt($(window).width()) < 992) {
            if (element.hasClass('show')) {
                element.removeClass('show');
                element.find('li').removeClass('show');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('show');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('show');
                element.siblings('li').find('li').removeClass('show');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    })
    // massonry portfolio
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 15
    });

}(jQuery));



$(window).scroll(function() { 
    $(".primary-menu").removeClass("fixed-top-menu");
    var scroll = $(window).scrollTop();
    if (scroll > 65) {
        $(".primary-menu").addClass("fixed-top-menu");
    }
});


/*  - Scroll-top 
    ---------------------------------------------*/
    jQuery(document).ready(function(){

    //Check to see if the window is top if not then display button
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollToTop').fadeIn();
            $(".scroll-top").addClass("fixed-scroll");
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scrollToTop').click(function(){
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });
});




// $('.carousel').carousel({
//   interval: 1000 * 5
// });


// boxer
$(".boxer").boxer();



// flexslider  

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});



// // scroll bar custom js
// (function($){
//     $(window).load(function(){
        
//         /* all available option parameters with their default values */
//         $(".scroll-content").mCustomScrollbar({
//             setWidth:false,
//             setHeight:false,
//             setTop:0,
//             setLeft:0,
//             axis:"y",
//             scrollbarPosition:"inside",
//             scrollInertia:950,
//             autoDraggerLength:true,
//             autoHideScrollbar:false,
//             autoExpandScrollbar:false,
//             alwaysShowScrollbar:1,
//             snapAmount:null,
//             snapOffset:0,
//             mouseWheel:{
//                 enable:true,
//                 scrollAmount:"auto",
//                 axis:"y",
//                 preventDefault:false,
//                 deltaFactor:"auto",
//                 normalizeDelta:false,
//                 invert:false,
//                 disableOver:["select","option","keygen","datalist","textarea"]
//             },
//             scrollButtons:{
//                 enable:false,
//                 scrollType:"stepless",
//                 scrollAmount:"auto"
//             },
//             keyboard:{
//                 enable:true,
//                 scrollType:"stepless",
//                 scrollAmount:"auto"
//             },
//             contentTouchScroll:25,
//             advanced:{
//                 autoExpandHorizontalScroll:true,
//                 autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
//                 updateOnContentResize:true,
//                 updateOnImageLoad:true,
//                 updateOnSelectorChange:false,
//                 releaseDraggableSelectors:false
//             },
//             theme:"light",
//             callbacks:{
//                 onInit:false,
//                 onScrollStart:false,
//                 onScroll:false,
//                 onTotalScroll:false,
//                 onTotalScrollBack:false,
//                 whileScrolling:false,
//                 onTotalScrollOffset:0,
//                 onTotalScrollBackOffset:0,
//                 alwaysTriggerOffsets:true,
//                 onOverflowY:false,
//                 onOverflowX:false,
//                 onOverflowYNone:false,
//                 onOverflowXNone:false
//             },
//             live:false,
//             liveSelector:null
//         });
        
//     });
// })(jQuery);



// counter up
$('.number').counterUp({
    delay: 10,
    time: 2000
});


// swiper for we do section
var swiper = new Swiper('.best-service-container', {
    spaceBetween: 30,
    grabCursor: false,
    nextButton: '.best-service-container-next',
    prevButton: '.best-service-container-prev',
    slidesPerView: 3,
    breakpoints: {
            990: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
});

// client section
var swiper = new Swiper('.client-slider-container', {
    spaceBetween: 20,
    grabCursor: false,
    // autoplay: 3000,
    slidesPerView: 5,
     breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
});




// price range js
$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
    }
});


// product zoom
//initiate the plugin and pass the id of the div containing gallery images 
    $("#img_01").elevateZoom({
        gallery:'gal1',
        zoomType:'inner'
    });

   
//pass the images to Fancybox 
$("#img_01").bind("click", function(e) { 
var ez = $('#img_01').data('elevateZoom');  
$.fancybox(ez.getGalleryList());
return false;
 });



// preloader  


$(window).load(function() {
    $("#loading").delay(2000).fadeOut(500);
    $("#loading-center").click(function() {
    $("#loading").fadeOut(500);
    })
})






// search css
jQuery(".search-icon").click(function(event) {  
        jQuery('body').toggleClass("search-area-open");
        event.stopPropagation();      
      });

jQuery(document).on("click", function(event) {
    if (jQuery(event.target).is(".search-area,.search-area-inner,.search-area-inner>form") === true) {
        jQuery('body').removeClass("search-area-open");
    }
  });
