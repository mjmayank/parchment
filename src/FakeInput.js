import { useState } from 'react';

function FakeInput(props) {
  const [ isSlash, setIsSlash ] = useState(false);

  const updateDocument = value => {
    if (value === '/') {
      setIsSlash(true);
    } else {
      setIsSlash(false);
    }
    props.updateDocument(value)
  }

  return (
    <div className="fake-input-container">
      <input
        value={ props.inputValue }
        className="fake-input"
        onChange={ e => updateDocument(e.target.value) }
        onKeyUp={ e => props.onEnterPressed(e.key) }
      />
      {
        isSlash &&
        <div className="input-dropdown">
          <div className="dropdown-item">/h1 (H1)</div>
          <div className="dropdown-item">/h2 (H2)</div>
          <div className="dropdown-item">/emoji (Emoji)</div>
          <div className="dropdown-item">/discussion (Discussion)</div>
          <div className="dropdown-item">/signoff (Signoff)</div>
          <div className="dropdown-item">/request (Request)</div>
          <div className="dropdown-item">/check (Checkbox)</div>
        </div>
      }
    </div>
  );
}

export default FakeInput;