"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const hardestChoreElement = document.getElementById("hardest-chore");
const easiestChoreElement = document.getElementById("easiest-chore");
const choreLengthElement = document.getElementById("chore-length");
const submissionBtn = document.getElementById("submission-btn");

// Array to store chores
const chores = ["Clean the gutters", "Taking a poop", "Dishes"];
let hardestChore = chores[0]; // Set the hardest chore (could be updated)
let easiestChore = chores[2]; // Set the easiest chore (could be updated)
const choreLength = chores.length; // The total number of chores

// Function to update the hardest chore on the webpage
function updateHardestChore() {
    hardestChoreElement.innerText = hardestChore;
}

// Function to update the easiest chore on the webpage
function updateEasiestChore() {
    easiestChoreElement.innerText = easiestChore;
}

// Function to update the number of chores
function updateChoreLength() {
    choreLengthElement.innerText = choreLength;
}

// Function to render the changes to the webpage
function render() {
    updateChoreLength();
    updateEasiestChore();
    updateHardestChore();
}

// Event listener for the submission button to call the render function
submissionBtn.addEventListener("click", function () {
    render(); // Update all the chore details when the button is clicked
    submissionBtn.disabled = true; // Disable the button after submission to prevent multiple clicks
    submissionBtn.innerText = "Submitted"; // Update button text to indicate submission
});
