$(document).ready(function () {
    // Smooth scroll to target with an offset
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100 // Adjust the offset as needed
            }, 500); // Adjust the scroll speed if necessary
        }
    });
});