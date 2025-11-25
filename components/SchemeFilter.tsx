import React, { useState } from 'react';
import type { FilterCriteria } from '../types';
import { INDIAN_STATES, GENDERS, CASTES } from '../constants';

interface SchemeFilterProps {
  onSearch: (filters: FilterCriteria) => void;
  isLoading: boolean;
}

const SchemeFilter: React.FC<SchemeFilterProps> = ({ onSearch, isLoading }) => {
  const [filters, setFilters] = useState<FilterCriteria>({
    state: INDIAN_STATES[0],
    gender: 'Any',
    caste: 'Any',
    age: 25,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Find the Right Scheme for You</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        
        <div className="flex flex-col">
          <label htmlFor="state" className="text-sm font-medium text-slate-600 mb-1">State</label>
          <select id="state" name="state" value={filters.state} onChange={handleChange} className="bg-slate-50 border border-slate-300 text-slate-900 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary focus:bg-white">
            {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender" className="text-sm font-medium text-slate-600 mb-1">Gender</label>
          <select id="gender" name="gender" value={filters.gender} onChange={handleChange} className="bg-slate-50 border border-slate-300 text-slate-900 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary focus:bg-white">
            {GENDERS.map(gender => <option key={gender} value={gender}>{gender}</option>)}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="caste" className="text-sm font-medium text-slate-600 mb-1">Caste</label>
          <select id="caste" name="caste" value={filters.caste} onChange={handleChange} className="bg-slate-50 border border-slate-300 text-slate-900 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary focus:bg-white">
            {CASTES.map(caste => <option key={caste} value={caste}>{caste}</option>)}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-medium text-slate-600 mb-1">Age</label>
          <input type="number" id="age" name="age" value={filters.age} onChange={handleChange} min="1" max="120" className="bg-slate-50 border border-slate-300 text-slate-900 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary focus:bg-white" />
        </div>

        <button type="submit" disabled={isLoading} className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center">
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SchemeFilter;