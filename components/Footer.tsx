import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sahayak Yojna Portal. All rights reserved.</p>
          <p className="mt-1">A conceptual portal for discovering government schemes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;