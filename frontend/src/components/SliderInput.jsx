import React from 'react';
import { Utensils, Milk, Biohazard, Compass, ShieldAlert } from 'lucide-react';

const ICON_MAP = {
  Utensils: Utensils,
  Milk: Milk,
  Biohazard: Biohazard,
  Compass: Compass,
  ShieldAlert: ShieldAlert,
};

export default function SliderInput({ config, value, onChange, lang }) {
  const Icon = ICON_MAP[config.icon] || Utensils;
  const percentage = ((value - config.min) / (config.max - config.min)) * 100;

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 shadow-lg hover:border-amber-400/50 transition-all duration-300">
      
      {/* Label and Value Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shadow-inner">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
              {lang === 'ml' ? config.labelMl : config.labelEn}
            </h4>
            <p className="text-xs text-slate-400 font-medium">
              {lang === 'ml' ? config.labelEn : config.labelMl}
            </p>
          </div>
        </div>

        {/* Live Value Pill */}
        <div className="bg-amber-400 text-slate-950 font-black px-4 py-1.5 rounded-full text-base sm:text-lg shadow-md flex items-center space-x-1 border border-amber-300">
          <span>{value}</span>
          <span className="text-xs font-semibold text-slate-800 ml-1">{config.unit}</span>
        </div>
      </div>

      {/* Slider Track and Thumb */}
      <div className="relative py-2">
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 accent-amber-400"
          style={{
            background: `linear-gradient(to right, #facc15 0%, #ea580c ${percentage}%, #334155 ${percentage}%, #334155 100%)`
          }}
          aria-label={config.labelEn}
        />
      </div>

      {/* Min & Max Labels */}
      <div className="flex justify-between text-xs text-slate-400 font-semibold pt-1">
        <span>Min: {config.min} {config.unit}</span>
        <span>Max: {config.max} {config.unit}</span>
      </div>
    </div>
  );
}
