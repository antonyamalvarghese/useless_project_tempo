import React from 'react';
import { Award, Shield, Sprout, Zap, Unlock, CheckCircle } from 'lucide-react';

const ICON_MAP = {
  Shield: Shield,
  Sprout: Sprout,
  Zap: Zap,
  Unlock: Unlock,
};

export default function MembershipCard({ result, buffaloName, lang }) {
  const party = result.partyDetails;
  const IconComponent = ICON_MAP[party.badgeIcon] || Shield;
  const cardId = `BUFF-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div 
      id="printable-membership-card"
      className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border-4 max-w-2xl mx-auto relative overflow-hidden transition-all duration-300"
      style={{ borderColor: party.themeColor }}
    >
      {/* Background Seal Pattern */}
      <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-[180px] font-black text-slate-900 select-none">
        🐃
      </div>

      {/* Header Banner */}
      <div 
        className="rounded-2xl p-4 text-white mb-6 shadow-md flex items-center justify-between"
        style={{ backgroundColor: party.themeColor }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-inner">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
              {lang === 'ml' ? 'എരുമ രാഷ്ട്രീയ അംഗത്വ കാർഡ്' : 'BUFFALO POLITICAL MEMBERSHIP CARD'}
            </h3>
            <p className="text-xs font-bold text-white/80 tracking-widest uppercase">
              OFFICIAL FICTIONAL ELECTION COMMISSION CERTIFICATE
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end text-right text-xs font-semibold text-white/90">
          <span>ID: {cardId}</span>
          <span>YEAR: 2026</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Left Photo / Mascot Placeholder */}
        <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-5xl shadow-md border-4 border-white mb-2">
            🐃
          </div>
          <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
            {buffaloName || (lang === 'ml' ? 'എരുമ' : 'Buffalo')}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold">VERIFIED MEMBER</span>
        </div>

        {/* Right Details */}
        <div className="md:col-span-2 space-y-3">
          
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {lang === 'ml' ? 'എരുമയുടെ പേര് (Buffalo Name):' : 'Buffalo Name / Nickname:'}
            </span>
            <p className="text-xl font-black text-slate-900">
              {buffaloName || (lang === 'ml' ? 'എരുമ' : 'Buffalo')}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {lang === 'ml' ? 'പ്രവചിച്ച പാർട്ടി (Predicted Party):' : 'Predicted Party:'}
            </span>
            <p className="text-lg font-black" style={{ color: party.themeColor }}>
              {lang === 'ml' ? party.nameMl : party.nameEn}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {lang === 'ml' ? 'പാർട്ടി മുദ്രാവാക്യം (Party Slogan):' : 'Party Slogan:'}
            </span>
            <p className="text-sm font-extrabold italic text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
              "{lang === 'ml' ? party.sloganMl : party.sloganEn}"
            </p>
          </div>

        </div>

      </div>

      {/* 5 Input Features Table */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6">
        <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center">
          <CheckCircle className="w-4 h-4 mr-1 text-emerald-600" />
          {lang === 'ml' ? 'എരുമയുടെ സവിശേഷതകൾ (Characteristics Breakdown)' : 'Buffalo Profile Characteristics'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">പാലുൽപ്പാദനം</span>
            <span className="text-slate-900 font-bold">{result.inputs.milkProduction} L/day</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">ചാണക അളവ്</span>
            <span className="text-slate-900 font-bold">{result.inputs.dungOutput} kg/day</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">തീറ്റ ഉപഭോഗം</span>
            <span className="text-slate-900 font-bold">{result.inputs.foodConsumption} kg/day</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">കൊമ്പിന്റെ നീളം</span>
            <span className="text-slate-900 font-bold">{result.inputs.hornLength} cm</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">സ്വത്ത് നാശനഷ്ടം</span>
            <span className="text-slate-900 font-bold">{result.inputs.propertyDamage} (thousands ₹)</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200">
            <span className="text-slate-400 block text-[10px]">ML Match Confidence</span>
            <span className="text-emerald-600 font-bold">{result.confidence}% MATCH</span>
          </div>
        </div>
      </div>

      {/* Official Bottom Seal & Disclaimer */}
      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
        <div className="flex items-center space-x-2 text-slate-500">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Fictional Buffalo Party Certificate</span>
        </div>
        <div className="font-mono text-slate-400 text-[10px]">
          SEAL: BUFF-ML-2026-VERIFIED
        </div>
      </div>

    </div>
  );
}
