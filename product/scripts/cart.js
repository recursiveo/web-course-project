jQuery(document).ready(function($) {
    jQuery('.add-to-cart').click(function() {


        cartSession = JSON.parse(localStorage.getItem("cart"));
        if(cartSession!=null && cartSession.length > 0){
            var cart = cartSession;
        } else {
            var cart = [];
        }
        
 
        cart.push({ title: jQuery('.product-title').text(), qty: jQuery('.quantity-text').val(), price: jQuery('.product-price').text() });
        localStorage.setItem("cart", JSON.stringify(cart));

 
        setNavCart();
    });
    setNavCart();
});

function setNavCart() {
    cart = JSON.parse(localStorage.getItem("cart"));
    
    if(cart != null)
        groupvise(cart);

}

function groupArrayOfObjects(list, key) { console.log(list);
  return list.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function groupvise(cart){ console.log(cart);
    jQuery('.cart-items').html('');
    var groupedCart=groupArrayOfObjects(cart,"title");
    
    jQuery.each(groupedCart, function(index, values) {
         var qty = 0;
         var price = 0;
         jQuery.each(values, function(key, cart) {
             qty= parseInt(qty)+parseInt(cart.qty);
             price = parseFloat(price)+parseFloat((cart.price).replace('$',""));
        }); 
         // jQuery('.cart-items').append('<li>' + qty + '</li>')
		 //' x ' + (index.substring(0, 15) + '..') + ' = ' + price + '</li>');
    }); 
    jQuery('.success-message').show();
    setTimeout(function(){ jQuery('.success-message').hide(); }, 1000);

}

function setCart() {
    jQuery('.cart-items').html('');
    cartdata = getCookie('cartitemsData');

    var count = 0;
    if (cartdata.length > 0) {
        cartdata = cartdata.replace('[object Object]', '');
        cartdataArray = cartdata.split('|');

        jQuery.each(cartdataArray, function(index, values) {

            items = values.split('&');
            if (items.length > 1) {
                count++;
                var title = '';
                var price = '';
                var qty = '';
                jQuery.each(items, function(index, value) {
                    if (value.indexOf('title=') != -1) {
                        title = value.replace('title=', '');
                    }
                    if (value.indexOf('qty=') != -1) {
                        qty = value.replace('qty=', '');
                    }
                    if (value.indexOf('price=') != -1) {
                        price = value.replace('price=', '');
                    }

                });
                jQuery('.cart-items').append('<li>' + qty + ' x ' + (title.substring(0, 15) + '..') + ' = ' + price + '</li>');
            }
        });
        if (count > 0)
            jQuery('.cart-count').html(count);
    }
}

function getUser() {

}

 