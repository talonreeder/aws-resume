import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>

        {/* Hamburger Icon */}
        <button
          className="text-white fixed top-4 right-4 z-30 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="text-2xl">&#x2715;</span> // Close icon (X)
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0">
            <li><a href="#about" className="hover:text-yellow-300 transition duration-300">About</a></li>
            <li><a href="#resume" className="hover:text-yellow-300 transition duration-300">Resume</a></li>
            <li><a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a></li>
            <li><a href="#blog" className="hover:text-yellow-300 transition duration-300">Blog</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
          </ul>
        </nav>

        {/* Overlay */}
        {isOpen && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
}

export default Header;
