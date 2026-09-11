import React from 'react';
import { Vote, Globe } from 'lucide-react';

export default function Header({ lang, setLang }) {
  return (
    <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white shadow-xl border-b-4 border-amber-400 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Left Branding */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg text-orange-950 font-bold text-2xl border-2 border-white transform hover:rotate-12 transition-transform duration-300">
            🐃
          </div>
          <div>
            <h1 className="font-extrabold text-lg sm:text-2xl tracking-tight text-white drop-shadow-md leading-tight">
              എരുമ രാഷ്ട്രീയം
            </h1>
            <p className="text-amber-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              BUFFALO POLITICAL PARTY PREDICTOR
            </p>
          </div>
        </div>

        {/* Right Controls: Language Toggle & Election Badge */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center px-3 py-1 bg-orange-700/60 rounded-full border border-amber-300/40 text-amber-100 text-xs font-semibold">
            <Vote className="w-4 h-4 mr-1.5 text-amber-300 animate-pulse" />
            <span>2026 OFFICIAL PREDICTION</span>
          </div>

          <button
            onClick={() => setLang(lang === 'ml' ? 'en' : 'ml')}
            className="flex items-center space-x-1.5 px-4 py-2 bg-slate-900/40 hover:bg-slate-900/60 text-amber-300 rounded-lg border border-amber-400/40 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md active:scale-95"
            title="Toggle Language / ഭാഷ മാറ്റുക"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'ml' ? 'English' : 'മലയാളം'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
