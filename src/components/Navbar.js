import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex justify-center space-x-8 py-4">
        <li className="hover:text-green-400 cursor-pointer">Главная</li>
        <li className="hover:text-green-400 cursor-pointer">Каталог</li>
        <li className="hover:text-green-400 cursor-pointer">О нас</li>
        <li className="hover:text-green-400 cursor-pointer">Контакты</li>
      </ul>
    </nav>
  );
};

export default Navbar;
