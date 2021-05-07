import './emoji.css';
import { useState } from 'react';

function Emoji(props) {
  const [ count, setCount ] = useState(props.count);

  return (
    <button className="Emoji" onClick={ () => setCount(count + 1) }>
      <span className="emoji-icon">👍</span>
      <span className="emoji-count">{count}</span>
    </button>
  );
}

export default Emoji;