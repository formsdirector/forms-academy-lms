import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ChevronLeft, PlayCircle, CheckCircle } from 'lucide-react';

const CourseDetail = () => {
  const { courseId, id } = useParams();
  const actualId = courseId || id;
  const [course, setCourse] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [courseRes, lessonsRes] = await Promise.all([
        supabase.from('courses').select('*').eq('id', actualId).single(),
        supabase.from('lessons').select('*').eq('course_id', actualId).order('order_index')
      ]);
      
      if (courseRes.data) setCourse(courseRes.data);
      if (lessonsRes.data) setLessons(lessonsRes.data);
      setLoading(false);
    };
    fetchData();
  }, [actualId]);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/curriculum" className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-gray-600 uppercase tracking-widest font-montserrat mb-8">
        <ChevronLeft className="w-3 h-3 mr-1" /> Back to Curriculum
      </Link>

      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-montserrat">{course.track}</span>
        <h1 className="text-4xl font-bold text-gray-900 font-playfair mt-2 mb-6">{course.title}</h1>
        <p className="text-gray-500 font-montserrat leading-relaxed">{course.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest font-montserrat mb-6">Lessons</h2>
        {lessons.length > 0 ? (
          lessons.map((lesson, i) => (
            <Link 
              key={lesson.id} 
              to={`/lesson/${lesson.id}`}
              className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold text-gray-300 font-montserrat w-4">{i + 1}</span>
                <h3 className="text-sm font-bold text-gray-900 font-playfair group-hover:text-gray-900">{lesson.title}</h3>
              </div>
              <PlayCircle className="w-5 h-5 text-gray-200 group-hover:text-gray-900 transition-colors" />
            </Link>
          ))
        ) : (
          <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-sm text-gray-400 font-montserrat">No lessons available for this module yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
