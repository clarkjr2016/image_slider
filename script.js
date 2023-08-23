const slides = document.querySelectorAll(".slide"); //selects the images so they can be looped through
const rightBtn = document.querySelector("#right"); // this selects the right button
const leftBtn = document.querySelector("#left"); // this selects the right button
const circles = document.querySelectorAll(".circle"); //this selects all of the circle elements
let counter = 0;

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    if (e.target) {
      circle.classList.toggle("active");
    } else {
      circle.style.backgroundColor = "transparent";
    }
  });
});

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
}); //this moves all the images to the right of one another in the order that they were created in (based on their index i.e 1 = 100%). The contaainer has overflow hidden on it so the pictures to the right won't be seen until we transition over to them.

function slideImageForward() {
  if (counter == -4) {
    // setting this if statement prevents the slider from going beyond the area with no images
    return;
  } else {
    // this else statement executes the logic that allows the slider to operate
    counter -= 1; // this counter is used to decrement the multiplier of the translateX property of the images
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${counter * 100}%)`;
      console.log(counter);
    });
  }
}

function slideImageBackward() {
  if (counter == 0) {
    // setting this if statement prevents the slider from going beyond the area with no images
    return;
  } else {
    // this else statement executes the logic that allows the slider to operate
    counter += 1; // this counter is used to increment the multiplier of the translateX property of the images
    slides.forEach((slide) => {
      slide.classList.toggle("active");
      slide.style.transform = `translateX(${counter * 100}%)`;
      console.log(counter);
    });
  }
}

rightBtn.addEventListener("click", slideImageForward);
leftBtn.addEventListener("click", slideImageBackward);
