

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



/*
window.addEventListener("scroll",function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky-nav', window.scrollY > 0 )
})*/

function scrollToTop() { 
    window.scrollTo(0,0); 
} 