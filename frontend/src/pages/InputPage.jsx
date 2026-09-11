import React, { useState } from 'react';
import Header from '../components/Header';
import SliderInput from '../components/SliderInput';
import { SLIDER_DEFAULTS } from '../config/appConfig';
import { Sparkles, Play, ArrowLeft, Info, FileText } from 'lucide-react';

export default function InputPage({ onPredict, onBack, lang, setLang }) {
  const [inputs, setInputs] = useState({
    foodConsumption: SLIDER_DEFAULTS.foodConsumption.default,
    milkProduction: SLIDER_DEFAULTS.milkProduction.default,
    dungOutput: SLIDER_DEFAULTS.dungOutput.default,
    hornLength: SLIDER_DEFAULTS.hornLength.default,
    propertyDamage: SLIDER_DEFAULTS.propertyDamage.default,
  });

  const [buffaloName, setBuffaloName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSliderChange = (key, val) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate numerical inputs
    if (
      inputs.foodConsumption < 0 ||
      inputs.milkProduction < 0 ||
      inputs.dungOutput < 0 ||
      inputs.hornLength < 0 ||
      inputs.propertyDamage < 0
    ) {
      setErrorMsg(lang === 'ml' ? 'ദയവായി സാധുവായ അളവുകൾ നൽകുക.' : 'Please provide valid numerical values.');
      return;
    }
    onPredict(inputs, buffaloName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-bgBlue to-slate-950 text-white selection:bg-amber-400 selection:text-slate-900">
      
      <Header lang={lang} setLang={setLang} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        
        {/* Navigation Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 px-4 py-2 rounded-xl mb-6 border border-slate-700 text-sm font-semibold transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ml' ? 'പ്രധാന പേജിലേക്ക്' : 'Back to Home'}</span>
        </button>

        {/* Card Container */}
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border-2 border-blue-500/40 shadow-2xl">
          
          {/* Card Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-xs font-bold mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ml' ? 'മെഷീൻ ലേണിംഗ് ഇൻപുട്ടുകൾ' : 'ML Model Input Parameters'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-amber-300 mb-2 leading-tight">
              {lang === 'ml' ? 'നിങ്ങളുടെ പോത്തിന്റെ വിവരങ്ങൾ നൽകുക' : 'Enter Your Buffalo Details'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto">
              {lang === 'ml' 
                ? 'അഞ്ച് വിവരങ്ങൾ ഉപയോഗിച്ച് നിങ്ങളുടെ പോത്തിന്റെ രാഷ്ട്രീയ പാർട്ടി പ്രവചിക്കാം!' 
                : 'Predict your buffalo\'s political party using 5 characteristics!'}
            </p>
          </div>

          {errorMsg && (
            <div className="bg-rose-900/60 border border-rose-500 text-rose-200 p-4 rounded-xl mb-6 text-sm text-center font-bold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Optional Buffalo Name Input */}
            <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              <label className="block text-sm sm:text-base font-bold text-amber-200 mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-amber-400" />
                {lang === 'ml' ? 'പോത്തിന്റെ പേര് (ഓപ്ഷണൽ)' : 'Buffalo Name / Nickname (Optional)'}
              </label>
              <input
                type="text"
                value={buffaloName}
                onChange={(e) => setBuffaloName(e.target.value)}
                placeholder={lang === 'ml' ? 'ഉദാ: കരിമ്പൻ' : 'e.g. Karimban'}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 font-semibold"
              />
              <span className="text-xs text-slate-400 mt-1 block">
                {lang === 'ml' ? '* ഈ പേര് അംഗത്വ കാർഡിൽ കാണിക്കുന്നതിന് മാത്രമാണ്.' : '* Used solely for membership card display.'}
              </span>
            </div>

            {/* 5 Numerical Sliders */}
            <div className="space-y-4">
              <SliderInput
                config={SLIDER_DEFAULTS.foodConsumption}
                value={inputs.foodConsumption}
                onChange={(val) => handleSliderChange('foodConsumption', val)}
                lang={lang}
              />

              <SliderInput
                config={SLIDER_DEFAULTS.milkProduction}
                value={inputs.milkProduction}
                onChange={(val) => handleSliderChange('milkProduction', val)}
                lang={lang}
              />

              <SliderInput
                config={SLIDER_DEFAULTS.dungOutput}
                value={inputs.dungOutput}
                onChange={(val) => handleSliderChange('dungOutput', val)}
                lang={lang}
              />

              <SliderInput
                config={SLIDER_DEFAULTS.hornLength}
                value={inputs.hornLength}
                onChange={(val) => handleSliderChange('hornLength', val)}
                lang={lang}
              />

              <SliderInput
                config={SLIDER_DEFAULTS.propertyDamage}
                value={inputs.propertyDamage}
                onChange={(val) => handleSliderChange('propertyDamage', val)}
                lang={lang}
              />
            </div>

            {/* Live Input Summary Card */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 shadow-inner">
              <h3 className="text-sm font-black text-amber-400 uppercase tracking-wider mb-3 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                <span>🐃 Buffalo Profile Live Summary</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">തീറ്റ ഉപഭോഗം</span>
                  <span className="font-bold text-amber-300">{inputs.foodConsumption} kg/day</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">പാലുൽപ്പാദനം</span>
                  <span className="font-bold text-amber-300">{inputs.milkProduction} L/day</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">ചാണക അളവ്</span>
                  <span className="font-bold text-amber-300">{inputs.dungOutput} kg/day</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">കൊമ്പിന്റെ നീളം</span>
                  <span className="font-bold text-amber-300">{inputs.hornLength} inches</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px]">സ്വത്ത് നാശനഷ്ടം</span>
                  <span className="font-bold text-amber-300">{inputs.propertyDamage} pts</span>
                </div>
              </div>
            </div>

            {/* Submit CTA Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-5 px-6 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-xl border-2 border-amber-300 flex items-center justify-center space-x-3 transform hover:-translate-y-0.5 active:scale-98 transition-all duration-200"
              >
                <Play className="w-6 h-6 fill-current text-amber-200" />
                <span>{lang === 'ml' ? 'പാർട്ടി പ്രവചിക്കുക' : 'PREDICT PARTY NOW'}</span>
              </button>
            </div>

          </form>

        </div>

      </main>

    </div>
  );
}
