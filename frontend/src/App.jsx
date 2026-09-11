import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';
import LoadingModal from './components/LoadingModal';
import { predictBuffaloParty } from './services/predictionApi';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'input' | 'result'
  const [lang, setLang] = useState('ml'); // 'ml' | 'en'
  const [isLoading, setIsLoading] = useState(false);
  const [predictionData, setPredictionData] = useState(null);
  const [buffaloName, setBuffaloName] = useState('');
  const [apiError, setApiError] = useState(null);

  const handleStartPrediction = () => {
    setCurrentPage('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePredictSubmit = async (inputs, name) => {
    setBuffaloName(name);
    setApiError(null);
    setIsLoading(true);

    try {
      const data = await predictBuffaloParty(inputs);
      setPredictionData(data);
    } catch (err) {
      console.error("Prediction Error:", err);
      setIsLoading(false);
      setApiError(
        lang === 'ml'
          ? "പ്രവചന സേവനം ഇപ്പോൾ ലഭ്യമല്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക."
          : "Prediction service is currently unavailable. Please try again."
      );
    }
  };

  const handleLoadingModalComplete = () => {
    setIsLoading(false);
    if (predictionData) {
      setCurrentPage('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetInputs = () => {
    setPredictionData(null);
    setBuffaloName('');
    setApiError(null);
    setCurrentPage('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 font-malayalam">
      
      {/* API Error Notification Banner if backend is unavailable */}
      {apiError && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-rose-900 border-2 border-rose-500 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-lg w-full flex items-center justify-between text-sm font-bold animate-bounce">
          <span>{apiError}</span>
          <button 
            onClick={() => setApiError(null)}
            className="ml-4 bg-rose-950 px-3 py-1 rounded-lg border border-rose-700 hover:bg-rose-800"
          >
            ✕
          </button>
        </div>
      )}

      {/* Pages Navigation */}
      {currentPage === 'landing' && (
        <LandingPage
          onStart={handleStartPrediction}
          lang={lang}
          setLang={setLang}
        />
      )}

      {currentPage === 'input' && (
        <InputPage
          onPredict={handlePredictSubmit}
          onBack={handleBackHome}
          lang={lang}
          setLang={setLang}
        />
      )}

      {currentPage === 'result' && predictionData && (
        <ResultPage
          result={predictionData}
          buffaloName={buffaloName}
          onResetInputs={handleResetInputs}
          onBackHome={handleBackHome}
          lang={lang}
          setLang={setLang}
        />
      )}

      {/* 5-Stage Animated Analysis Scanner Modal */}
      <LoadingModal
        isOpen={isLoading}
        onComplete={handleLoadingModalComplete}
        lang={lang}
      />

    </div>
  );
}
