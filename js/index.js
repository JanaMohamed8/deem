$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      rtl: true,
      loop: true,
      margin: 24,
      nav: true,
      mouseDrag: true,
      touchDrag: true,
      autoplay: true,      
      autoplayTimeout: 2000,   
      autoplayHoverPause: true,
      items: 1
    });
  });
  



const questions = document.querySelectorAll("#questions-list li:not(.content-li)");

questions.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("active");

    questions.forEach((otherLi) => {
      if (otherLi !== li) {
        otherLi.classList.remove("active");
      }
    });
  });
});

   
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);     
};
