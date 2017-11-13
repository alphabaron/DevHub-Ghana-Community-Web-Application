
// For the next button
var images = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
];

var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}


// For the previous button
var images = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
];

function prev() {
    var slider = document.getElementById("slider");
    num--
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}


