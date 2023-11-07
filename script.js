//cube
let x = 0;
let y = 0;
let z = 0;
const cube = document.querySelector(".cube");
document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x =
    x - 20)}deg) (${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y =
    y - 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y =
    y + 20)}deg) rotateZ(${z}deg)`;
});
document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

// const playpause = () => {
//   setInterval(() => {
//     cube.style.transform = `rotateY(${y++}deg)`;
//   }, 100);
// };
// playpause();
//end of cube

//slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

slideshowDivs();

// Select your div elements
const divs = document.querySelectorAll(".slideshow div");

// Define your slideshow function
const slideshow = () => {
  setInterval(() => {
    const currentDiv = document.querySelector(".slideshow .change");

    // Find the current div's index
    const currentIndex = Array.from(divs).indexOf(currentDiv);

    // Remove the 'change' class from the current div
    currentDiv.classList.remove("change");

    // Calculate the index of the next div, wrapping around if necessary
    const nextIndex = (currentIndex + 1) % divs.length;

    // Add the 'change' class to the next div
    divs[nextIndex].classList.add("change");
  }, 1000);
};

// Call your slideshow function outside the event listener
slideshow();