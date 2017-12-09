$(document).ready(function(){
// WRITE YOUR CODE BELOW
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}



$("#title").click(function(){
	alert("You won V.I.P backstage passes for the ACDC concert in Nyc")
})



// DO NOT WRITE CODE BELOW
})