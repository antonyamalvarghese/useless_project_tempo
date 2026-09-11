import os
import joblib
import pickle
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'buffalo_knn_model.pkl')

# Load the ML model once at startup
try:
    model = joblib.load(MODEL_PATH)
    print(f"ML Model loaded successfully from {MODEL_PATH}")
except Exception as e:
    print(f"Joblib load error: {e}. Trying raw pickle...")
    with open(MODEL_PATH, 'rb') as f:
        model = pickle.load(f)

# Define exact feature order expected by model
FEATURE_NAMES = ['milk_production_litre', 'dung_kg', 'food_consumption_kg', 'horn_length_cm', 'property_damage_cost_inr']

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "healthy",
        "model_type": str(type(model)),
        "classes": model.classes_.tolist() if hasattr(model, 'classes_') else []
    })

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Extract features with fallbacks for camelCase or snake_case
        milk = float(data.get('milkProduction', data.get('milk_production_litre', 45)))
        dung = float(data.get('dungOutput', data.get('dung_kg', 40)))
        food = float(data.get('foodConsumption', data.get('food_consumption_kg', 7.5)))
        horn = float(data.get('hornLength', data.get('horn_length_cm', 20)))
        raw_damage = float(data.get('propertyDamage', data.get('property_damage_cost_inr', 6)))

        # Convert property damage if input is in thousands (5 - 7)
        damage_inr = raw_damage * 1000 if raw_damage <= 100 else raw_damage

        # Construct DataFrame matching exact feature names and order
        input_df = pd.DataFrame([{
            'milk_production_litre': milk,
            'dung_kg': dung,
            'food_consumption_kg': food,
            'horn_length_cm': horn,
            'property_damage_cost_inr': damage_inr
        }])[FEATURE_NAMES]

        # Run model prediction
        prediction = model.predict(input_df)[0]
        
        # Calculate confidence probabilities if available
        confidence = 100
        probabilities = {}
        if hasattr(model, 'predict_proba'):
            probas = model.predict_proba(input_df)[0]
            classes = model.classes_
            probabilities = {str(c): float(p) for c, p in zip(classes, probas)}
            max_prob = float(np.max(probas))
            confidence = int(round(max_prob * 100))

        return jsonify({
            "predictedClass": str(prediction),
            "confidence": confidence,
            "probabilities": probabilities,
            "inputs": {
                "foodConsumption": food,
                "milkProduction": milk,
                "dungOutput": dung,
                "hornLength": horn,
                "propertyDamage": raw_damage
            }
        })
    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    print(f"Starting Python ML service on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=False)
