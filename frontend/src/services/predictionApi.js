// API Service for ML Predictions

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function predictBuffaloParty(inputs) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foodConsumption: Number(inputs.foodConsumption),
        milkProduction: Number(inputs.milkProduction),
        dungOutput: Number(inputs.dungOutput),
        hornLength: Number(inputs.hornLength),
        propertyDamage: Number(inputs.propertyDamage)
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.errorMl || errorData.error || "Prediction service is currently unavailable. Please try again.");
    }

    return await response.json();
  } catch (error) {
    console.error("API Prediction Request Error:", error);
    throw error;
  }
}
