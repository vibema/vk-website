$('.icon-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 5000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false,
    dots: false
    });

$('.project-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 7000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false,
    dots: false,
    rtl: true
    });

// Add class to element when scrolling down

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#main-nav").addClass("scrolled");
    } else {
        $("#main-nav").removeClass("scrolled");
    }
});
 