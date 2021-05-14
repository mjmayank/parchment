import { useState } from 'react';
import Clock from './clock';
import ComponentPicker from './ComponentPicker';

function Event(props) {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="agenda-container">
      { 
        props.data.map(
          item => {return <ComponentPicker key={item.text} line={item}/>}
        )
      }
      {
        isStarted
        ? <Clock/>
        : <button className="invite-button" onClick={ () => setIsStarted(true) }>Start Meeting</button>
      }
    </div>
  );
}

export default Event;