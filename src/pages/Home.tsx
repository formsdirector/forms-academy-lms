import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ArrowRight, BookOpen, Shield, Users, Award } from 'lucide-react';

const Home = () => {
  const { session } = useAuth();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-4">
              The Definitive Coach Education System
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-playfair mb-8 leading-tight">
              The Coaching<br />Certification Pathway
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 font-montserrat mb-10 leading-relaxed">
              A comprehensive certification system grounded in eight years of empirical observation and coaching excellence. Built on neuroscience, motor learning theory, and elite football development principles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/curriculum" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 font-montserrat uppercase tracking-wider transition-all">
                Explore Curriculum
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 font-montserrat uppercase tracking-wider transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900 font-playfair">53+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-montserrat mt-1">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 font-playfair">151+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-montserrat mt-1">Lessons</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 font-playfair">4</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-montserrat mt-1">Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 font-playfair">6</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-montserrat mt-1">Curriculum Parts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-montserrat mb-2">Why Forms Academy</h2>
            <h3 className="text-3xl font-bold text-gray-900 font-playfair">Built on Science, Proven in Practice</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Evidence-Based', desc: 'Every session design grounded in neuroscience and motor learning research.' },
              { icon: Shield, title: 'Structured Pathway', desc: 'Four progressive certifications from Foundation through Master Coach.' },
              { icon: Users, title: 'Community', desc: 'Join a global network of credentialed Forms Academy coaches.' },
              { icon: Award, title: 'Recognized', desc: 'Industry-recognized credentials that demonstrate coaching mastery.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-all">
                <feature.icon className="w-6 h-6 text-gray-400 mb-6" />
                <h4 className="text-lg font-bold text-gray-900 font-playfair mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-montserrat leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
