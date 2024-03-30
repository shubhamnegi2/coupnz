$(document).ready(function () {


    $(".slideRight").click(function () {
        let containerWidth = $(".mainSlidingScrollbar").width();
        let scrollPercentage = ($(window).width() < 640) ? 0.5 : 0.2;
        let newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() + containerWidth * scrollPercentage;

        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });

    $(".slideLeft").click(function () {
        let containerWidth = $(".mainSlidingScrollbar").width();
        let scrollPercentage = ($(window).width() < 640) ? 0.5 : 0.2;
        let newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() - containerWidth * scrollPercentage;

        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });


    $(document).on('mouseover', '.mailSlidingUl li.group', function () {
        let height = $(this).find('ul').innerHeight();
        $('.mailSlidingUl').height(height + 30);
    })
    $(document).on('mouseout', '.mailSlidingUl li.group', function () {
        $('.mailSlidingUl').height('auto');
    })

    $(document).on('click', '.showMobileSearchBox', function () {
        $('.mobileSearchWrapper').slideToggle()
    })

    $(document).on('click', '.headerSearchWrapper button', function () {
        let SerchInput = $('.headerSearchWrapper input').val();
        searchFunctionality(SerchInput)
    })
    $(document).on('click', '.mobileSearchWrapper button', function () {
        let SerchInput = $('.mobileSearchWrapper input').val();
        searchFunctionality(SerchInput)
    })
    $(document).on('focus', '.footerNewslatter input', function () {
        $('.newsLatterError').hide()
    })
    $(document).on('click', '.newsLatterSubmit', function () {
        let email = $('.footerNewslatter input').val();
        let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.trim() == '') {
            $('.newsLatterError').show().html('Please Enter Your Email Address')
        } else if (emailRegx.test(email)) {
            console.log("email valid");
            $('.newsLatterError').hide()
            // your ajax code
            /* ajax before send  
             $('.footerNewslatter').css({opacity:'0.3'}) */
            //  =======================
            /* when ajax complete do it  
            $('.footerNewslatter').css({opacity:'1'}) */
        } else {
            $('.newsLatterError').show().html('Please Enter Valid Email Address')
        }
    })

    function searchFunctionality(SerchInput) {
        if (SerchInput.trim() == '') {
            $('.searchWrapper input').addClass('animate__animated animate__shakeX');
            setTimeout(() => {
                $('.searchWrapper input').removeClass('animate__animated animate__shakeX');
            }, 1200)
        } else {
            // your ajax code
        }
    }


    
});  // jquery function end
function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}