import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-slate-100 p-4 rounded-lg text-center">
    <p className="text-3xl font-bold text-brand-primary">{value}</p>
    <p className="text-sm text-slate-500">{label}</p>
  </div>
);

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Empowering Citizens Through <span className="text-brand-primary">Accessible Schemes</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Your one-stop destination to discover, understand, and apply for government schemes that you are eligible for. Let's build a better future, together.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={onExplore}
                className="inline-block bg-brand-primary text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
              >
                Explore Schemes Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-xl shadow-xl bg-slate-100 flex items-center justify-center aspect-[3/2] w-full">
              <svg className="w-24 h-24 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <StatCard value="1,200+" label="Schemes Available" />
              <StatCard value="10M+" label="Beneficiaries" />
              <StatCard value="28" label="States Covered" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;