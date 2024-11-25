import React from 'react';

const Header = ({ profile }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
      <div className="text-2xl font-bold">Магазин</div>
      <div className="flex items-center space-x-2">
        <img
          src={profile.avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <span className="text-lg">{profile.name}</span>
      </div>
    </header>
  );
};

export default Header;
