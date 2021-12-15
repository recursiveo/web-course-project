let nameArr = [];
let qtyArr = [];
let priceArr = [];

function getUser() {
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    // console.log(window.sessionStorage);
    document.getElementById('NameTag').innerHTML = "Welcome " + CurrentUser.name;
}

function logoutFunc() {
    window.location.href = "loginreg.html";
    var tempObj = {}
    sessionStorage.CurrentUser = JSON.stringify(tempObj);
}

$(document).ready(function () {
    console.log(JSON.parse(localStorage.getItem("cart")));

    cartProcess();
    cartView();

});

function cartProcess() {
    if (localStorage.getItem("cart") !== null) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        // let cartLen = cart.length;
        cart.forEach(item => {

            if (nameArr.includes(item.title) === true) {
                let index = nameArr.indexOf(item.title);
                qtyArr[index] += parseInt(item.qty);
                let price = item.price.substring(1);
                priceArr[index] += parseFloat(price);
            } else {
                nameArr.push(item.title);
                qtyArr.push(parseInt(item.qty));
                let price = item.price.substring(1);
                priceArr.push(parseFloat((price)));
            }
        });
    }

}

function cartView() {
    // let items = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    console.log("GGG" + localStorage.getItem("cart"));
    if (localStorage.getItem("cart") != null) {
        $("#cart-head").append('<div class="cart-col1-head">Item Name</div>\n' +
            '                                <div class="cart-col2-head">Qty</div>\n' +
            '                                <div class="cart-col3-head">Price/Unit</div>')
        for (let i = 0; i < nameArr.length; i++) {
            total += priceArr[i] ;
            $("#cart-items").append('<div class="row">' +
                '<div class="cart-col1">' + nameArr[i] + '</div>\n' +
                '                                <div class="cart-col2">' + qtyArr[i] + '</div>\n' +
                '                                <div class="cart-col3"> $' + priceArr[i].toFixed(2) + '</div>' +
                '</div>');
        }

        $("#cart-items").append('<hr><div class="row">' +
            '<div class="cart-col1"><b>Total</b></div>\n' +
            '                                <div class="cart-col2"></div>\n' +
            '                                <div class="cart-col3"> <b>$' + total.toFixed(2) + '</b></div>' +
            '</div>');
        $("#order-btn").append('<button class="button_tabs" onclick="order()">Order Now</button>')
    } else {
        $("#cart-items").append('<h2> Your cart is empty ! Continue Shopping. </h2>');
    }


}

function order() {
    let cnf = confirm('Confirm Order');
    if (cnf == true) {
        alert("Your order is placed.");
        nameArr = [];
        qtyArr = [];
        priceArr = [];
        localStorage.removeItem("cart");
        location.reload();
    }
}