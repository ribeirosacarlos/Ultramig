// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel ();

function carousel () {
    var i;
    var x = document.getElementsByClassName("fotos");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.ength) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}


