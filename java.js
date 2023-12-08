let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlideshow() {
    showSlides(); 
    slideshowInterval = setInterval(showSlides, 3000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval); 
}

document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".container");
    let slides = document.getElementsByClassName("mySlides");

   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }

    container.addEventListener("dblclick", function () {
        startSlideshow();
        container.removeEventListener("dblclick", arguments.callee); 
    });

    container.addEventListener("mouseleave", stopSlideshow); 
});