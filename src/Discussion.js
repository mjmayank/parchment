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
              <img src={ Avatar1 } alt="avatar"/>
              <div className="author-name">Mayank</div>
            </div>
            <input autoFocus className="doc-block reply-input"/>
          </div>
          <div className="helper-text">We'll automatically notify people of your reply via email</div>
          <a href="#" className="reply-button">Reply</a>
        </div>
      }
      <div className="reply">
        <div className="reply-flex">
          <div className="author-header">
            <img src={ Avatar1 } alt="avatar"/>
            <div className="author-name">Mayank</div>
          </div>
          <div contentEditable suppressContentEditableWarning={true} className=" doc-block reply-input">I think just wait a week, I bet they'll be over it really fast</div>
        </div>
        <a href="#" className="reply-button">Reply</a>
      </div>
    </div>
  );
}

export default Emoji;