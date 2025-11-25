import React from 'react';
import type { Scheme } from '../types';

interface SchemeModalProps {
  scheme: Scheme;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold text-brand-primary mb-2">{title}</h4>
    <div className="text-slate-600 text-sm space-y-1">{children}</div>
  </div>
);

const SchemeModal: React.FC<SchemeModalProps> = ({ scheme, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sticky top-0 bg-white/90 backdrop-blur-sm z-10 flex justify-between items-center border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">{scheme.name}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <DetailSection title="Description">
            <p>{scheme.description}</p>
          </DetailSection>

          <DetailSection title="Eligibility Criteria">
            <ul className="list-disc list-inside">
              <li><strong>State:</strong> {scheme.eligibility.state}</li>
              <li><strong>Age Range:</strong> {scheme.eligibility.minAge} - {scheme.eligibility.maxAge} years</li>
              <li><strong>Gender:</strong> {scheme.eligibility.gender.join(', ')}</li>
              <li><strong>Caste:</strong> {scheme.eligibility.caste.join(', ')}</li>
            </ul>
          </DetailSection>

          <DetailSection title="Benefits">
            <p>{scheme.benefits}</p>
          </DetailSection>

          <DetailSection title="How to Apply">
            <p>{scheme.howToApply}</p>
          </DetailSection>
        </div>
      </div>
    </div>
  );
};

export default SchemeModal;