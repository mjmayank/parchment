import './discussion.css';
import { useState } from 'react';
import Avatar1 from './Slice_1.png';

function Emoji(props) {
  const [ isReplying, setIsReplying ] = useState(false);

  return (
    <div className="discussion">
      <div className="question">{ props.text }</div>
      <div><a onClick={ () => setIsReplying(true) } className="reply-button">Reply</a></div>
      {
        isReplying &&
        <div className="reply">
          <div className="reply-flex">
            <div className="author-header">
              <img src={ Avatar1 } />
              <div className="author-name">Mayank</div>
            </div>
            <input contentEditable autoFocus className="doc-block reply-input"/>
          </div>
          <a href="#" className="reply-button">Reply</a>
        </div>
      }
      <div className="reply">
        <div className="reply-flex">
          <div className="author-header">
            <img src={ Avatar1 } />
            <div className="author-name">Mayank</div>
          </div>
          <div contentEditable className=" doc-block reply-input">I think just wait a week, I bet they'll be over it really fast</div>
        </div>
        <a href="#" className="reply-button">Reply</a>
      </div>
    </div>
  );
}

export default Emoji;