import { useState } from 'react';

const commands = [
  ['h1', '(H1)'],
  ['h2', '(H1)'],
  ['emoji', '(emoji)'],
  ['discussion', '(Discussion))'],
  ['signoff', '(email (Signoff eg. /signoff mjmayank@gmail.com))'],
  ['request', '(name (Request eg. /signoff Mayank Jain))'],
  ['check', '(Checkbox)'],
  ['github', '(eg. /github https://www.github.com/reddit/design-docs)'],
]

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
      <textarea
        value={ props.value }
        className="fake-input"
        onChange={ e => updateDocument(e.target.value) }
        onKeyUp={ e => props.onEnterPressed(e.key) }
      />
      {
        isSlash &&
        <div className="input-dropdown">
          {
            commands.map(
              command => <div className="dropdown-item" onClick={ () => updateDocument('/'+command[0]) }>/{`${command[0]} ${command[1]}`}</div>
            )
          }
        </div>
      }
    </div>
  );
}

export default FakeInput;