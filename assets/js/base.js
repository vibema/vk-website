$(document).ready(function(){
    $('a.smooth-scroll').on('click', function(e) {
        e.preventDefault();

        var targetId = $(this).attr('href');
        var offset = 260; // Adjust this value to your needs

        $('html, body').stop().animate({
            scrollTop: $(targetId).offset().top - offset
        }, 600); // Adjust the duration as needed
    });

    // Language switcher
    $('#language-switcher').on('change', function() {
        var selectedLanguage = $(this).val(); 
        var currentUrl = window.location.href;
        var urlParts = currentUrl.split('/');

        // Assuming the language code is always the third part of the URL
        if (urlParts[3] === 'en' || urlParts[3] === 'fr' || urlParts[3] === 'de') {
            urlParts[3] = selectedLanguage; // Replace the current language code with the selected one
        } else {
            // If the current URL doesn't have a language code, insert the selected language code
            urlParts.splice(3, 0, selectedLanguage);
        }

        var newUrl = urlParts.join('/');
        
        // Redirect to the new URL
        window.location.href = newUrl;
    });

    // Set the language switcher to the current language
    var path = window.location.pathname;
    var currentLang = path.split('/')[1]; // Get the first part of the path
    $('#language-switcher').val(currentLang);

$(window).on('load resize', function() {
    if ($(window).width() < 900) {
        $('#main-nav').addClass('mobile');
    } else {
        $('#main-nav').removeClass('mobile');
    }
});

$('#mobile-toggler').click(function(event) {
    event.stopPropagation(); // Prevent this click from triggering the document's click event
    $('main').toggleClass('dark');
    $('#main-nav').toggleClass('open');
});

$(document).click(function() {
    var mainNav = $('#main-nav');
    if(mainNav.hasClass('open')) {
        $('main').toggleClass('dark');
        mainNav.toggleClass('open');
    }
});

    });


