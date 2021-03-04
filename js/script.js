
 AOS.init();


 var loader;
 function loadNow(opacity){
     if(opacity <= 0) {
         displayContent();
     }
     else {
         loader.style.opacity = opacity;
         window.setTimeout(function(){
             loadNow(opacity - 1)
         }, 2000 )
     }
 }
 function displayContent(){
     loader.style.display = 'none';
     document.getElementById('content').style.display = 'block'
 }
 document.addEventListener('DOMContentLoaded' , function(){
     loader = document.getElementById('loader');
     loadNow(1);
 })





function scrollToTop() { 
    window.scrollTo(0,0); 
} 




/*

window.onscroll = function(){stickyFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-list").style.padding = "0.5rem 1.5rem";
    document.getElementById("logo").style.width = "200";
  } else {
    document.getElementById("navbar").style.padding = "1px 3px";
    document.getElementById("logo").style.width = "300";
  }
}

$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() >63) {
      $('.navbar').addClass('sticky');
      $('#nav-list').addClass('nav-list');
      $('#logo').addClass('logo');

    }
    if ($(window).scrollTop() < 64) {
      $('.navbar').removeClass('sticky');
    }
  });
*/
