import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Header from '../components/Header';
import MembershipCard from '../components/MembershipCard';
import { Printer, Share2, RefreshCw, Home, CheckCircle2, Shield, Sprout, Zap, Unlock, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Shield: Shield,
  Sprout: Sprout,
  Zap: Zap,
  Unlock: Unlock,
};

export default function ResultPage({ result, buffaloName, onResetInputs, onBackHome, lang, setLang }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const party = result.partyDetails;
  const IconComponent = ICON_MAP[party.badgeIcon] || Shield;

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareText = `🐃 Buffalo Political Party Predictor\n\nMy buffalo (${buffaloName || 'Kaali'}) has been predicted to be a member of:\n\n${party.nameMl} (${party.nameEn})\n"${party.sloganMl}"\n\nMatch Confidence: ${result.confidence}%\n\nഎരുമ രാഷ്ട്രീയ പ്രവചനം!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Buffalo Political Party Predictor',
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch (err) {
        console.log('Share canceled/failed fallback to copy');
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch (err) {
      alert("Could not copy text: " + err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-amber-400 selection:text-slate-900">
      
      <Header lang={lang} setLang={setLang} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full no-print">
        
        {/* Top Result Banner */}
        <section className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-4 shadow-2xl mb-10 text-center relative overflow-hidden" style={{ borderColor: party.themeColor }}>
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ml' ? 'പ്രവചന ഫലം തയ്യാർ!' : 'PREDICTION RESULT READY'}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-300 mb-2">
            {lang === 'ml' 
              ? `നിങ്ങളുടെ എരുമ (${buffaloName || 'കാളി'}) സജീവ അംഗമാണെന്ന് പ്രവചിച്ചിരിക്കുന്നു:` 
              : `Your buffalo (${buffaloName || 'Kaali'}) has been predicted to be a member of:`}
          </h2>

          {/* Party Badge Icon & Party Title */}
          <div className="my-6 flex flex-col items-center">
            <div 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center text-white shadow-2xl mb-4 border-4 border-white transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: party.themeColor }}
            >
              <IconComponent className="w-14 h-14 sm:w-16 sm:h-16" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
              {lang === 'ml' ? party.nameMl : party.nameEn}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-400">
              {lang === 'ml' ? party.nameEn : party.nameMl}
            </p>
          </div>

          {/* Dynamic Slogan Box */}
          <div className="bg-amber-400/15 border-2 border-amber-400/40 rounded-2xl p-4 max-w-2xl mx-auto mb-6 shadow-inner">
            <p className="text-lg sm:text-2xl font-black text-amber-300 italic">
              "{lang === 'ml' ? party.sloganMl : party.sloganEn}"
            </p>
          </div>

          {/* Match Confidence Gauge */}
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 bg-emerald-950/60 border border-emerald-500/50 rounded-full text-emerald-300 font-extrabold text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>ML MODEL MATCH CONFIDENCE: {result.confidence}%</span>
          </div>

        </section>

        {/* Diagnostic Breakdown Section */}
        <section className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-10">
          <h3 className="text-xl sm:text-2xl font-black text-amber-300 mb-4 flex items-center">
            <span>{lang === 'ml' ? 'എന്തുകൊണ്ടാണ് ഈ പാർട്ടി?' : 'Why this party? (Diagnostic Breakdown)'}</span>
          </h3>

          {/* 5 Input Values Used */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">🥛 പാലുൽപ്പാദനം</span>
              <span className="font-bold text-white text-sm">{result.inputs.milkProduction} L/day</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">💩 ചാണക അളവ്</span>
              <span className="font-bold text-white text-sm">{result.inputs.dungOutput} kg/day</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">🌱 തീറ്റ ഉപഭോഗം</span>
              <span className="font-bold text-white text-sm">{result.inputs.foodConsumption} kg/day</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">🦬 കൊമ്പിന്റെ നീളം</span>
              <span className="font-bold text-white text-sm">{result.inputs.hornLength} cm</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-400 text-xs block">🚧 സ്വത്ത് നാശനഷ്ടം</span>
              <span className="font-bold text-white text-sm">{result.inputs.propertyDamage} (thousands ₹)</span>
            </div>
          </div>

          {/* Dynamic Malayalam Narrative Explanation */}
          <blockquote className="bg-slate-950/80 border-l-4 border-amber-400 p-4 rounded-r-xl italic text-slate-300 text-sm sm:text-base leading-relaxed">
            "{lang === 'ml' ? party.explanationTemplateMl : party.descriptionEn}"
          </blockquote>
        </section>

        {/* Membership Card Component */}
        <section className="mb-10">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-white">
              {lang === 'ml' ? 'എരുമ രാഷ്ട്രീയ അംഗത്വ കാർഡ്' : 'Buffalo Political Membership Card'}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'ml' ? 'പ്രിന്റ് അല്ലെങ്കിൽ ഷെയർ ചെയ്യുന്നതിനായി താഴെയുള്ള അംഗത്വ കാർഡ് ഉപയോഗിക്കുക' : 'Printable fictional membership certificate'}
            </p>
          </div>
          
          <MembershipCard result={result} buffaloName={buffaloName} lang={lang} />
        </section>

        {/* Action Toolbar */}
        <section className="bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-wrap items-center justify-center gap-4">
          
          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg border border-orange-400 transition-all duration-200 active:scale-95 text-sm sm:text-base"
          >
            <Printer className="w-5 h-5" />
            <span>{lang === 'ml' ? 'അംഗത്വ കാർഡ് പ്രിന്റ് ചെയ്യുക' : 'PRINT MEMBERSHIP CARD'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg border border-blue-400 transition-all duration-200 active:scale-95 text-sm sm:text-base relative"
          >
            <Share2 className="w-5 h-5" />
            <span>{lang === 'ml' ? 'ഫലം ഷെയർ ചെയ്യുക' : 'SHARE RESULT'}</span>
            {copySuccess && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-extrabold px-2.5 py-1 rounded shadow">
                Copied to clipboard!
              </span>
            )}
          </button>

          {/* Try Another Buffalo Button */}
          <button
            onClick={onResetInputs}
            className="flex items-center space-x-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl shadow-lg border border-amber-300 transition-all duration-200 active:scale-95 text-sm sm:text-base"
          >
            <RefreshCw className="w-5 h-5" />
            <span>{lang === 'ml' ? 'പുനഃപരിശോധിക്കുക' : 'TRY ANOTHER BUFFALO'}</span>
          </button>

          {/* Back to All Parties Button */}
          <button
            onClick={onBackHome}
            className="flex items-center space-x-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl shadow border border-slate-600 transition-all duration-200 active:scale-95 text-sm sm:text-base"
          >
            <Home className="w-5 h-5" />
            <span>{lang === 'ml' ? 'പ്രധാന പേജിലേക്ക്' : 'BACK TO ALL PARTIES'}</span>
          </button>

        </section>

      </main>

      {/* Embedded Print View for Window.print */}
      <div className="hidden print:block">
        <MembershipCard result={result} buffaloName={buffaloName} lang={lang} />
      </div>

    </div>
  );
}
