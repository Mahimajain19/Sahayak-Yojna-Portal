import React from 'react';

type View = 'landing' | 'schemes' | 'admin';

interface HeaderProps {
  setView: (view: View) => void;
  currentView: View;
}

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
      isActive
        ? 'bg-brand-primary text-white'
        : 'text-slate-600 hover:bg-blue-50 hover:text-brand-primary'
    }`}
  >
    {label}
  </button>
);

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-slate-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setView('landing')} className="flex-shrink-0 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-xl font-bold text-slate-900">Sahayak Yojna</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink label="Home" isActive={currentView === 'landing'} onClick={() => setView('landing')} />
              <NavLink label="Find Schemes" isActive={currentView === 'schemes'} onClick={() => setView('schemes')} />
              <NavLink label="Official Login" isActive={currentView === 'admin'} onClick={() => setView('admin')} />
            </div>
          </div>
          <div className="md:hidden">
             {/* Mobile menu button can be added here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;