$(document).ready(function () {
    $('.swiper-filter').on('click', 'a', function () {
        let filter = $(this).attr('data-filter');
        $('.swiper-product .swiper-slide').css('display', 'none')
        $('.swiper-product .swiper-slide' + filter).css('display', '')
        $('.swiper-filter a').removeClass('swiper-active');
        $(this).addClass('swiper-active');
        productSwiper.updateSize();
        productSwiper.updateSlides();
        productSwiper.updateProgress();
        productSwiper.updateSlidesClasses();
        productSwiper.slideTo(0);
        productSwiper.scrollbar.updateSize();
        return false;
    });
    let filterSwiper = new Swiper('.swiper-filter', {
        slidesPerView: 3,
        spaceBetween: 30,
    })
    let productSwiper = new Swiper('.swiper-product', {
        /*grabCursor: true,*/
        slidesPerView: 3,
        runCallbacksOnInit: true,
        breakpoints: {
            720: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            1070: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
});

// $(".filterLink").one('click', function () {
//     $('html,body').animate({scrollTop: $(".sliderM").offset().top - 350}, 'slow');
// });

// $(".filterLink").click(function () {
//         $('html,body').animate({scrollTop: $(".sliderM").offset().top - 370}, 'slow');
//     }
// )
