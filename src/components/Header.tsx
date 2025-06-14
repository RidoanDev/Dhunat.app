
import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add global search functionality here
    }
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold text-gray-900">Dhunat.App</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-xs text-gray-600 hidden sm:block">স্থানীয় সেবা</div>
          
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Search size={18} className="text-gray-600" />
          </button>
          
          <button
            onClick={handleNotificationClick}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors relative"
          >
            <Bell size={18} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <HamburgerMenu />
        </div>
      </div>
      
      {showSearch && (
        <div className="px-4 pb-3 border-t border-gray-100">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="সব সেবায় খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              খুঁজুন
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
