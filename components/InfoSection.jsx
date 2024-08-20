import React from 'react';

export function InfoSection() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <HoverCard
        title="About Us"
        text="We are the premier Islamic Mandarin preschool, committed to strengthening your child's fundamentals before they confidently enter primary school. Our dedicated team is passionate about teaching and nurturing your child's growth."
      />
      <HoverCard
        title="Our Mission"
        text="Our mission is to nurture young minds in a safe, caring and culturally enriching environment where Islamic values and Mandarin language skills are developed."
      />
      <HoverCard
        title="Our Vision"
        text="Our vision is to cultivate a generation of compassionate, multilingual, and confident young learners who are grounded in Islamic values, fluent in Mandarin, and equipped to thrive in a diverse and interconnected world."
      />
    </div>
  );
}

export function HoverCard({ title, text }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="group relative overflow-hidden rounded-lg shadow-lg bg-orange-600 p-4 transition-transform duration-300 transform hover:scale-105">
        <div className="text-center text-white">
          <h3
            className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl font-bold text-white transition-all duration-300 group-hover:text-sm sm:group-hover:top-4 group-hover:top-2 group-hover:bottom-auto  group-hover:translate-y-0 group-hover:translate-x-0"
          >
            {title}
          </h3>

          
        </div>
        <div className="mt-4 sm:mt-6 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
