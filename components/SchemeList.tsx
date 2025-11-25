import React from 'react';
import type { Scheme } from '../types';
import SchemeCard from './SchemeCard';

interface SchemeListProps {
  schemes: Scheme[];
  isLoading: boolean;
  error: string | null;
  onSelectScheme: (scheme: Scheme) => void;
}

const SchemeList: React.FC<SchemeListProps> = ({ schemes, isLoading, error, onSelectScheme }) => {
  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-slate-600">Finding relevant schemes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700 font-semibold">{error}</p>
      </div>
    );
  }

  if (!schemes.length) {
    return (
      <div className="text-center py-10 bg-slate-100 rounded-lg">
        <p className="text-slate-500">No schemes found. Try adjusting your filters or search again.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {schemes.map((scheme, index) => (
        <SchemeCard key={scheme.id || index} scheme={scheme} onSelectScheme={onSelectScheme} />
      ))}
    </div>
  );
};

export default SchemeList;