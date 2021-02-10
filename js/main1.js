$(document).ready(function () {

    new Drift(document.querySelector(".tooths"), {
        inlinePane: true,
        containInline: true,
        zoomFactor: 1
    });


    $('.result-slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        prevArrow: $('.result-arrows .prev'),
        nextArrow: $('.result-arrows .next')
    });

    var flag = 0;
    if (window.innerWidth <= 990 && flag === 0) {
        flag = 1;
        $('.using-slider').slick({
            infinite: false,
            arrows: true,
            dots: false,
            adaptiveHeight: false,
            prevArrow: $('.using .wrapper-slider .prev'),
            nextArrow: $('.using .wrapper-slider .next')
        });

    }

    $(window).on('resize', function (event) {
        windowWidth = $(window).width();
        if (event.target.innerWidth <= 990 && flag === 0) {
            flag = 1;
            $('.using-slider').slick({
                infinite: false,
                arrows: true,
                dots: false,
                adaptiveHeight: false,
                prevArrow: $('.using .wrapper-slider .prev'),
                nextArrow: $('.using .wrapper-slider .next')
            });

        }
        else if (event.target.innerWidth > 990 && flag === 1) {
            flag = 0;
            $('.using-slider').slick('unslick');
        }
    });

    $(".go-form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.order-form').offset().top}, 400);
    });

    $('.play').on("touchend, click", function (e) {
        e.preventDefault();
        $(this).parents('.shape').find('.preload').fadeOut();
        $(this).parents('.shape').find('._video')[0].play();
        $(this).fadeOut();
    });


    $(document).on('ready', function () {
        $(".reviews-slider").slick({
          dots: false,
          infinite: true,
          arrows:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:"<img class='prev' src='img/arrow-blue-slider.png'>",
          nextArrow:"<img class='next' src='img/arrow-blue-slider.png'>",
        //   prevArrow: $('.reviews .wrapper-slider .prev'),
        //   nextArrow: $('.reviews .wrapper-slider .next'),

          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: false
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: true
              }
            },
          ]
        });
      });



    //   $('.video_play').parent().click(function () {
    //     if($(this).children(".video_play").get(0).paused){
    //         $(this).children(".video_play").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     }else{
    //        $(this).children(".video_play").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });


});