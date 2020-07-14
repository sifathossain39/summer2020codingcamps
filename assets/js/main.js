
(function($) {
    'use strict';

    AOS.init({
        duration: 700,
        easing: 'ease-in-out'
        //  once: true
    });


    // for performance only watch for:
    // 1. mousemove
    // 2. the animation of the swiper is in progress
    // requestAnimationFrame(mousePositionTrack);

    if (!Modernizr.touchevents) {

        $(document).on('mousemove', function(event) {
            window.mousePosition.x = event.pageX;
            window.mousePosition.y = event.pageY;

            if ( window.swiper ) {
                updateColor(window.swiper);
            }

        });

    }


    $(document).ready(function() {


        new Swiper('#home', {
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: {
                sensitivity: 5
            },
            grabCursor: true,
            breakpoints: {
                2400: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slidesOffsetAfter: 0,
                    slidesPerGroup: 1
                },
                1023: {
                    freeMode: true,
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slidesOffsetAfter: 0,
                    slidesPerGroup: 1
                }
            }
        });



        $('.swiper-container').removeClass('is-invisible');


    });

})(jQuery);
