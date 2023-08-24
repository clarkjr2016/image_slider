const slides = document.querySelectorAll(".slide"); //selects the images so they can be looped through
const rightBtn = document.querySelector("#right"); // this selects the right button
const leftBtn = document.querySelector("#left"); // this selects the right button
const circles = document.querySelectorAll(".circle"); //this selects all of the circle elements
let counter = 0; // this is used to either increase or decrease the translateX multiplier

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
}); //this moves all the images to the right of one another in the order that they were created in (based on their index i.e 1 = 100%). The contaainer has overflow hidden on it so the pictures to the right won't be seen until we transition over to them.

circles.forEach((circle, circle_index) => {
  circle.addEventListener("click", () => {
    circles.forEach((circle) => {
      circle.classList.remove("active"); // this removes the active class from all circles before it is applied to the selected circle
    });
    circle.classList.add("active");
    counter = -circle_index;
    console.log(counter);
    slides.forEach((slide, slideIndex) => {
      if (slideIndex === circle_index) {
        slide.style.transform = `translateX(${-circle_index * 100}%)`; //SOMEHOW SOMEWAY I GOT THIS TO WORK BUT I NEED TO REVIEW IT MORE TO TRULY UNDERSTAND
      } else {
        slide.style.transform = `translateX(${
          (slideIndex - circle_index) * 100
        }%)`;
      }
    });
  });
}); // this loops through the list of circles again and clears out the active class on any of the other cirlces before the clicked circle gets it applied
// this function is also responsible for when a circle is clicked that the appropriate picture appears as well.

function slideImageForward() {
  if (counter == -4) {
    // setting this if statement prevents the slider from going beyond the area with no images
    return;
  } else {
    // this else statement executes the logic that allows the slider to operate
    counter -= 1; // this counter is used to decrement the multiplier of the translateX property of the images
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${counter * 100}%)`; // since the counter is getting decremented it will end up being a negativ number. This will then turn the translateX number to a negative which will move the respective slides to the left
    });
    circles.forEach((circle) => {
      circle.classList.remove("active"); // this removes the active class from all circles before it is applied to the selected circle
    });

    const circleIndex = -counter - 0;
    circles[circleIndex].classList.add("active"); // this sets the appropriate circle to be filled with the active class
  }
} // this function slides the images forward

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
    });
    circles.forEach((circle) => {
      circle.classList.remove("active"); // this removes the active class from all circles before it is applied to the selected circle
    });
    const circleIndex = -counter - 0;
    circles[circleIndex].classList.add("active"); // this sets the appropriate circle to be filled with the active class
  }
} // this function slides the images backwards

rightBtn.addEventListener("click", slideImageForward);
leftBtn.addEventListener("click", slideImageBackward);
