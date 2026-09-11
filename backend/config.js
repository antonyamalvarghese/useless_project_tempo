// Master Configuration for Buffalo Political Party Predictor

const SLIDER_CONFIG = {
  milkProduction: {
    key: "milkProduction",
    modelFeature: "milk_production_litre",
    labelMl: "പാലുൽപ്പാദനം",
    labelEn: "Milk Production",
    unit: "liters/day",
    min: 35,
    max: 70,
    default: 45,
    step: 1
  },
  dungOutput: {
    key: "dungOutput",
    modelFeature: "dung_kg",
    labelMl: "ചാണക അളവ്",
    labelEn: "Dung Output",
    unit: "kg/day",
    min: 28,
    max: 56,
    default: 40,
    step: 1
  },
  foodConsumption: {
    key: "foodConsumption",
    modelFeature: "food_consumption_kg",
    labelMl: "തീറ്റ ഉപഭോഗം",
    labelEn: "Food Consumption",
    unit: "kg/day",
    min: 6,
    max: 9,
    default: 7.5,
    step: 0.1
  },
  hornLength: {
    key: "hornLength",
    modelFeature: "horn_length_cm",
    labelMl: "കൊമ്പിന്റെ നീളം",
    labelEn: "Horn Length",
    unit: "cm",
    min: 10,
    max: 30,
    default: 20,
    step: 1
  },
  propertyDamage: {
    key: "propertyDamage",
    modelFeature: "property_damage_cost_inr",
    labelMl: "സ്വത്ത് നാശനഷ്ടം",
    labelEn: "Property Damage Score",
    unit: "thousands (₹)",
    min: 5,
    max: 7,
    default: 6,
    step: 0.1
  }
};

