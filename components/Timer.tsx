'use client';

import React, { useEffect, useState } from 'react';

function Timer(props: {
  textSize?: string;
  pSize?: number;
  gridCols?: number;
}) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'August, 20, 2024';

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${props.gridCols || 4}, minmax(0, 1fr)`,
      }}
      className={`grid gap-y-2 items-center gap-x-4 mx-auto justify-center my-3`}
    >
      <div>
        <div
          className={`bg-emerald-600 px-${
            props.pSize || 5
          } text-white text-center text-${
            props.textSize || '3xl'
          } font-semibold rounded-sm`}
        >
          {days}
        </div>
        <p className="uppercase text-center font-semibold mt-1">days</p>
      </div>
      <div>
        <div
          className={`bg-emerald-600 px-${
            props.pSize || 5
          } text-white text-center text-${
            props.textSize || '3xl'
          } font-semibold rounded-sm`}
        >
          {hours}
        </div>
        <p className="uppercase text-center font-semibold mt-1">hours</p>
      </div>
      <div>
        <div
          className={`bg-emerald-600 px-${
            props.pSize || 5
          } text-white text-center text-${
            props.textSize || '3xl'
          } font-semibold rounded-sm`}
        >
          {minutes}
        </div>
        <p className="uppercase text-center font-semibold mt-1">mins</p>
      </div>
      <div>
        <div
          className={`bg-emerald-600 px-${
            props.pSize || 5
          } text-white text-center text-${
            props.textSize || '3xl'
          } font-semibold rounded-sm`}
        >
          {seconds}
        </div>
        <p className="uppercase text-center font-semibold mt-1">secs</p>
      </div>
    </div>
  );
}

export default Timer;
