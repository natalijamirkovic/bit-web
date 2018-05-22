var images = [
    "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
    "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://www.planwallpaper.com/static/images/orangutan_1600x1000_279157.jpg",
    "https://i.pinimg.com/originals/45/5c/c1/455cc1b5a68783030f19b745e817b92e.jpg",
    "https://pre00.deviantart.net/e122/th/pre/i/2009/177/0/d/western_lowland_gorilla_by_ladynightseduction.jpg",
    "https://cdn1.wimp.com/images/pthumbs/2016/05/a38ed22e6819d56ec7d09640097f1d7a_13320960_585835904917893_2318748880760340045_o_800_0.jpg"

];

function makeGallery() {
    var body = $("body");
    images.forEach(function (src) {
        var image = $("<img>");
        image.attr("src", src);
        body.append(image);
    });
}



function createTitle() {
    var body = $("body");
    var title = $("<h1>Monkey business</h1>");
    body.prepend(title);
}


function randomWidth() {
    var images = $("img");
    images.each(function () {
        var randomWidth = Math.floor(Math.random() * 500) + 100;
        $(this).width(randomWidth);
    });
}


function addGreenBorder() {
    var images = $("img");
    console.log(images);
    images.each(function () {
        if ($(this).width() > 300) {
            $(this).addClass("border");
        } else {
            return false;
        }
    });
}


$(function(){
    makeGallery();
    randomWidth();
    createTitle();
    addGreenBorder();
})