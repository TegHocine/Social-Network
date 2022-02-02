import React, { useEffect, useState } from 'react';

const TimeStamp = ({ timeStamp }) => {
  const [time, setTime] = useState(0);

  const timeSince = () => {
    const date = new Date(timeStamp);
    // using getTime to get the time by milliseconds so we can calculate the difference between the 2 dates
    // get the current date by milliseconds
    const currentDate = new Date();
    // calculate the difference and converting milliseconds to seconds
    const secondsPast = Math.abs(
      (currentDate.getTime() - date.getTime()) / 1000
    ).toFixed(0);
    if (secondsPast < 60) {
      return secondsPast + 's';
    }
    if (secondsPast < 3600) {
      return Math.floor(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
      return Math.floor(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
      let day = date.getDate();
      let month = date
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(' ', '');
      let year =
        date.getFullYear() === currentDate.getFullYear()
          ? ''
          : ' ' + date.getFullYear();

      return `${day} ${month}${year}`;
    }
  };

  // using useEffect hook to call the function that calculate the time passed on component render
  useEffect(() => {
    setTime(timeSince());
    //eslint-disable-next-line
  }, []);

  return <span className='text-gray-600 dark:text-gray-400'> - {time}</span>;
};

export default TimeStamp;
