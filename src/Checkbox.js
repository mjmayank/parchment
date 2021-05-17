import './checkbox.css';
import CheckboxBG from './checkbox-bg.png';
import { useState } from 'react';
import debounce from 'lodash.debounce'

function Emoji(props) {
  const [ isChecked, setIsChecked ] = useState(false);
  const [ isEmpty, setIsEmpty ] = useState(true);
  const [ isSynced, setIsSynced ] = useState(false);



  return (
    <div>
      {
        isChecked
        ? <button style={{ backgroundImage: `url(${CheckboxBG})` }} className="checkbox checkbox-on" onClick={ () => setIsChecked(!isChecked) }></button>
        : <button className="checkbox checkbox-off" onClick={ () => setIsChecked(!isChecked) }></button>
      }
      <span
        contentEditable="true"
        onInput={ () => {
          setIsEmpty(false);
          debounce(() => {
            setIsSynced(true);
            setTimeout(() => setIsSynced(false), 5000)
          }, 500)()
        } }
        suppressContentEditableWarning={true}
        className={ `checkbox-text doc-block ${ isEmpty ? 'empty' : ''}` }
      >
          {props.text}
      </span>
      {
        isSynced && <a href="#" className="helper-text asana-helper">Created an Asana task!</a>
      }
    </div>
  );
}

export default Emoji;