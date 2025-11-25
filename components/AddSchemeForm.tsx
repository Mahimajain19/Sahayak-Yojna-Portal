import React, { useState } from 'react';

const AddSchemeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    benefits: '',
    minAge: '',
    maxAge: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    // Here, we just simulate success.
    console.log('Scheme Submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', description: '', benefits: '', minAge: '', maxAge: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md animate-fade-in">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Official Portal</h2>
        <p className="text-slate-500 mb-6">Add a new scheme to the portal.</p>

        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> The new scheme has been added to the portal.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Scheme Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:bg-white focus:ring-brand-primary focus:border-brand-primary" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-600 mb-1">Description</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:bg-white focus:ring-brand-primary focus:border-brand-primary"></textarea>
          </div>
          
          <div>
            <label htmlFor="benefits" className="block text-sm font-medium text-slate-600 mb-1">Benefits</label>
            <textarea name="benefits" id="benefits" value={formData.benefits} onChange={handleChange} required rows={3} className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:bg-white focus:ring-brand-primary focus:border-brand-primary"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="minAge" className="block text-sm font-medium text-slate-600 mb-1">Minimum Age</label>
                <input type="number" name="minAge" id="minAge" value={formData.minAge} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:bg-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="maxAge" className="block text-sm font-medium text-slate-600 mb-1">Maximum Age</label>
                <input type="number" name="maxAge" id="maxAge" value={formData.maxAge} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:bg-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
          </div>

          <div>
            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
              Add Scheme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchemeForm;