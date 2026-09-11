import React from 'react';
import { Shield, Sprout, Zap, Unlock, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Shield: Shield,
  Sprout: Sprout,
  Zap: Zap,
  Unlock: Unlock,
};

export default function PartyCard({ party, lang }) {
  const IconComponent = ICON_MAP[party.badgeIcon] || Shield;

  return (
    <div 
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-slate-800 shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden"
      style={{ borderColor: party.themeColor }}
    >
      {/* Decorative Header Strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-3" 
        style={{ backgroundColor: party.themeColor }}
      />

      <div>
        {/* Top Badge Icon & Party Title */}
        <div className="flex items-center space-x-3 mb-4 pt-2">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: party.themeColor }}
          >
            <IconComponent className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-black leading-snug text-slate-900">
              {lang === 'ml' ? party.nameMl : party.nameEn}
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              {lang === 'ml' ? party.nameEn : party.nameMl}
            </p>
          </div>
        </div>

        {/* Party Slogan */}
        <div className="bg-amber-50 rounded-xl p-3.5 mb-4 border border-amber-200 shadow-inner">
          <p className="text-sm sm:text-base font-extrabold text-amber-900 italic leading-relaxed text-center">
            "{lang === 'ml' ? party.sloganMl : party.sloganEn}"
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {lang === 'ml' ? party.descriptionMl : party.descriptionEn}
        </p>

        {/* Fictional Statistics */}
        <div className="border-t border-slate-200 pt-4 mb-4">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            {lang === 'ml' ? 'പാർട്ടി വിവരങ്ങൾ (Fictional Stats)' : 'Party Profile & Stats'}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {party.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-100/90 rounded-lg p-2 flex flex-col justify-between border border-slate-200">
                <span className="text-slate-500 font-medium truncate">{stat.labelMl}</span>
                <span className="font-bold text-slate-900 mt-0.5" style={{ color: party.themeColor }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Fictional Badge */}
      <div className="mt-2 text-center text-xs font-semibold text-slate-400 bg-slate-50 py-2 rounded-lg border border-slate-200">
        🐃 Fictional Buffalo Political Party
      </div>
    </div>
  );
}
