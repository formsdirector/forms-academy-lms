import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Directory = () => {
  const [coaches, setCoaches] = useState<any[]>([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      const { data } = await supabase.from('users').select('*').order('username');
      if (data) setCoaches(data);
    };
    fetchCoaches();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-2">Directory</h2>
        <h1 className="text-3xl font-bold text-gray-900 font-playfair">Credentialed Coaches</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className="p-6 bg-white border border-gray-100 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 font-playfair">{coach.username}</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-montserrat mt-1">{coach.role}</p>
            <p className="text-sm text-gray-500 font-montserrat mt-4">{coach.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
