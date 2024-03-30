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




    $('#transactionDate').datepicker({
        maxDate: 0  
      });
      

    $("#addTicket").validate({
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
            transactionDate: {
                required: true,
            },
            shopName: {
                required: true,
            },
            bookingId: {
                required: true,
            },
            orderAmount: {
                required: true,
                number: true,
            },
            PurchasedItem: {
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
            retailer: {
                required: "Please Select Your Item type",
            },
            transactionDate: {
                required: "Please Select Transaction Date",
            },
            shopName: {
                required: "Please Select Shop Name",
            },
            bookingId: {
                required: "Please Enter Booking Id",
            },
            orderAmount: {
                required: "Please Enter Booking Amount",
            },
            PurchasedItem: {
                required: "Please Enter Purchased Item Details",
            },
        },
        submitHandler: function (form) {
            alert('thankx')
            // form.submit();
        }
    });

    $(document).on('click', '.moreInfoBtn', function () {
        $(this).css({backgroundColor: '#dd5a90'})
        $('.addTicketBtn').css({backgroundColor: '#f6c38d'})
        $('.details').slideDown();
        $('.addTicketForm').slideUp();
    });
    $(document).on('click', '.addTicketBtn', function () {
        $(this).css({backgroundColor: '#dd5a90'})
        $('.moreInfoBtn').css({backgroundColor: '#f6c38d'})
        $('.addTicketForm').slideDown();
        $('.details').slideUp();
    });
    
}) // jquery fn end

function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
