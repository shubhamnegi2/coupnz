$(document).ready(function () {

    $(document).on('focus', '.profitLinkInput', function () {
        $('.profitLinkInput').css({ borderColor: '#e5e7eb' });
    })
    $(document).on('click', '.profitLinkBtn', function (e) {
        e.preventDefault;
        let link = $('.profitLinkInput').val();
        console.log("Link is valid", link);
        let urlRegx = /^(https?|ftp):\/\/.*/;

        if (link.trim() == '') {
            $('.profitLinkInput').css({ borderColor: 'red' });
        } else if (urlRegx.test(link)) {
            $('.profitLinkInput').css({ borderColor: '#e5e7eb' });

            // Your ajax code
            /* 
            // Ajax beforeSend  
            $('.profitLinkBtn').text('Generating Link...');
            */

            // =======================

            /* 
            // When ajax complete  
            $('.profitLinkBtn').text('Generating Link...');

            */
        } else {
            $('.profitLinkInput').css({ borderColor: 'red' });

        }
    });

    $(document).on('click', '.linkCopy', function () {
        var inputField = $('.gnrtedLinkInput');

        // Get the value of the input field
        var inputValue = inputField.val();

        // Create a temporary input element to copy the value
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(inputValue).select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        tempInput.remove();
        $('.copyMsg').show(200)
        setTimeout(()=>{
            $('.copyMsg').hide(250)
        },800)

    });

});  // jquery function end
