$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1380,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.responsives').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1290,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 910,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.completed_projects_slider').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 910,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.mobile_card').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.sertificate').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 855,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 586,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$('#acc_open').click(function () {
    $('.accordion').slideDown(1000)
});
$('#acc_close').click(function () {
    $('.accordion').slideUp(1000)
});
$('#acc_open1').click(function () {
    $('.accordion1').slideDown(1000)
});
$('#acc_close1').click(function () {
    $('.accordion1').slideUp(1000)
});
$('#acc_open2').click(function () {
    $('.accordion2').slideDown(1000)
});
$('#acc_close2').click(function () {
    $('.accordion2').slideUp(1000)
});
$('#acc_open3').click(function () {
    $('.accordion3').slideDown(1000)
});
$('#acc_close3').click(function () {
    $('.accordion3').slideUp(1000)
});
$('#acc_open4').click(function () {
    $('.accordion4').slideDown(1000)
});
$('#acc_close4').click(function () {
    $('.accordion4').slideUp(1000)
});
$('#acc_open5').click(function () {
    $('.accordion5').slideDown(1000)
});
$('#acc_close5').click(function () {
    $('.accordion5').slideUp(1000)
});

$(window).scroll({
        previousTop: 0
    },
    function () {
        let currentTop = $(window).scrollTop();
        if (currentTop < (this.previousTop + 2)) {
            $(".header").show();
        } else {
            $(".header").hide();
        }
        this.previousTop = currentTop;
    });

$('#ask').click(function () {
    $('#ask').hide(400);
    $('#askOff').show(400);
    $('.askToggle').slideDown(400);
    $(".about_us").css('background-image', 'url(img/special_conditions_bd.png)')
});
$('#askOff').click(function () {
    $('#ask').show(400);
    $('#askOff').hide(400);
    $('.askToggle').slideUp(400);
    $(".about_us").css('background-image', 'url(img/asked_questions_bg.png)')
});
$('#btnOnCalc').click(function () {
    $('.offCalc').css('display', 'flex');
    $('#btnOnCalc').hide(500);
    $('#btnOffCalc').show(500);
});
$('#btnOffCalc').click(function () {
    $('.offCalc').css('display', 'none');
    $('#btnOnCalc').show(500);
    $(this).hide(500);
    let title = $('.title').offset().top;
    $('html, body').animate({
        'scrollTop': title
    }, 400);
});
$('.firstOption').click(function () {
    $('.secondOption').css('display', 'flex').css('transition', '1s');
    $('#btnOnCalc').hide(500);
})
$('.secOption').click(function () {
    $('.thirdOption').css('display', 'flex').css('transition', '1s');
})
$('.thOption').click(function () {
    $('.fourthOption').css('display', 'flex').css('transition', '1s');
})
$('.fOption').click(function () {
    $('.fivesOption').css('display', 'flex').css('transition', '1s');
})
$('.fiOption').click(function () {
    $('.sixOption').css('display', 'flex').css('transition', '1s');
})
$('.sOption').click(function () {
    $('.sevenOption').css('display', 'flex').css('transition', '1s');
})
$('.asked').click(function () {
    $('.answer').slideToggle(500);
});
$('.asked1').click(function () {
    $('.answer1').slideToggle(500);
});
$('.asked2').click(function () {
    $('.answer2').slideToggle(500);
});
$('.asked3').click(function () {
    $('.answer3').slideToggle(500);
});
$('.asked4').click(function () {
    $('.answer4').slideToggle(500);
});
$('.asked5').click(function () {
    $('.answer5').slideToggle(500);
});
$('.asked6').click(function () {
    $('.answer6').slideToggle(500);
});
$('.asked7').click(function () {
    $('.answer7').slideToggle(500);
});
if (window.innerWidth <= 768) {
    $(document).mouseup(function (e) {
        $('.descriptionAdv').hide(500);
        $('.showAdv').show(500);
    });
    $('.showAdv').click(function (e) {
        $('.showAdv').hide(500);
        $('.descriptionAdv').show(500);
    })
}
$(document).mouseup(function (e) { // событие клика по веб-документу
    let div = $('.accordion, .accordion1, .accordion2, .accordion3, .accordion4, .accordion5'); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(500);
        // скрываем его
    }
});
$(document).mouseup(function (e) {
    $('.accordion, .accordion1, .accordion2, .accordion3, .accordion4, .accordion5').hide(500);
});
$(function () {
    $('.minimized').click(function (event) {
        let i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });
    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});
// Set the date we're counting down to
let countDownDate = new Date("Jul 01, 2021 00:00:00").getTime();
let countDownDateSecond = new Date("Jul 01, 2021 00:00:00").getTime();
let countDownDateThird = new Date("Jul 01, 2021 00:00:00").getTime();
// Update the count down every 1 second
let x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now an the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
let y = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now an the count down date
    let distance = countDownDateSecond - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("daysS").innerHTML = days;
    document.getElementById("hrsS").innerHTML = hours;
    document.getElementById("minS").innerHTML = minutes;
    document.getElementById("secS").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
let z = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now an the count down date
    let distance = countDownDateThird - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("daysT").innerHTML = days;
    document.getElementById("hrsT").innerHTML = hours;
    document.getElementById("minT").innerHTML = minutes;
    document.getElementById("secT").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(".f1").find("a").click(function () {
    $(".f1").find("a").removeClass('active');
    $(this).addClass('active');
});
$(".f2").find("a").click(function () {
    $(".f2").find("a").removeClass('active');
    $(this).addClass('active');
});

let calc = {
    summ: 0, // сумма изначально 0
    valueArray: (function () { //массив изначально создается на основе данных value выбранных кнопок
        let array = [],
            arrayLength = $(" .calc__group--input").length;
        for (let i = 0; i < arrayLength; i++) {
            array[i] = parseInt($(" .calc__group--input").eq(i).find("input:checked").attr("value")) || 0;
        };
        return array;
    })(),
    summation: function () { //суммирует значения массива с данными
        let area = document.querySelector('input[name="area"]').value;
        let summ = 0,
            i = this.valueArray.length - 1;
        for (; i >= 0; i--) {
            summ += this.valueArray[i] * area;
        };
        this.summ = summ;
        $("#summ").html(calc.summ);
    },
    changeEvent: function () { //подключение обработчика событий
        $("input[type='radio']").change(function () { //для радиокнопок
            let element = event.target,
                elementValue = parseInt(element.value),
                elementId = $(element).parents(".calc__group--input").index();
            calc.valueArray[elementId] = elementValue;
            calc.summation();
        });
    },
    init: function () {
        calc.summation();
        calc.changeEvent();
    }
};
calc.init();