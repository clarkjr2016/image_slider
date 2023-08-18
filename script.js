const slides = document.querySelectorAll(".slide"); //selects the images so they can be looped through

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
}); //this moves all the images to the right of one another in the order that they were created in.

function slideImage() {}
