import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

const DarkMode = () => {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    enabled
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-gray-800' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}>
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } flex transform rounded-full text-base`}>
        {enabled ? (
          <i className='fas fa-moon'></i>
        ) : (
          <i className='fas fa-sun'></i>
        )}
      </span>
    </Switch>
  );
};

export default DarkMode;
