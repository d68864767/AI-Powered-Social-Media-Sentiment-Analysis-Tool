```javascript
// Import required modules
const path = require('path');

// Define Dashboard Controller
const dashboardController = {};

// Function to show dashboard
dashboardController.showDashboard = (req, res) => {
  try {
    // Send the dashboard HTML file as response
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while loading the dashboard.' });
  }
};

module.exports = dashboardController;
```
