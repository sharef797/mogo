$(function(){
    'use strict'

    // Counter-up part start
    $('.counter').counterUp();

    // Slider part start
    $('.slider_item').slick({
        autoplay: true,
        speed: 3000,
        nextArrow: '<i class="fas fa-chevron-left nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-right prv_arrow"></i>',
    });



    
});