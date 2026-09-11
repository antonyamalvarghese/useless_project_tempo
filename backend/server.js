const express = require('express');
const cors = require('cors');
const path = require('path');
const { SLIDER_CONFIG, PARTIES } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

const PYTHON_ML_SERVICE_URL = process.env.PYTHON_ML_SERVICE_URL || 'http://127.0.0.1:5001';

// Health Check Endpoint
app.get('/api/health', async (req, res) => {
  try {
    const response = await fetch(`${PYTHON_ML_SERVICE_URL}/health`);
    const data = await response.json();
    return res.json({ status: "ok", backend: "express", ml_service: data });
  } catch (err) {
    return res.json({ status: "warning", backend: "express", ml_service: "offline", error: err.message });
  }
});

// Get Configuration (Min/Max ranges, party details)
app.get('/api/config', (req, res) => {
  res.json({
    sliderConfig: SLIDER_CONFIG,
    parties: PARTIES
  });
});

// POST /api/predict - Main prediction endpoint
app.post('/api/predict', async (req, res) => {
  try {
    const { foodConsumption, milkProduction, dungOutput, hornLength, propertyDamage } = req.body;

    // Validate inputs presence
    if (foodConsumption === undefined || milkProduction === undefined || dungOutput === undefined || hornLength === undefined || propertyDamage === undefined) {
      return res.status(400).json({ 
        error: "Invalid input. All five numerical parameters are required.",
        errorMl: "അസാധുവായ വിവരങ്ങൾ. അഞ്ച് അളവുകളും നിർബന്ധമാണ്." 
      });
    }

    // Call Python ML microservice
    const mlResponse = await fetch(`${PYTHON_ML_SERVICE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        foodConsumption: Number(foodConsumption),
        milkProduction: Number(milkProduction),
        dungOutput: Number(dungOutput),
        hornLength: Number(hornLength),
        propertyDamage: Number(propertyDamage)
      })
    });

    if (!mlResponse.ok) {
      const errorText = await mlResponse.text();
      throw new Error(`ML Service responded with status ${mlResponse.status}: ${errorText}`);
    }

    const mlData = await mlResponse.json();
    const predictedClassKey = mlData.predictedClass;
    
    // Map predicted class to full party config
    const partyDetails = PARTIES[predictedClassKey] || PARTIES["Akhileindya Eruma Sangham"];

    return res.json({
      success: true,
      predictedClass: predictedClassKey,
      party: partyDetails.nameMl,
      partyEn: partyDetails.nameEn,
      slogan: partyDetails.sloganMl,
      sloganEn: partyDetails.sloganEn,
      description: partyDetails.descriptionMl,
      explanation: partyDetails.explanationTemplateMl,
      partyDetails: partyDetails,
      confidence: mlData.confidence || 100,
      probabilities: mlData.probabilities || {},
      inputs: {
        foodConsumption: Number(foodConsumption),
        milkProduction: Number(milkProduction),
        dungOutput: Number(dungOutput),
        hornLength: Number(hornLength),
        propertyDamage: Number(propertyDamage)
      }
    });

  } catch (error) {
    console.error("Backend Predict Route Error:", error.message);
    return res.status(503).json({
      error: "Prediction service is currently unavailable. Please try again.",
      errorMl: "പ്രവചന സേവനം ഇപ്പോൾ ലഭ്യമല്ല. വീണ്ടും ശ്രമിക്കുക.",
      details: error.message
    });
  }
});

// Serve static frontend files if built
const frontendBuildPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendBuildPath));
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendBuildPath, 'index.html'), (err) => {
      if (err) {
        res.send("Buffalo Political Party Predictor Backend is running. Frontend dev server is on port 5173.");
      }
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express API backend running on http://localhost:${PORT}`);
});
