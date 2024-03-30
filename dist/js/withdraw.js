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




    $("#withdraw").validate({
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
            retailer: {
                required: true,
            },
            Price: {
                required: true,
            },
            quantity: {
                required: true,
            },
        },
        messages: {
            retailer: {
                required: "Please Select Retailer",
            },
            Price: {
                required: "Please Select Price",
            },
            quantity: {
                required: "Please Select Quantity",
            },
        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });

   
}) // jquery fn end
