import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LogOut, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { session, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-gray-900 font-playfair">FORMS ACADEMY</span>
              {session && <span className="ml-2 text-[10px] uppercase tracking-widest text-gray-400 font-montserrat hidden sm:block">COACH EDUCATION</span>}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {session ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Dashboard</Link>
                <Link to="/curriculum" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Curriculum</Link>
                <Link to="/directory" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Directory</Link>
                {profile?.role === 'admin' && (
                  <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Admin</Link>
                )}
                <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-100">
                  <span className="text-sm font-medium text-gray-900 font-montserrat">{profile?.username || 'Coach'}</span>
                  <button onClick={handleSignOut} className="text-gray-400 hover:text-gray-600">
                    <LogOut size={18} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/curriculum" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Curriculum</Link>
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 font-montserrat uppercase tracking-wider">Sign In</Link>
                <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 font-montserrat uppercase tracking-wider">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
