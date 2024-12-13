// JavaScript code for managing the cat poll functionality

// Object to store poll results
const pollResults = {
    Mona: 0,
    Maxwell: 0,
    Tenley: 0,
    Rocky: 0
};

// Get references to DOM elements
const pollForm = document.getElementById('pollForm');
const monaResult = document.getElementById('monaResult');
const maxwellResult = document.getElementById('maxwellResult');
const tenleyResult = document.getElementById('tenleyResult');
const rockyResult = document.getElementById('rockyResult');

// Update poll results in the UI
function updatePollResults() {
    monaResult.textContent = pollResults.Mona;
    maxwellResult.textContent = pollResults.Maxwell;
    tenleyResult.textContent = pollResults.Tenley;
    rockyResult.textContent = pollResults.Rocky;
}

// Handle form submission
pollForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the selected radio button value
    const selectedCat = document.querySelector('input[name="catVote"]:checked');
    
    if (selectedCat) {
        // Increment the vote count for the selected cat
        const catName = selectedCat.value;
        pollResults[catName]++;
        
        // Update the UI with new poll results
        updatePollResults();
        
        // Optionally show a thank-you message
        alert(`Thanks for voting for ${catName}!`);
    } else {
        // If no option was selected, alert the user
        alert("Please select a cat to vote!");
    }
});

// Initialize results on page load
updatePollResults();
