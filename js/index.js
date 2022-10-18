// Two faces of the card

const firstDiv = document.getElementById("vote");
const secondDiv = document.getElementById("greatings");

// Rest of components

const rates = document.querySelectorAll(".circle");
const button = document.querySelector(".btn");
const value = document.querySelector(".num");

// Functions

      // Div transition
button.addEventListener("click", () => {
      firstDiv.classList.toggle("invisible");
      secondDiv.classList.toggle("invisible");
      secondDiv.classList.add("transform-big");
})

      // select vote
rates.forEach(circle => {
      circle.addEventListener("click", () => {
            let x = circle.innerHTML;
            value.innerHTML = x;
      })
})