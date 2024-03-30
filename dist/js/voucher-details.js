$(function () {
    var cartItems = $('.cartItemCount').text()
    $(document).on('click', '.addCartBtn', function () {
        let cartItem = 0;
        $('.voucherQuantity').each(function () {
            let quantity = parseInt($(this).val()); // Parse the value to an integer
            if (quantity > 0) {
                cartItem++;
            }
        });
       
        $('.cartItemCount').text(+cartItems + cartItem)
        
    });

    $(document).on('click', '.voucherQsub', function () {
       
        let inputVal = $(this).closest('.voucherWrapper').find('input').val();
        let input = $(this).closest('.voucherWrapper').find('input');
        let price = $(this).closest('.voucherWrapper').find('.voucherAmount').text();
        let wrapper = $(this).closest('.voucherWrapper');
        if (+inputVal < 20) {
            $(this).closest('.voucherWrapper').find('input').val(+inputVal + 1)
        }
        calculatePrice(input,price,wrapper);
    })

    $(document).on('click', '  .voucherQadd', function () {
        let inputVal = $(this).closest('.voucherWrapper').find('input').val();
        let price = $(this).closest('.voucherWrapper').find('.voucherAmount').text();
        let wrapper = $(this).closest('.voucherWrapper');

        if (+inputVal > 0) {
            $(this).closest('.voucherWrapper').find('input').val(+inputVal - 1)
        }
        let input = $(this).closest('.voucherWrapper').find('input');
        calculatePrice(input,price,wrapper);

    })
    $(document).on('keyup', '  .voucherQuantity', function () {
        let val = $(this).val();
        if (!/^\d+$/.test(val)) { // Check if the input is not a number
            val = 0;
        } else if (+val > 20) {
            val = 20;
        }else if (+val <= 0) {
            val = 0;
        }
        $(this).val(val);
        let wrapper = $(this).closest('.voucherWrapper');

        let input = $(this);
        let price = $(this).closest('.voucherWrapper').find('.voucherAmount').text();
        calculatePrice(input,price,wrapper);

    })
})


function calculatePrice(input,price,wrapper) {
    let val = input.val();
    
    wrapper.find('.voucherPrice').text(price)
    wrapper.find('.totalVoucherQuantity').text(val)
    wrapper.find('.voucherTotalAmount').text(val*+price)



    var total = 0;

        // Loop through each cart item
        let i = 0;
        $('.voucherWrapper').each(function () {
            i++;
            // Get quantity and price for each item
            var quantity = parseInt($(this).find('.voucherTotalAmount').text());

            // Add to total
            total += quantity;
        });
        $('.grandTotal').text(total)
}
function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}