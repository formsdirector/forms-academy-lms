import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Book, CheckCircle, Award, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const { profile } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await supabase
        .from('courses')
        .select('*')
        .eq('track', 'FFC')
        .order('id');
      if (data) setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-2">Administrator Dashboard</h2>
        <h1 className="text-3xl font-bold text-gray-900 font-playfair">Welcome back, {profile?.username}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Book, label: 'Modules Enrolled', value: '0' },
          { icon: CheckCircle, label: 'Lessons Completed', value: '0' },
          { icon: Award, label: 'Credentials Earned', value: '0' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 border border-gray-100 rounded-xl">
            <stat.icon className="w-5 h-5 text-gray-300 mb-6" />
            <p className="text-4xl font-bold text-gray-900 font-playfair mb-1">{stat.value}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-montserrat">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 flex justify-between items-end">
        <h2 className="text-xl font-bold text-gray-900 font-playfair">Foundation Modules</h2>
        <Link to="/curriculum" className="text-xs font-semibold text-gray-400 hover:text-gray-600 uppercase tracking-widest font-montserrat border-b border-gray-200 pb-1">View all</Link>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <Link 
            key={course.id} 
            to={`/curriculum/${course.id}`}
            className="group block bg-white p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                  <Book className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-playfair group-hover:text-gray-900">{course.title}</h3>
                  <p className="text-[11px] text-gray-400 font-montserrat mt-0.5">{course.total_lessons} lessons</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
