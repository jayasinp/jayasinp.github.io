window.addEventListener("DOMContentLoaded", (event) => {
  // Get references to the elements
  const recentCheck = document.querySelector("#recentCheck");
  const oldCheck = document.querySelector("#oldCheck");
  const dateTimeInput = document.querySelector("#dateTimeInput");

  // Event listener for when the recentCheck radio button is selected
  recentCheck.addEventListener("change", (event) => {
    if (event.target.checked) {
      dateTimeInput.style.display = "none";
    }
  });

  // Event listener for when the oldCheck radio button is selected
  oldCheck.addEventListener("change", (event) => {
    if (event.target.checked) {
      dateTimeInput.style.display = "block";
    }
  });
});
