import './assigned.css';
import { useState } from 'react';

function Emoji(props) {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <div>
      {
        isChecked
        ? <input autoFocus className="fake-input"/>
        : <button className="input-requested" onClick={ () => setIsChecked(!isChecked) }>Input requested from {props.from}</button>
      }
    </div>
  );
}

export default Emoji;