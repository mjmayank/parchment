import './event.css';
import { useEffect, useState } from 'react';

function Clock(props) {
  const [ minutes, setMinutes ] = useState('0');
  const [ seconds, setSeconds ] = useState('0');
  const [ deadline, setDeadline ] = useState(new Date(Date.parse(new Date()) + 15 * 60 * 1000));

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    
    return {
      total,
      minutes,
      seconds
    };
  }
  
  useEffect(() => {
    function updateClock() {
      const t = getTimeRemaining(deadline);

      setMinutes(('0' + t.minutes).slice(-2));
      setSeconds(('0' + t.seconds).slice(-2));

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  })

  return (
    <div className="clock-container">
      <div className="clock-digit clock-minutes">{ minutes }</div>
      <div className="clock-digit clock-seconds">{ seconds }</div>
    </div>
  );
}

export default Clock;