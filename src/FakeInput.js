import { useState } from 'react';

function FakeInput(props) {
  console.log('input', props);
  const [ isSlash, setIsSlash ] = useState(false);

  const updateDocument = value => {
    if (value === '/') {
      setIsSlash(true);
    } else {
      setIsSlash(false);
    }
    console.log(value)
    props.updateDocument(value)
  }

  return (
    <div className="fake-input-container">
      <input
        value={ props.value }
        className="fake-input"
        onChange={ e => updateDocument(e.target.value) }
        onKeyUp={ e => props.onEnterPressed(e.key) }
      />
      {
        isSlash &&
        <div className="input-dropdown">
          <div className="dropdown-item" onClick={ () => updateDocument('/h1') }>/h1 (H1)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/h2') }>/h2 (H2)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/emoji') }>/emoji (Emoji)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/discussion') }>/discussion (Discussion)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/signoff') }>/signoff (Signoff)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/request') }>/request (Request)</div>
          <div className="dropdown-item" onClick={ () => updateDocument('/check') }>/check (Checkbox)</div>
        </div>
      }
    </div>
  );
}

export default FakeInput;