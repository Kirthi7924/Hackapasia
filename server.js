const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Example route for energy optimization
app.post("/optimize", async (req, res) => {
  try {
    const buildingData = req.body; // Data from IoT devices or user input
    
    // Call the AI API
    const response = await axios.post("http://127.0.0.1:5000/predict", {
      features: buildingData.features,
    });
    
    // Send AI response to client
    res.json(response.data);
  } catch (error) {
    console.error("Error calling AI API:", error.message);
    res.status(500).send("Error in AI processing");
  }
});

// Start Node.js server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});