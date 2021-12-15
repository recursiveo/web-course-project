/**
 * MUST IMPORT 'product_data.js' SCRIPT BEFORE USING THIS FILE IN ANY HTML FILE.
 **/

$(document).ready(function () {
    //card list builder
    $("#cat1").addClass("active_tab");
    category(itemList_sw, itemPriceList_sw, instock_sw, sw_imageURL, sw_pageURLs, "");

    $('#cat1').bind('click', function () {
        $('#products').empty();
        $("#cat1").addClass("active_tab");
        $("#cat2").removeClass("active_tab");
        $("#cat3").removeClass("active_tab");
        category(itemList_sw, itemPriceList_sw, instock_sw, sw_imageURL, sw_pageURLs, "");
    });

    $('#cat2').bind('click', function () {
        $('#products').empty();
        $("#cat2").addClass("active_tab");
        $("#cat1").removeClass("active_tab");
        $("#cat3").removeClass("active_tab");
        category(itemList_audio, itemPriceList_audio, instock_audio, audio_imageURL, audio_pageURLs, "");
    });

    $('#cat3').bind('click', function () {
        $('#products').empty();
        $("#cat3").addClass("active_tab");
        $("#cat2").removeClass("active_tab");
        $("#cat1").removeClass("active_tab");
        category(itemList_sp, itemPriceList_sp, instock_sp, sp_imageURL, sp_pageURLs, "");
    });

    // $("#form1").submit(function(e){
    //     return false;
    // });
});

console.log('Here');

//This function creates cards in html page according to the arrays passed as parameters
function category(item, itemPrice, itemStock, imageUrl, pageURL, cat) {
    let itemCounter = 0;
    $("#products").append('<h1 class="center top-picks-h1" id="displayedCat">' + cat + '</h1>')

    // For loop for rows generation
    for (let rowNum = 1; rowNum <= 2; rowNum++) {
        // $("#products").append("<div class=\"row\" id=\"row" + rowNum.toString() + "\"><div/>");
        $("#products").append('<div class="row" id="row' + rowNum.toString() + '">');
        let id = "row" + rowNum;
        // For loop for column generation
        for (let colNum = 1; colNum <= 4; colNum++) {
            if (itemCounter < item.length) {
                let colId = "r" + rowNum + "_c" + colNum;
                $("#" + id.toString()).append('<div class="flex-forth card center" id="' + colId + '">\n' +
                    '                        <a href="' + pageURL[itemCounter] + '" class="anchor">\n' +
                    '                            <div class="card-bg-1"><div class="card-img-text center"></div>\n' +
                    '                            </div>\n' +
                    '                            <div class="card-content">\n' +
                    '                                <h2>' + item[itemCounter] + '</h2><p><i>' + itemPrice[itemCounter] + '<br>Available: ' + itemStock[itemCounter] + ' in stock<br></i></p>\n' +
                    '                            </div>\n' +
                    '                        </a>\n' +
                    '                    </div>');

                $("#" + colId + " .card-bg-1").css('background-image', 'url("' + imageUrl[itemCounter] + '")');
                console.log(imageUrl[itemCounter]);
                itemCounter++;
                console.log(itemCounter + " " + item.length);
            }
        }
    }
}

//This implements the search functionality for finding user specified item(s)
function search() {
    let searchVal = $('#search').val().toLowerCase();
    let name = [];
    let price = [];
    let qty = [];
    let url = [];
    let img = [];
    let arrayLoc = 0;            //array index


    itemList_sw.forEach(elem => {
        let res = elem.toLowerCase().includes(searchVal);
        if (res === true) {
            name.push(itemList_sw[arrayLoc]);
            price.push(itemPriceList_sw[arrayLoc]);
            qty.push(instock_sw[arrayLoc]);
            url.push(sw_pageURLs[arrayLoc]);
            img.push(sw_imageURL[arrayLoc]);
        }
        arrayLoc++;
    });

    arrayLoc = 0;

    itemList_audio.forEach(elem => {
        let res = elem.toLowerCase().includes(searchVal);
        if (res === true) {
            name.push(itemList_audio[arrayLoc]);
            price.push(itemPriceList_audio[arrayLoc]);
            qty.push(instock_audio[arrayLoc]);
            url.push(audio_pageURLs[arrayLoc]);
            img.push(audio_imageURL[arrayLoc]);
        }
        arrayLoc++;
    });

    arrayLoc = 0;

    itemList_sp.forEach(elem => {
        let res = elem.toLowerCase().includes(searchVal);
        if (res === true) {
            name.push(itemList_sp[arrayLoc]);
            price.push(itemPriceList_sp[arrayLoc]);
            qty.push(instock_sp[arrayLoc]);
            url.push(sp_pageURLs[arrayLoc]);
            img.push(sp_imageURL[arrayLoc]);
        }
        arrayLoc++;
    });

    if(name.length > 0){
        $('#products').empty();
        $("#cat1").removeClass("active_tab");
        $("#cat2").removeClass("active_tab");
        $("#cat3").removeClass("active_tab");
        category(name, price, qty, img, url, "Found " + name.length + " Items");
        return false;
    }else {
        alert("No matching items found for your search.");
    }

}


function logoutFunc() {
    debugger;
    window.location.href = "loginreg.html";
    var tempObj = {}
    sessionStorage.CurrentUser = JSON.stringify(tempObj);
}