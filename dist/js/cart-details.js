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

    $(document).on('click', '.deleteCart', function () {
        $(this).closest('.cardWrapper').remove();
        let deleted = $(this).closest('.cardWrapper').find('.grandTotal').text();
        let totl = $('.subttl').text();
        $('.subttl').text(+totl - (+deleted))
        // calculatePrice(input,price,wrapper);
    })
    
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
    calculatePriceAtStarting()
}) //jquery function end 


function calculatePriceAtStarting() {
    let total = 0;
    let gTotal = 0;
    $('.voucherQuantity').each(function(){
        let val = $(this).val();
        let amount = $(this).closest('.voucherWrapper ').find('.voucherAmount').text();
        $(this).closest('.voucherWrapper ').find('.voucherTotalAmount').text(+val*(+amount));
        
    })

    $('.cardWrapper').each(function(){
        $(this).find('.voucherTotalAmount').each(function(){
            let amt = $(this).text()
            total += +amt;
        })
        $(this).find('.grandTotal').text(total)
        total = 0;
    })
    $('.grandTotal').each(function(){
        let gt = $(this).text();
        gTotal += +gt;
    })
    
    $('.subttl').text(gTotal)

}

function calculatePrice(input,price,wrapper) {
    let val = input.val();
    
    // wrapper.find('.voucherPrice').text(price)
    // wrapper.find('.totalVoucherQuantity').text(val)
    wrapper.find('.voucherTotalAmount').text(val*+price)



    var total = 0;
    var grandTotal = 0;
    wrapper.closest('.cardWrapper').find('.voucherWrapper').each(function () {
        // Get quantity and price for each item
        let quantity = parseInt($(this).find('.voucherTotalAmount').text());

        // Add to total
        total += quantity;
    });
    // console.log(total);
    wrapper.closest('.cardWrapper').find('.grandTotal').text(total)
    $('.grandTotal').each(function () {
        let ttl = parseInt($(this).text());

        grandTotal  += ttl;
    })
    $('.subttl').text(grandTotal)
}
function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
// $(document).ready(function () {

    

//     $(document).on('click', '.AddQuantity', function () {
//         let inputVal = $(this).closest('.sidebarCartAction').find('input').val();
//         if (+inputVal < 20) {
//             $(this).closest('.sidebarCartAction').find('input').val(+inputVal + 1)
//         }
//         calculatePrice();
//     })

//     $(document).on('click', '  .reduceQuantity', function () {
//         let inputVal = $(this).closest('.sidebarCartAction').find('input').val();
//         if (+inputVal > 1) {
//             $(this).closest('.sidebarCartAction').find('input').val(+inputVal - 1)
//         }
//         calculatePrice();
//     })

//     $(document).on('click', '.deleteCartItem', function () {
//         $(this).closest('.cartItem').remove();
//         calculatePrice();
//     })

//     $(document).on('keyup', '  .cartQuantityInput', function () {
//         let val = $(this).val();
//         if (!/^\d+$/.test(val)) { // Check if the input is not a number
//             val = 1;
//         } else if (+val > 20) {
//             val = 20;
//         }else if (+val <= 0) {
//             val = 1;
//         }
//         $(this).val(val);
//         calculatePrice();
//     })



//     function calculatePrice() {
//         var total = 0;

//         // Loop through each cart item
//         let i = 0;
//         $('.cartBody .cartItem').each(function () {
//             i++;
//             // Get quantity and price for each item
//             var quantity = parseInt($(this).find('.cartQuantityInput').val());
//             var price = parseFloat($(this).find('.price').text().replace('₹ ', '')); // Assuming price is in the format '₹ XX'

//             // Add to total
//             total += quantity * price;
//         });
//         $('.cartItemCount').text(i)
//         // Display the total
//         // console.log('Total price:', total);
//         $('  .subtotal').text(total)
//         let subtotal = $('  .subtotal').text()
//         let shipping = $('  .shipping').text()
//         let tax = $('  .tax').text()
//         let discounts = $('  .discounts').text()
//         let all = +subtotal + (+shipping) + (+tax) - (+discounts);
//         $('  .Total').text(all)
//     }


// })
// function numOnly(evt) {
//     var k;
//     document.all ? (k = evt.keyCode) : (k = evt.which);
//     return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
// }