$(document).ready(function () {

    $(window).on('load', function () {

        // cartBodyHeight dynamic height 
        let cartFooterHeight = $('.cartFooter').outerHeight();
        let cartHeaderHeight = $('.CartHeader').outerHeight();
        let cartSideBarHeight = $('.cartSideBar').outerHeight();
        let cartBodyHeight = cartSideBarHeight - (cartFooterHeight + cartHeaderHeight);
        $('.cartBody').css({ maxHeight: cartBodyHeight - 40 });
    })


    $(document).on('click', '.cartHangingBtn', function () {
        // Show the cart sidebar if hidden
        $('.cartSideBar').show().css({ right: '0px' });
    })

    $(document).on('click', '.addToCartBtn', function () {
        // Show the cart sidebar if hidden
        $('.cartSideBar').show().css({ right: '0px' });

        let image = $(this).closest('.myProductCard').find('.productImg').attr('src');
        let productName = $(this).closest('.myProductCard').find('.myProductName').text();
        let productPrice = $(this).closest('.myProductCard').find('.myProductPrice').text();

        // Check if the product is already in the cart
        var existingCartItem = $('.cartBody').find('.name').filter(function () {
            return $(this).text() === productName;
        });

        if (existingCartItem.length > 0) {
            // Product already exists in the cart, increase the quantity
            var quantityInput = existingCartItem.closest('.cartItem').find('.cartQuantityInput');
            var currentQuantity = parseInt(quantityInput.val());
            quantityInput.val(currentQuantity + 1);
        } else {
            // Product does not exist in the cart, append it
            $('.cartBody').append(`
                <div class="cartItem flex items-center justify-between py-1 border-b hover:shadow-md">
                    <img src="${image}" alt="itsm" class="w-7 rounded">
                    <div class="itemDetails">
                        <p class="name text-xs truncate w-[80px] overflow-hidden whitespace-nowrap text-ellipsis" title="${productName}">${productName}</p>
                        <span class="price text-xs">₹ ${productPrice}</span>
                    </div>
                    <div class="flex items-center h-5 sidebarCartAction">
                        <button class="bg-[#dd5a90] w-5 h-full border-transparent flex items-center justify-center text-xs cursor-pointer text-white reduceQuantity"><i class="fa-solid fa-minus"></i></button>
                        <input type="text" min="1" value="1" onkeypress="return numOnly(event)" class="cartQuantityInput w-6 h-full outline-none shadow-none border text-xs  text-center"  onCopy="return false" onDrop="return false" onPaste="return false" oninput="return numOnly(event)">
                        <button class="bg-[#dd5a90] w-5 h-full border-transparent flex items-center justify-center text-xs cursor-pointer text-white AddQuantity "><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <i class="fa-solid fa-trash-can cursor-pointer deleteCartItem"></i>
                </div>
            `);
        }
        calculatePrice();
    });

    $(document).on('click', '.closeCartSideBar', function () {
        $('.cartSideBar').css({ right: '-270px' }, function () {
            $('.cartSideBar').hide();
        })

    })

    $(document).on('click', '.cartSideBar .AddQuantity', function () {
        let inputVal = $(this).closest('.sidebarCartAction').find('input').val();
        if (+inputVal < 20) {
            $(this).closest('.sidebarCartAction').find('input').val(+inputVal + 1)
        }
        calculatePrice();
    })

    $(document).on('click', '.cartSideBar .reduceQuantity', function () {
        let inputVal = $(this).closest('.sidebarCartAction').find('input').val();
        if (+inputVal > 1) {
            $(this).closest('.sidebarCartAction').find('input').val(+inputVal - 1)
        }
        calculatePrice();
    })

    $(document).on('click', '.cartSideBar .deleteCartItem', function () {
        $(this).closest('.cartItem').remove();
        calculatePrice();
    })

    $(document).on('keyup', '.cartSideBar .cartQuantityInput', function () {
        let val = $(this).val();
        if (!/^\d+$/.test(val)) { // Check if the input is not a number
            val = 1;
        } else if (+val > 20) {
            val = 20;
        }
        $(this).val(val);
        calculatePrice();
    })
    


    function calculatePrice() {
        var total = 0;

        // Loop through each cart item
        let i = 0;
        $('.cartBody .cartItem').each(function () {
            i++;
            // Get quantity and price for each item
            var quantity = parseInt($(this).find('.cartQuantityInput').val());
            var price = parseFloat($(this).find('.price').text().replace('₹ ', '')); // Assuming price is in the format '₹ XX'

            // Add to total
            total += quantity * price;
        });
       $('.cartItemCount').text(i)
        // Display the total
        // console.log('Total price:', total);
        $('.cartSideBar .subtotal').text(total)
        let subtotal = $('.cartSideBar .subtotal').text()
        let shipping = $('.cartSideBar .shipping').text()
        let tax = $('.cartSideBar .tax').text()
        let discounts = $('.cartSideBar .discounts').text()
        let all = +subtotal + (+shipping) + (+tax) - (+discounts);
        $('.cartSideBar .Total').text(all)
    }


})
function numOnly(evt) {
    var k;
    document.all ? (k = evt.keyCode) : (k = evt.which);
    return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}