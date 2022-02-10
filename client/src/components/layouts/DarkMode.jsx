import { useState, useLayoutEffect } from 'react';
import { Switch } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === 'dark');

  useLayoutEffect(() => {
    const html = document.documentElement.classList;
    const prevTheme = darkMode ? 'light' : 'dark';
    html.remove(prevTheme);
    const nextTheme = darkMode ? 'dark' : 'light';
    html.add(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${
        darkMode ? 'bg-gray-800' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}>
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } flex transform rounded-full text-base`}>
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </span>
    </Switch>
  );
};

export default DarkMode;
