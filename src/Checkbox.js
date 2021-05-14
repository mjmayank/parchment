import './emoji.css';
import CheckboxBG from './checkbox-bg.png';
import { useState } from 'react';

function Emoji(props) {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <div>
      {
        isChecked
        ? <button style={{ backgroundImage: `url(${CheckboxBG})` }} className="checkbox checkbox-on" onClick={ () => setIsChecked(!isChecked) }></button>
        : <button className="checkbox checkbox-off" onClick={ () => setIsChecked(!isChecked) }></button>
      }
      <span contentEditable="true" className="checkbox-text doc-block">{props.text}</span>
    </div>
  );
}

export default Emoji;