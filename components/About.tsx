import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About Sahayak Yojna Portal</h2>
          <p className="mt-4 text-lg leading-6 text-slate-600">
            Simplifying access to government welfare schemes for every citizen.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
             <div className="rounded-lg shadow-xl bg-white flex items-center justify-center aspect-[10/7] w-full max-w-md">
                <svg className="w-24 h-24 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
             </div>
          </div>
          <div className="space-y-6 text-slate-600">
            <p>
              The Sahayak Yojna Portal is an innovative, AI-powered platform designed to bridge the information gap between government schemes and the citizens who need them most. Our mission is to create a transparent, user-friendly, and efficient ecosystem for discovering and accessing welfare programs.
            </p>
            <p>
              Using cutting-edge AI, we provide personalized scheme recommendations based on your unique eligibility criteria, ensuring you find the right support without navigating complex government websites. We believe that technology can empower individuals and communities by making crucial information readily available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;