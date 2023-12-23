```javascript
// Get the form and results container elements
const keywordForm = document.getElementById('keyword-form');
const resultsContainer = document.getElementById('results-container');

// Handle form submission
keywordForm.addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the entered keyword
    const keyword = document.getElementById('keyword').value;

    // Send a request to the server with the entered keyword
    fetch('/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyword })
    })
    .then(response => response.json())
    .then(data => {
        // Clear the results container
        resultsContainer.innerHTML = '';

        // Display the analysis results
        data.forEach(result => {
            const resultElement = document.createElement('p');
            resultElement.textContent = `Sentiment: ${result.sentiment}, Score: ${result.score}`;
            resultsContainer.appendChild(resultElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
```
