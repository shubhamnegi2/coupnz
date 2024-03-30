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
    $('.settingTabs li').click(function () {
        $('.settingTabs li').removeClass(' border-b-2  border-[#dd5a90] text-[#dd5a90]')
        $(this).addClass(' border-b-2  border-[#dd5a90] text-[#dd5a90]')
    })
    $('.personalDetails').click(function () {
        $('.settingFrom').slideUp();
        $('#personalDetailsForm').slideDown().css({ display: 'flex' });
    })
    $('.paymentSetting').click(function () {
        $('.settingFrom').slideUp();
        $('#paymentSettingForm').slideDown().css({ display: 'flex' });
    })
    $('.changePassword').click(function () {
        $('.settingFrom').slideUp();
        $('#changePasswordForm').slideDown().css({ display: 'flex' });
    })


    $(document).on('click', '.showPassword', function () {
        let passwordField = $(this).closest('.form-group').find('input');
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

    $.validator.addMethod(
        "PanNo",
        function (value, element) {
            var letters = /^[a-zA-Z]{5}\d{4}[a-zA-Z]{1}$/;
            if (value.match(letters)) {
                return true;
            } else {
                return false;
            }
        },
        "* Invalid PAN No"
    );
    $.validator.addMethod("ifsc", function (value, element) {
        return this.optional(element) || /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/.test(value);
    }, 'Enter valid IFSC Code');

    $("#personalDetailsForm").validate({
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

        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });


    $("#paymentSettingForm").validate({
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
            AcHName: {
                required: true,
            },
            AcNo: {
                required: true,
                number: true,
            },

            bankName: {
                required: true,
            },
            branch: {
                required: true,
            },
            ifsc: {
                required: true,
                ifsc: true,
            },
            pan: {
                required: true,
                PanNo: true,
            },
            password: {
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
            AcHName: {
                required: "Please Enter Your Name",
            },
            AcNo: {
                required: "Please Enter  Account Number",
            },

            bankName: {
                required: "Please Enter  Bank Name",
            },
            branch: {
                required: "Please Enter  Branch Name",
            },
            ifsc: {
                required: "Please Enter  IFSC Code",
            },
            pan: {
                required: "Please Enter  PAN Number",
            },
            password: {
                required: "Please Enter  Your Password",
            },

        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });


    $("#changePasswordForm").validate({
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
           
            oldPassword: {
                required: true,
            },
            newPassword: {
                required: true,
            },

        },
        messages: {
            
            oldPassword: {
                required: "Please Enter  Your Old Password",
            },
            newPassword: {
                required: "Please Enter  Your New Password",
            },

        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });


}) // jquery fn end

function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
