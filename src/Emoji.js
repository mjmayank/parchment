import './emoji.css';
import AddReaction from './add-reaction.png';
import Avatar1 from './Slice_1.png';
import Avatar2 from './Slice_2.png';
import Avatar3 from './Slice_3.png';
import Avatar4 from './Slice_4.png';
import Avatar5 from './Slice_5.png';
import { useState } from 'react';

function Emoji(props) {
  const [ count, setCount ] = useState(props.count);

  let AVATAR_FILES = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
  ];
  let avatars = [];
  for (var i=0; i<count; i++) {
    avatars.push(<span className="emoji-count"><img src={AVATAR_FILES[i]}/></span>)
  }
  return (
    <button className="Emoji" onClick={ () => setCount(count + 1) }>
      { count > 0
        ? <span className="emoji-icon">{props.emoji}</span>
        : <img className="emoji-icon" src={AddReaction} />
      }
      { avatars }
    </button>
  );
}

export default Emoji;