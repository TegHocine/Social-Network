import React, { useEffect, useState } from 'react';

const ProgressBar = ({ textLen }) => {
  const [progress, setProgress] = useState('');
  useEffect(() => {
    const textPercent = (textLen * 100) / 250 / 100;
    const oneMinus = 1 - textPercent;
    const barProgress = oneMinus * 2 * 9 * Math.PI;
    setProgress(barProgress);
  }, [textLen]);
  console.log(progress);
  return (
    <div className='w-6 h-6' style={{ transform: 'rotate(-90deg)' }}>
      <svg
        height='100%'
        style={{ overflow: 'visible' }}
        viewBox='0 0 20 20'
        width='100%'>
        <circle
          cx='50%'
          cy='50%'
          fill='none'
          strokeWidth='2'
          r='9'
          stroke='#38444D'></circle>
        <circle
          cx='50%'
          cy='50%'
          fill='none'
          strokeWidth='2'
          r='9'
          stroke='#00BA7C'
          strokeLinecap='round'
          style={{
            strokeDasharray: `${2 * 9 * Math.PI}px`,
            strokeDashoffset: `${progress}px`,
          }}></circle>
      </svg>
    </div>
  );
};

export default ProgressBar;
