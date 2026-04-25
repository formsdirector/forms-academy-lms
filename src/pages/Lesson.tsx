import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ChevronLeft, CheckCircle } from 'lucide-react';

const Lesson = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState<any>(null);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: lessonData } = await supabase.from('lessons').select('*').eq('id', id).single();
      if (lessonData) {
        setLesson(lessonData);
        const { data: courseData } = await supabase.from('courses').select('*').eq('id', lessonData.course_id).single();
        if (courseData) setCourse(courseData);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to={`/curriculum/${lesson.course_id}`} className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-gray-600 uppercase tracking-widest font-montserrat mb-8">
        <ChevronLeft className="w-3 h-3 mr-1" /> Back to Module
      </Link>

      <div className="mb-12">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-montserrat">{course?.title}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 font-playfair mb-8">{lesson.title}</h1>
        
        <div className="prose prose-gray max-w-none font-montserrat text-gray-600 leading-relaxed space-y-6">
          {lesson.content?.split('\n\n').map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 font-montserrat uppercase tracking-widest transition-all">
          Mark as Complete
        </button>
      </div>
    </div>
  );
};

export default Lesson;
