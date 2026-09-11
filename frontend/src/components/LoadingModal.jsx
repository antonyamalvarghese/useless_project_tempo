import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Radar, Sparkles } from 'lucide-react';

const STAGES = [
  { id: 1, labelMl: "തീറ്റ ഉപഭോഗം പരിശോധിക്കുന്നു....", labelEn: "Checking food consumption...." },
  { id: 2, labelMl: "പാലുൽപ്പാദനം പരിശോധിക്കുന്നു......", labelEn: "Checking milk production......" },
  { id: 3, labelMl: "ചാണക അളവ് പരിശോധിക്കുന്നു.......", labelEn: "Checking dung output......." },
  { id: 4, labelMl: "കൊമ്പിന്റെ നീളം പരിശോധിക്കുന്നു........", labelEn: "Checking horn length........" },
  { id: 5, labelMl: "സ്വത്ത് നാശനഷ്ടം പരിശോധിക്കുന്നു.........", labelEn: "Checking property damage........." },
];

export default function LoadingModal({ isOpen, onComplete, lang }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStage(0);
      setCompletedStages([]);
      return;
    }

    let stageIdx = 0;
    const interval = setInterval(() => {
      if (stageIdx < STAGES.length) {
        setCompletedStages((prev) => [...prev, stageIdx]);
        stageIdx++;
        setCurrentStage(stageIdx);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = Math.min(Math.round((completedStages.length / STAGES.length) * 100), 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border-2 border-amber-400/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden text-center text-white">
        
        {/* Top Radar / Scanner Ring */}
        <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-400 animate-radar opacity-80" />
          <div className="absolute inset-2 rounded-full border-2 border-orange-500 animate-ping opacity-30" />
          <div className="w-20 h-20 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-full flex items-center justify-center text-4xl shadow-lg border-2 border-white pulse-yellow">
            🐃
          </div>
        </div>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-black text-amber-300 mb-1 leading-snug">
          {lang === 'ml' ? 'പോത്തിന്റെ പാർട്ടി വിശകലനം ചെയ്യുന്നു...' : 'Predicting Buffalo Party...'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-medium">
          {lang === 'ml' ? 'മെഷീൻ ലേണിംഗ് മോഡൽ വിവരങ്ങൾ വിശകലനം ചെയ്യുന്നു' : 'Machine Learning KNN Model processing parameters...'}
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs font-bold text-amber-300 mb-2">
            <span>{lang === 'ml' ? 'വിശകലന പുരോഗതി' : 'Analysis Progress'}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 p-0.5 border border-slate-700 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-500 via-amber-400 to-amber-300 h-full rounded-full transition-all duration-300 shadow-md"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Stages Checklist */}
        <div className="space-y-3 text-left bg-slate-950/60 rounded-2xl p-4 border border-slate-800">
          {STAGES.map((stage, idx) => {
            const isDone = completedStages.includes(idx);
            const isCurrent = currentStage === idx;

            return (
              <div 
                key={stage.id}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                  isDone 
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40' 
                    : isCurrent
                    ? 'bg-amber-950/40 text-amber-200 border border-amber-600/50 animate-pulse'
                    : 'text-slate-500 opacity-60'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold">
                  {lang === 'ml' ? stage.labelMl : stage.labelEn}
                </span>
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                ) : isCurrent ? (
                  <Loader2 className="w-5 h-5 text-amber-400 animate-spin shrink-0 ml-2" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>

        {/* Humorous Footer Note */}
        <div className="mt-5 text-xs text-amber-400/80 italic flex items-center justify-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'ml' ? 'കൃത്യമായ പാർട്ടി പ്രവചനം ഉടൻ ലഭിക്കും!' : 'Accurate party prediction incoming!'}</span>
        </div>

      </div>
    </div>
  );
}
