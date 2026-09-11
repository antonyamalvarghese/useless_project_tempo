import React from 'react';
import Header from '../components/Header';
import PartyCard from '../components/PartyCard';
import { PARTIES_LIST } from '../config/appConfig';
import { Sparkles, ArrowRight, Vote, ShieldAlert } from 'lucide-react';

export default function LandingPage({ onStart, lang, setLang }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-950 text-white selection:bg-amber-400 selection:text-slate-900">
      
      {/* Background Image Container with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none opacity-35 filter blur-[1px] transform scale-105"
        style={{ backgroundImage: `url('/home.jpg')` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950 z-0 pointer-events-none" />

      {/* Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Content */}
      <main className="flex-1 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-between">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-md backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>{lang === 'ml' ? 'ആദ്യമായി മെഷീൻ ലേണിംഗ് എരുമ രാഷ്ട്രീയ പ്രവചനം!' : 'First ML Powered Buffalo Political Predictor!'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 leading-tight mb-6 drop-shadow-lg">
            {lang === 'ml' ? 'എരുമയുടെ പാർട്ടി ഏതാണെന്ന് പ്രവചിക്കാം!' : 'Which political party does your buffalo belong to?'}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow">
            {lang === 'ml' 
              ? 'നിങ്ങളുടെ എരുമയുടെ അഞ്ച് സവിശേഷതകൾ (പാൽ, ചാണകം, തീറ്റ, കൊമ്പ്, സ്വത്ത് നാശനഷ്ടം) നൽകി അത് ഏത് സാങ്കൽപ്പിക എരുമ രാഷ്ട്രീയ പാർട്ടിയിലാണ് എന്ന് KNN Machine Learning model ഉപയോഗിച്ച് പ്രവചിക്കൂ!'
              : 'Enter five characteristics of your buffalo to discover its fictional political party using our trained Machine Learning KNN model!'}
          </p>

          {/* Quick Notice Banner */}
          <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-4 max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 flex items-center justify-center space-x-2 backdrop-blur-md shadow-lg">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              {lang === 'ml' 
                ? 'ശ്രദ്ധിക്കുക: ഇത് ഒരു വിനോദ ആപ്ലിക്കേഷനാണ്. യഥാർത്ഥ രാഷ്ട്രീയ പാർട്ടികളുമായി ബന്ധമില്ല.' 
                : 'Note: Entertainment fictional buffalo application. No real-world political affiliation.'}
            </span>
          </div>

        </section>

        {/* 4 Fictional Party Cards Grid */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'ml' ? 'എരുമ രാഷ്ട്രീയ മുന്നണികൾ' : 'Fictional Buffalo Political Parties'}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {lang === 'ml' ? 'നാല് പ്രധാന സാങ്കൽപ്പിക എരുമ പാർട്ടികൾ' : 'Explore the 4 fictional party platforms'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTIES_LIST.map((party) => (
              <PartyCard key={party.id} party={party} lang={lang} />
            ))}
          </div>
        </section>

        {/* Bottom CTA Button */}
        <section className="text-center pb-8">
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-black text-xl sm:text-2xl rounded-3xl shadow-2xl border-4 border-amber-300 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:scale-95 pulse-yellow"
          >
            <Vote className="w-8 h-8 mr-3 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col items-start text-left">
              <span className="leading-none text-white drop-shadow">
                {lang === 'ml' ? 'എരുമയുടെ പാർട്ടി അറിയാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക' : 'Start Party Prediction'}
              </span>
              <span className="text-xs text-amber-200 uppercase tracking-widest font-bold mt-1">
                START PREDICTION NOW →
              </span>
            </div>
            <ArrowRight className="w-7 h-7 ml-4 text-white group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950/90 py-6 text-center text-xs text-slate-500">
        <p>എരുമ രാഷ്ട്രീയ പ്രവചനം © 2026 | Powered by Scikit-Learn KNN ML Model & React</p>
      </footer>

    </div>
  );
}
