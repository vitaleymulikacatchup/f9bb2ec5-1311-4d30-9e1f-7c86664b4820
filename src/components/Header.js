import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Leaderboards', hasDropdown: true },
    { name: 'Decks', hasDropdown: true },
    { name: 'Meta', hasDropdown: true },
    { name: 'Matchups (WIP)', hasDropdown: false },
    { name: 'Streamer Decks', hasDropdown: false },
    { name: 'Esports', hasDropdown: false },
    { name: 'Utilities', hasDropdown: true },
    { name: 'Misc', hasDropdown: true }
  ];

  return (
    <header className="bg-hs-dark border-b border-hs-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-hs-blue rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">HS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="nav-dropdown">
                <button className="nav-item flex items-center">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-hs-light-gray hidden md:block">
              No ads & more
            </span>
            <a 
              href="#" 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded text-sm font-bold hover:opacity-90"
            >
              PATREON
            </a>
            <button className="nav-item">
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-hs-border">
            {navItems.map((item, index) => (
              <button key={index} className="block nav-item w-full text-left">
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;