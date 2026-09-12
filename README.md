<<<<<<< HEAD
<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# [BUFFALO POLITICAL PARTY PREDICTOR] 🎯


## Basic Details
### Team Name: [YAPSQUAD]


### Team Members
- Team Lead: [RINZ LOJI] - [RIT, KOTTAYAM]
- Member 2: [ANTONYAMAL VARGHESE] - [RIT, KOTTAYAM]


### Project Description
[Buffalo political party predictor which predicts the party of a buffalo using the features like milk production,amount of dung,horn length,food consumption,and property damage with the help of KNN Machine Learning Model.]

### The Problem (that doesn't exist)
[Sometimes the buffalos are categorized into wrong political parties.]

### The Solution (that nobody asked for)
[Our solution ensure that all buffalos are categorized to the right parties by analyzing thier  features like milk production,food consumption,horn lenght,dung quantity, and property damage.]

## Technical Details
### Technologies/Components Used
For Software:
- [React,Tailwind CSS,]
- [Node.js,Express]
- [pandas,KNeighborsClassifier,joblib]
- [Antigravity, Google Colab]

For Hardware:
- [List main components]
- [List specifications]
- [List tools required]




### Project Documentation
For Software:

# Screenshots (Add at least 3)

<img width="1917" height="1033" alt="Screenshot 2026-09-12 052224" src="https://github.com/user-attachments/assets/16475b0a-ff6b-4e7d-8643-c7b6fc6be717" />
Landing page
<img width="1917" height="1033" alt="Screenshot 2026-09-12 052224" src="https://github.com/user-attachments/assets/d20bcad2-f2a0-42c8-89ba-ef90cbe008f7" />
Feature input page
<img width="1919" height="1033" alt="Screenshot 2026-09-12 052243" src="https://github.com/user-attachments/assets/fe6e2734-0374-4c45-a14b-345b7012c8ce" />
Predicted output




---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



=======
# 🐃 പോത്ത് രാഷ്ട്രീയ പ്രവചനം | Buffalo Political Party Predictor

A polished, fully functional multi-page web application that predicts which fictional buffalo political party a buffalo belongs to based on five numerical characteristics using a trained Machine Learning (`KNeighborsClassifier`) model.

---

## 🌟 Features

- **Real Machine Learning Model (`.pkl`)**: Loads and uses `buffalo_knn_model.pkl` for actual predictions and probability outputs.
- **Visual Design System**: Rich, vibrant design featuring `home.jpg` backdrop with glassmorphic cards, dark blue background (`#1d4ed8`), primary orange (`#ea580c`), and gold accents (`#facc15`).
- **Malayalam Typography**: First-class support for Malayalam language using Google Fonts `Noto Sans Malayalam` & `Manjari`. Includes a Malayalam / English bilingual toggle.
- **5 Numerical Sliders**: Every feature represented by a slider showing current value, unit, minimum, and maximum with a live summary profile card.
- **5-Stage Animated Radar Scanner**: Fullscreen analysis modal simulating 5 sequential diagnostic stages with progress bar (0% -> 100%).
- **Fictional Political Parties**: 4 fictional parties with custom badges, slogans, descriptions, and statistics. No real-world political imagery used.
- **Printable Buffalo Political Membership Card**: Printable membership card optimized for browser printing (`window.print()`).
- **Share Results**: Integrated Web Share API with clipboard copy fallback.

---

## 🏗️ Architecture

```
React Frontend (Vite + Tailwind CSS + Lucide Icons) [Port 5173]
             ↓
Express API Server (Node.js REST API) [Port 5000]
             ↓
Python ML Microservice (Flask + Scikit-Learn) [Port 5001]
             ↓
`buffalo_knn_model.pkl` (KNN Classifier Model)
```

---

## 🚀 Quick Start Guide

### 1. Python ML Service Setup
```bash
# Navigate to ml_service directory
cd ml_service

# Install dependencies (or activate venv)
py -3.12 -m pip install -r requirements.txt

# Start Python ML Flask Server (runs on http://127.0.0.1:5001)
python app.py
```

### 2. Express Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start Express Server (runs on http://localhost:5000)
npm start
```

### 3. Frontend React Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite Development Server (runs on http://localhost:5173)
npm run dev
```

---

## 🔌 API Specification

### Endpoint: `POST /api/predict`

#### Request Body
```json
{
  "foodConsumption": 18,
  "milkProduction": 8,
  "dungOutput": 12,
  "hornLength": 24,
  "propertyDamage": 65
}
```

#### Response Body
```json
{
  "success": true,
  "predictedClass": "Akhileindya Eruma Sangham",
  "party": "അഖിലേന്ത്യാ എരുമ സംഘം",
  "partyEn": "All India Buffalo Association",
  "slogan": "എരുമ ഒന്നിച്ചാൽ, കുളം നിറയും",
  "sloganEn": "When buffaloes unite, the pond fills up!",
  "description": "പോത്തുകളുടെ ഐക്യത്തിനും കുളം സംരക്ഷണത്തിനും വേണ്ടി പോരാടുന്ന പ്രമുഖ സംഘടന.",
  "confidence": 100,
  "probabilities": {
    "Akhileindya Eruma Sangham": 1.0,
    "Deshiya Yuva Eruma Federation": 0.0,
    "Eruma Pullu Avakasha Munnani": 0.0,
    "Eruma Swathanthrya Munnani": 0.0
  },
  "inputs": {
    "foodConsumption": 18,
    "milkProduction": 8,
    "dungOutput": 12,
    "hornLength": 24,
    "propertyDamage": 65
  }
}
```

---

## ⚙️ Configuration & Customization

- **Slider Ranges & Metadata**: Easily modified in [`frontend/src/config/appConfig.js`](file:///c:/Users/anton/Desktop/useless/frontend/src/config/appConfig.js) and [`backend/config.js`](file:///c:/Users/anton/Desktop/useless/backend/config.js).
- **Party Information**: Slogans, descriptions, colors, icons, and statistical badges can be updated in `appConfig.js`.

---

## 🛡️ Model File Location

Place the `.pkl` model file at:
- `ml_service/buffalo_knn_model.pkl`
- `backend/model/buffalo_knn_model.pkl`
>>>>>>> a0e725f (Initial commit: Buffalo Political Party Predictor full web application with ML KNN model, Express backend, and React frontend)
