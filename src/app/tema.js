import React, { useState, useEffect } from 'react';

const Tema = () => {
  const [theme, setTheme] = useState('light'); // Estado para el tema actual

  // Función para cambiar el tema
  const cambiarTema = () => {
    const nuevoTema = theme === 'light' ? 'dark' : 'light';
    setTheme(nuevoTema);
    document.documentElement.setAttribute('data-theme', nuevoTema); // Cambiar el tema en el HTML
  };

  useEffect(() => {
    // Al cargar la página, verifica si ya se estableció un tema preferido en localStorage
    const temaPreferido = localStorage.getItem('tema-preferido');
    if (temaPreferido) {
      setTheme(temaPreferido);
      document.documentElement.setAttribute('data-theme', temaPreferido);
    }
  }, []);

  useEffect(() => {
    // Cuando el tema cambia, actualiza el valor en localStorage
    localStorage.setItem('tema-preferido', theme);
  }, [theme]);

  return (
    <button
      className="bg-transparent px-3 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
      onClick={cambiarTema}
    >
      <div className="pointer-events-none">
        <div className="inline-block w-[24px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block h-6 w-6"
          >
            {/* Código SVG del ícono de tema */}
          </svg>
        </div>
        <span data-theme-name={theme === 'light' ? 'Light' : 'Dark'}>
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>
      </div>
    </button>
  );
};