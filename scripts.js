window.onscroll = function() {headerScroll()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
console.log("im here");

function headerScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    console.log("im here 2");
  } else {
    header.classList.remove("sticky");
    console.log("im here 1");
  }
}