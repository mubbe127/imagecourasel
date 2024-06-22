import "./style.css";
import "./front-view-burger-stand.jpg";
import "./grilled-burger-ciabatta-bun-with-pickles-generated-by-ai.jpg";
import "./view-ready-eat-delicious-meal-go.jpg";
import "./next-svgrepo-com.svg";
import "./previous-svgrepo-com.svg";
    

const dotDivs = document.querySelectorAll(".dots");

dotDivs.forEach((dot, index) => {
  dot.setAttribute("data-index", `${index}`);
  dot.addEventListener("click", function (event) {
    activateDot(dot, index);
  });
});

function activateDot(dot, index) {
  const dotColorList = document.querySelectorAll(".dots path");
  dotColorList.forEach((dotColor) => {
    dotColor.style.fill = "darkgrey";
  });
  dotDivs.forEach((dot) => dot.classList.remove("active"));
  dot.classList.add("active");
  const selectedDot = dot.querySelector("path");
  selectedDot.style.fill = "black";
  const imageContainer = document.querySelector(".imageContainer");
  imageContainer.style.left = `${index * -800}px`;
}

/* the value parameter is either -1 or 1. It moves the indexValue to index of nextorPrevElement */
function nextOrPrevDot(element, value) {
  for (let i = 0; i < dotDivs.length; i++) {
    const dot = dotDivs[i];
    if (dot.classList.contains("active")) {
      const nextprevDot = dot[element];
      if (nextprevDot) {
        activateDot(nextprevDot, i + value);
      } else if (value === 1) {
        activateDot(dotDivs[0], 0);
      } else {
        activateDot(dotDivs[dotDivs.length - 1], dotDivs.length - 1);
      }
      break;
    }
  }
}

const arrowRight = document.querySelector(".arrow.right");
arrowRight.addEventListener("click", function (event) {
  nextOrPrevDot("nextElementSibling", 1);
});

const arrowLeft = document.querySelector(".arrow.left");
arrowLeft.addEventListener("click", function (event) {
  nextOrPrevDot("previousElementSibling", -1);
});
