import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import SchemeFilter from './components/SchemeFilter';
import SchemeList from './components/SchemeList';
import AddSchemeForm from './components/AddSchemeForm';
import SchemeModal from './components/SchemeModal';
import { getSchemes } from './services/geminiService';
import type { Scheme, FilterCriteria } from './types';

type View = 'landing' | 'schemes' | 'admin';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  const handleSearch = useCallback(async (filters: FilterCriteria) => {
    setIsLoading(true);
    setError(null);
    setSchemes([]);
    try {
      const result = await getSchemes(filters);
      setSchemes(result);
    } catch (err) {
      setError('Failed to fetch schemes. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'schemes':
        return (
          <div className="container mx-auto px-4 py-8">
            <SchemeFilter onSearch={handleSearch} isLoading={isLoading} />
            <SchemeList
              schemes={schemes}
              isLoading={isLoading}
              error={error}
              onSelectScheme={setSelectedScheme}
            />
          </div>
        );
      case 'admin':
        return <AddSchemeForm />;
      case 'landing':
      default:
        return (
          <>
            <Hero onExplore={() => setView('schemes')} />
            <About />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-brand-dark">
      <Header setView={setView} currentView={view} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      {selectedScheme && (
        <SchemeModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </div>
  );
}