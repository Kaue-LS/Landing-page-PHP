$(document).ready(function () {
    $('.nav-bar').on('click', function () {
        $('.menu-lateral').toggleClass('active');
        $('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');
    });

    $('.videos .container .content .items').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('a').on("click", function () {
        if ($(this).is('[href]')) {
            var link = $(this).attr("href")

            if (link.indexOf('#') > -1) {
                event.preventDefault();
                $('.menu-lateral').toggleClass('active');
                $('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');
                $('html', 'body').animate({ scrollTop: $(link).offset().top - 50 }, 1500);
            }
        }
    })
});
