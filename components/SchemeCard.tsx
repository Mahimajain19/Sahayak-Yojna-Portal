import React from 'react';
import type { Scheme } from '../types';

interface SchemeCardProps {
  scheme: Scheme;
  onSelectScheme: (scheme: Scheme) => void;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onSelectScheme }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-transform transform hover:-translate-y-1 duration-300">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-brand-primary mb-2">{scheme.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {scheme.description.length > 150 ? `${scheme.description.substring(0, 150)}...` : scheme.description}
        </p>
      </div>
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <button
          onClick={() => onSelectScheme(scheme)}
          className="w-full bg-brand-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;