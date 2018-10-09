var bannerIndex = 0;
carrossel();

function carrossel() {
    var i;
    var x = document.getElementsByClassName("imgCarrossel");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    bannerIndex++;
    if (bannerIndex > x.length) {
        bannerIndex = 1
    }
    x[bannerIndex - 1].style.display = "block";
    dots[bannerIndex - 1].className += " active";
    setTimeout(carrossel, 4500);
}
