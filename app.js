(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Get the flash card container element
var flashCardContainer = document.getElementById("flash-card-container");

// Get the front and back elements
var frontElement = flashCardContainer.querySelector(".front");
var backElement = flashCardContainer.querySelector(".back");

// Set the initial state of the flash card
var isFlipped = false;

// Function to toggle the flip state of the flash card
function toggleFlip() {
  isFlipped = !isFlipped;
  flashCardContainer.classList.toggle("flipped");
}

// Add event listener to the flash card container
flashCardContainer.addEventListener("click", toggleFlip);
