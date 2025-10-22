import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hs-dark border-t border-hs-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Donate Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-bold text-sm">
            Donate
          </button>
          
          {/* Discord */}
          <a href="#" className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300">
            <span className="text-sm font-bold">Discord</span>
          </a>
          
          {/* Twitch */}
          <a href="#" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
            <span className="text-sm font-bold">twitch</span>
          </a>
          
          {/* Patreon */}
          <a href="#" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded text-sm font-bold hover:opacity-90">
            PATREON
          </a>
          
          {/* Follow */}
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
            Follow
          </button>
        </div>
        
        {/* Privacy Policy */}
        <div className="text-center mt-4">
          <a href="#" className="text-hs-light-gray hover:text-white text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;