AOS.init();
 
 // From https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
window.onload = scrollFunction


  function scrollFunction() {
   if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
     document.getElementById("nav").style.padding = "10px";
     document.getElementById("title").style.fontSize = "30px";
     document.getElementById("nav").style.backgroundColor = "#fffaeb"

   } else {
     document.getElementById("nav").style.paddingBottom = "0px";
     document.getElementById("title").style.fontSize = "80px";
     document.getElementById("nav").style.backgroundColor = "transparent"
   }
 }

 window.onscroll = scrollFunction

 function scroll(){
  if (document.body.scrollTop <90 || document.documentElement.scrollTop < 90) {
    document.getElementById("nav").style.padding = "90px 10px";
     document.getElementById("title").style.fontSize = "80px";
     document.getElementById("nav").style.backgroundColor = "transparent"
   }
 }

