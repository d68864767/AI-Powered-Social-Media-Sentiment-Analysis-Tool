```javascript
// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const tf = require('@tensorflow/tfjs');

// Load environment variables
dotenv.config();

// Import custom modules
const apiController = require('./apiController');
const sentimentAnalysisModel = require('./sentimentAnalysisModel');
const dataProcessor = require('./dataProcessor');
const dashboardController = require('./dashboardController');

// Initialize Express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.static('public'));

// Set up routes
app.get('/', dashboardController.showDashboard);
app.post('/api/analyze', apiController.analyzeSentiments);

// Load AI model
sentimentAnalysisModel.loadModel(process.env.AI_MODEL_PATH);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
