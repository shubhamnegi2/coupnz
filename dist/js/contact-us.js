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

    $('[data-collapse-target]').on('click', function () {
        const targetId = $(this).attr('data-collapse-target');
        const targetElement = $(`[data-collapse="${targetId}"]`);

        // Toggle the accordion content with transition
        if (targetElement.length) {
            if (targetElement.hasClass('hidden')) {
                // Expand accordion
                targetElement.slideDown(300).removeClass('hidden');
            } else {
                // Collapse accordion
                targetElement.slideUp(300, function () {
                    $(this).addClass('hidden');
                });
            }
        } else {
            console.error(`Accordion content with data-collapse="${targetId}" not found.`);
        }

        // Toggle the Font Awesome icon
        const icon = $(this).find('i.fa');
        if (icon.length) {
            if (icon.hasClass('fa-chevron-down')) {
                icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if (icon.hasClass('fa-chevron-up')) {
                icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        } else {
            console.error(`Font Awesome icon not found within the clicked element.`);
        }
    });
}) // jquery fn end

function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
