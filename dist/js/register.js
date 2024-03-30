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


    $(document).on('click', '.showPassword', function () {
        let passwordField = $('#password');
        let passwordFieldType = passwordField.attr('type');

        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }
    });

    $.validator.addMethod(
        "email",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                )
            );
        },
        "Enter valid email address !"
    );

    $("#registerForm").validate({
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
            password: {
                required: true,
            },
            consent1: {
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
            password: {
                required: "Please Enter Password",
            },
            consent1: {
                required: "Please Accept T&C",
            },
        },
        submitHandler: function (form) {
            timerShowCounter('otp_counter', 'resend_otp', '10');
            $('.otpPopup').slideDown().css({ display: 'flex' });
            // form.submit();
        }
    });

    // =======================  OTP JS ================
    $('.digit-group').find('.digit').each(function () {
        $(this).attr('maxlength', 1);
        var otpTypedVal = '';

        $(this).on('keyup', function (e) {
            if ($(this).val().length < 1) {
                return false;
            }
            if ($('#digit-1').val().length > 0 && $('#digit-2').val().length > 0 && $('#digit-3').val().length > 0 && $('#digit-4').val().length > 0) {
                $('.digit-group .form-group').removeClass('has-error');
            }
            otpTypedVal = $('#digit-1').val() + $('#digit-2').val() + $('#digit-3').val() + $('#digit-4').val();

            $('#otp').val(otpTypedVal);
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                if (next.length) {
                    $(next).select();
                }
            }
        });
    });

    $(".digit").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this)
                .next(".digit")
                .focus();
        } else {
            $(this)
                .prev(".digit")
                .focus();
            var textVal = $('#otp').val();
            var b = textVal.slice(0, -1)
            $("#otp").val(b);
        }
    });

    $('#resend_otp').on('click', function () {

        var mobileNo = $('#otp_mobile_number').val();
        $('#otp_submit_btn').prop('disabled', true);
        timerShowCounter('otp_counter', 'resend_otp', '10');
    });

    $('.closeOTPPopup').click(function () {
        $('.otpPopup').slideUp();
    })

    $("#otp-verification-form").validate({
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
            otp: {
                required: true,
                number: true,
                minlength: 4,
                maxlength: 4
            }
        },
        messages: {
            otp: {
                required: "OTP is required",
                minlength: "Minimum 4 digits",
                maxlength: "Maximum 4 digits"
            }
        },
        submitHandler: function (form) {
            alert('otp correct')
            $('.otpPopup').slideUp()

        }
    });
    // =======================  OTP JS end ================

}) // jquery fn end
var timer;
function timerShowCounter(timeDiv, button, time) {
    $("#" + button).hide(1500);
    $("#" + timeDiv).html('');
    var i = time;
    if (timer) {
        timer.stop();
    }
    timer = new Timer(function () {
        $("#" + timeDiv).show();
        var zeroApend = '';
        if (i.toString().length == 1) {
            zeroApend = "0";
        }
        if (i > 0) {
            // var buttonstate = $('#otp_submit_btn').is(':disabled');
            $("#" + timeDiv).html("OTP valid till " + zeroApend + "" + fancyTimeFormat(i) + " minutes");
            // if (buttonstate != true) {
            //     $("#" + timeDiv).html("OTP valid till " + zeroApend + "" + fancyTimeFormat(i) + " minutes");
            // } else {
            //     console.log('else');
            // }

        } else if (i == 0) {
            $("#" + button).show();
            $("#" + timeDiv).hide().html('');
            timer.stop();
            $('#otp_submit_btn').prop('disabled', false);

        }
        i--;
    }, 1000);
}

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);
    this.stop = function () {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }
    this.start = function () {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }
    this.reset = function (newT) {
        t = newT;
        return this.stop().start();
    }
}

function fancyTimeFormat(duration) {
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
