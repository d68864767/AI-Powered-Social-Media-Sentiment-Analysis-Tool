```javascript
// Define Data Processor
const dataProcessor = {};

// Function to process fetched data
dataProcessor.processData = (data) => {
  try {
    // Extract relevant information from each post
    const processedData = data.map(post => {
      return {
        id: post.id,
        text: post.text,
        user: post.user,
        timestamp: post.timestamp
      };
    });

    return processedData;
  } catch (error) {
    console.error('An error occurred while processing data:', error);
    return [];
  }
};

module.exports = dataProcessor;
```

