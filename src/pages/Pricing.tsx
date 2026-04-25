import React from 'react';

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-2">Pricing</h2>
        <h1 className="text-4xl font-bold text-gray-900 font-playfair">Certification Investment</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Foundation', price: '$299', features: ['FFC Certification', 'All 7 Modules', 'Community Access'] },
          { title: 'Certified', price: '$599', features: ['FCC Certification', 'Advanced Theory', 'Practical Assessment'] },
          { title: 'Master', price: 'Contact', features: ['Master Distinction', 'Elite Mentorship', 'Global Directory'] }
        ].map((plan, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-xl text-center">
            <h3 className="text-lg font-bold text-gray-900 font-playfair mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold text-gray-900 font-playfair mb-8">{plan.price}</p>
            <ul className="space-y-4 mb-8 text-sm text-gray-500 font-montserrat">
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-montserrat uppercase tracking-widest text-xs font-bold">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
