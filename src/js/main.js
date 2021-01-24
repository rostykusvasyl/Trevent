$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $("#navbar a, .footerNav a, #btn-scrol a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    fadeMenuWrap(); 
    $(window).scroll(fadeMenuWrap);
});


// Slider slick

$(function() {
    $(".banner-area").slick({
        dots: true,
        arrows: false,
    });
});


$(function() {
    $(".brand").slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="right" src="img/angle-right.png" alt="angle-right">',
        nextArrow: '<img class="left" src="img/angle-left.png" alt="angle-left">'
    });
});


// responsive collapse menu
$(function() {
    $(".navbar-toggler").on("click", function() {
        $(".collapse").toggle("slow");
    });
    $(".navbar-nav li a").on("click", function(){
        $(".collapse").hide();
    });
});


function fadeMenuWrap() { 
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop; 
    if (scrollPos > 300) { 
        $('#btn-scrol').fadeIn(300); 
    } else { 
        $('#btn-scrol').fadeOut(300); 
    } 
} 