const PARTIES = {
  "Akhileindya Eruma Sangham": {
    id: "sangham",
    classKey: "Akhileindya Eruma Sangham",
    nameMl: "അഖിലേന്ത്യാ എരുമ സംഘം",
    nameEn: "All India Buffalo Association",
    sloganMl: "എരുമ ഒന്നിച്ചാൽ, കുളം നിറയും",
    sloganEn: "When buffaloes unite, the pond fills up!",
    descriptionMl: "എരുമകളുടെ ഐക്യത്തിനും കുളം സംരക്ഷണത്തിനും വേണ്ടി പോരാടുന്ന പ്രമുഖ സംഘടന.",
    descriptionEn: "Leading organization fighting for buffalo unity and pond conservation.",
    themeColor: "#ea580c",
    badgeIcon: "Shield",
    stats: [
      { labelMl: "കുളം പ്രിയം (Pond Preference)", value: "98%" },
      { labelMl: "ഐക്യ ശേഷി (Unity Power)", value: "95%" },
      { labelMl: "ചാണക വിതരണം (Dung Distribution)", value: "സുഗമം (Smooth)" },
      { labelMl: "മേച്ചിൽ നയം (Grazing Policy)", value: "കൂട്ടായ മേയൽ (Collective)" }
    ],
    explanationTemplateMl: "ഉയർന്ന തീറ്റ ഉപഭോഗവും സമതുലിതമായ ചാണക ഉൽപ്പാദനവും ഈ എരുമയെ കുളത്തിലും കവലയിലും ഒരുപോലെ നേതാവാക്കുന്നു! അഖിലേന്ത്യാ എരുമ സംഘത്തിന്റെ യഥാർത്ഥ കരുത്തനാണ് ഇത്."
  },
  "Eruma Pullu Avakasha Munnani": {
    id: "pullu_munnani",
    classKey: "Eruma Pullu Avakasha Munnani",
    nameMl: "എരുമ പുല്ല് അവകാശ മുന്നണി",
    nameEn: "Buffalo Grass Rights Front",
    sloganMl: "പുല്ല് ഞങ്ങളുടെ അവകാശം, മേയൽ ഞങ്ങളുടെ സ്വാതന്ത്ര്യം!",
    sloganEn: "Grass is our right, grazing is our freedom!",
    descriptionMl: "എല്ലാ വയലുകളിലും സമൃദ്ധമായ പച്ചപ്പുല്ല് ഉറപ്പാക്കാൻ രംഗത്തിറങ്ങിയ വിപ്ലവ മുന്നണി.",
    descriptionEn: "Revolutionary front fighting to ensure lush green grass in all fields.",
    themeColor: "#16a34a",
    badgeIcon: "Sprout",
    stats: [
      { labelMl: "പച്ചപ്പുല്ല് കമ്പം (Green Grass Preference)", value: "100%" },
      { labelMl: "മേയൽ വേഗം (Grazing Speed)", value: "4.5 km/hr" },
      { labelMl: "വേലി നയം (Fence Policy)", value: "പുല്ലിനായി എന്തും (Whatever for Grass)" },
      { labelMl: "പാലുൽപ്പാദനം (Milk Yield)", value: "ഉയർന്ന ഗുണമേന്മ (High Quality)" }
    ],
    explanationTemplateMl: "വലിയ അളവിലുള്ള തീറ്റ ഉപഭോഗവും ഉയർന്ന പാലുൽപ്പാദനവും ഈ എരുമയുടെ പുല്ലിനോടുള്ള അടങ്ങാത്ത പ്രേമത്തെ വ്യക്തമാക്കുന്നു. പുല്ല് അവകാശ മുന്നണിയുടെ നട്ടെല്ലാണ് ഇത്!"
  },
  "Deshiya Yuva Eruma Federation": {
    id: "yuva_federation",
    classKey: "Deshiya Yuva Eruma Federation",
    nameMl: "ദേശീയ യുവ എരുമ ഫെഡറേഷൻ",
    nameEn: "National Youth Buffalo Federation",
    sloganMl: "ഇന്നത്തെ കിടാവ്, നാളത്തെ എരുമ നേതാവ്!",
    sloganEn: "Today's calf, tomorrow's buffalo leader!",
    descriptionMl: "യുവ കിടാക്കളുടെ ഭാവി സുരക്ഷിതമാക്കാനും ഊർജ്ജസ്വലമായ എരുമ വികസനത്തിനും നേതൃത്വം നൽകുന്ന സംഘടന.",
    descriptionEn: "Leading organization securing the future of young calves and energetic buffalo development.",
    themeColor: "#2563eb",
    badgeIcon: "Zap",
    stats: [
      { labelMl: "യുവ ഊർജ്ജം (Youth Energy)", value: "99%" },
      { labelMl: "സമര വീര്യം (Protest Enthusiasm)", value: "ഉയർന്നത് (High)" },
      { labelMl: "കൊമ്പ് വികാസം (Horn Growth)", value: "ദ്രുതഗതിയിൽ (Fast)" },
      { labelMl: "കിടാവ് സംരക്ഷണം (Calf Care)", value: "പ്രഥമ പരിഗണന (Top Priority)" }
    ],
    explanationTemplateMl: "മിതമായ അളവുകളിലും ഉയർന്ന ഊർജ്ജസ്വലതയിലും നിലകൊള്ളുന്ന ഈ എരുമ യുവ തലമുറയുടെ ആവേശവും മാറ്റത്തിനായുള്ള പോരാട്ട വീര്യവും പ്രതിഫലിപ്പിക്കുന്നു!"
  },
  "Eruma Swathanthrya Munnani": {
    id: "swathanthrya_munnani",
    classKey: "Eruma Swathanthrya Munnani",
    nameMl: "എരുമ സ്വാതന്ത്ര്യ മുന്നണി",
    nameEn: "Buffalo Freedom Front",
    sloganMl: "കയറഴിയട്ടെ, കൊമ്പുയരട്ടെ",
    sloganEn: "Untie the rope, raise the horns!",
    descriptionMl: "വേലികളും കയറുകളും ഇല്ലാത്ത സ്വതന്ത്രമായ എരുമ ജീവിതം ലക്ഷ്യമിടുന്ന മുന്നണി.",
    descriptionEn: "Front aiming for a free buffalo life without fences and ropes.",
    themeColor: "#dc2626",
    badgeIcon: "Unlock",
    stats: [
      { labelMl: "വേലി തകർക്കൽ (Fence Breaking)", value: "99.9%" },
      { labelMl: "കൊമ്പിന്റെ വീര്യം (Horn Strength)", value: "അതിശക്തം (Super Strong)" },
      { labelMl: "കയറഴിയൽ നിരക്ക് (Rope Untying Rate)", value: "സെക്കൻഡുകൾക്കുള്ളിൽ (In Seconds)" },
      { labelMl: "സ്വതന്ത്ര മേയൽ (Free Roam)", value: "അതിരുകളില്ലാതെ (Unbounded)" }
    ],
    explanationTemplateMl: "ഈ എരുമയുടെ ശക്തമായ കൊമ്പുകളും ഉയർന്ന സ്വത്ത് നാശനഷ്ട സ്കോറും ഇതിനെ ഒരു വിപ്ലവാത്മക സ്വാതന്ത്ര്യ പോരാളിയുടെ സ്വഭാവത്തിലേക്ക് നയിക്കുന്നു! കയറഴിയട്ടെ, കൊമ്പുയരട്ടെ!"
  }
};

module.exports = {
  SLIDER_CONFIG,
  PARTIES
};
