import './assigned.css';
import EmailIcon from './email-icon.png';
import { useState } from 'react';

function Emoji(props) {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <div className="assigned">
      {
        isChecked
        ? <input autoFocus className="fake-input"/>
        : <button className="input-requested" onClick={ () => setIsChecked(!isChecked) }>
            Input requested from {props.from} <img className="email-icon" src={ EmailIcon } alt="email" />
          </button>
      }
    </div>
  );
}

export default Emoji;