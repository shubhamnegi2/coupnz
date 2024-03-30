$(function () {
    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });
    $('.form-group input').on('focus', function () {
        $(this).closest('.form-group').addClass('is-focused');
        if ($('input').val()) {
            $(this).closest('.form-group').addClass('is-valid');
        }
    });

    $('.form-group input').on('focusout', function () {
        $(this).closest('.form-group').removeClass('is-focused');
        if ($('input').val()) {
            $(this).closest('.form-group').addClass('is-valid');
        } else {
            $(this).closest('.form-group').removeClass('is-valid');
        }
    });

    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("invalid");
        $(this).closest('.form-group').removeClass('has-error');
        $(this).closest('.radio-fields').removeClass('invalid');
    });




    $("#contactUsForm").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            fullName: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            mobile: {
                required: true,
                number: true,
            },
            msg: {
                required: true,
            },
        },
        messages: {
            fullName: {
                required: "Please Enter Your Full name",
            },
            email: {
                required: "Please Enter Email Address",
            },
            mobile: {
                required: "Please Enter Your Mobile Number",
                number: "Please Enter valid Mobile Number",
            },
            msg: {
                required: "Please Enter Your Message",
            },
        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });

    $('.nextStepBtn').click(function () {
        $('.firstStep').slideUp(function () {
            $('.nextStep').slideDown()
        })
    })
    $('.prevFirstBtn').click(function () {
        $('.nextStep').slideUp(function () {
            $('.firstStep').slideDown()
        })
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
    $('.finalStepBtn').click(function () {
        $('.nextStep').slideUp(function () {
            $('.finalStep').slideDown()
        })
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        $('.topHeading').hide()
    })

    $('.finalPrevBtn').click(function () {
        $('.finalStep').slideUp(function () {
            $('.nextStep').slideDown()
        })
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        $('.topHeading').show()

    })

    $('.finalReset').click(function () {
        $('#profitCalculatorForm')[0].reset();
        $('.finalStep').slideUp(function () {
            $('.firstStep').slideDown()
        })
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        $('.topHeading').show()

    })

    // When the range input is changed
    $('input[type="range"]').on('input', function () {
        let val = $(this).val();
        $(this).closest('.form-group').find('.slideValue').val(val);
    });

    // When the text input is changed
    $('.slideValueMin').on('input', function () {
        let val = $(this).val();
        if (val > 50) {
            val = 50;
            $(this).val(val);
        }
        $(this).closest('.form-group').find('input[type="range"]').val(val);
    });

    $('.slideValueMax').on('input', function () {
        let val = $(this).val();
        if (val > 10000) {
            val = 10000;
            $(this).val(val);
        }
        $(this).closest('.form-group').find('input[type="range"]').val(val);
    });


}) // jquery fn end

function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
