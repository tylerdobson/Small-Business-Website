// cc_7.js 


const input = document.getElementById("headline-input");
const button = document.getElementById("update-btn");
const ctaHeadline = document.getElementById("cta-headline");

// Step 2: Define what happens when we update the headline.
function updateHeadline() {
  const newText = input.value.trim(); // .trim() removes empty spaces

  if (newText === "") {
    // Don't let the user blank out the headline.
    alert("Please type a headline first!");
    return;
  }

  ctaHeadline.textContent = newText; 
  input.value = "";                  
}

// Step 3: Run updateHeadline() when the button is clicked.
button.addEventListener("click", updateHeadline);

// Bonus: also update when the user presses Enter inside the input.
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    updateHeadline();
  }
});
