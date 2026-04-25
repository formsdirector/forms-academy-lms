import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Book, ChevronRight } from 'lucide-react';

const Curriculum = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await supabase
        .from('courses')
        .select('*')
        .order('id');
      if (data) setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const tracks = {
    FFC: { label: 'Forms Foundation Coach', color: 'text-blue-700', bg: 'bg-blue-50' },
    FCC: { label: 'Forms Certified Coach', color: 'text-purple-700', bg: 'bg-purple-50' },
    COMPANION: { label: 'Companion Modules', color: 'text-emerald-700', bg: 'bg-emerald-50' },
    MASTER: { label: 'Master Coach', color: 'text-amber-700', bg: 'bg-amber-50' }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-2">Curriculum</h2>
        <h1 className="text-3xl font-bold text-gray-900 font-playfair">The Coaching Certification Pathway</h1>
        <p className="mt-4 text-gray-500 font-montserrat max-w-2xl leading-relaxed">
          The complete integrated curriculum. 6 parts, 33 chapters, 151+ lessons.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(tracks).map(([track, info]) => {
          const trackCourses = courses.filter(c => c.track === track);
          if (trackCourses.length === 0) return null;

          return (
            <div key={track}>
              <div className="flex items-center space-x-3 mb-6">
                <h3 className="text-sm font-bold text-gray-900 font-playfair uppercase tracking-wider">{info.label}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${info.bg} ${info.color}`}>
                  {track}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trackCourses.map(course => (
                  <Link 
                    key={course.id} 
                    to={`/curriculum/${course.id}`}
                    className="group block bg-white p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                        <Book className="w-4 h-4 text-gray-400" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 font-playfair mb-2 leading-snug">{course.title}</h4>
                    <p className="text-[11px] text-gray-400 font-montserrat">{course.total_lessons} lessons</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;
