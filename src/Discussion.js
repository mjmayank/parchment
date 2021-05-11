import './discussion.css';
import { useState } from 'react';
import Avatar1 from './Slice_1.png';

function Emoji(props) {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <div className="discussion">
      <div className="question">{ props.text }</div>
      <div><a href="#" className="reply-button">Reply</a></div>
      <div className="reply-box-div">
        <textarea className="reply-box"></textarea>
        <button className="submit-button">Submit</button>
      </div>
      <div className="reply">
        <div className="author-header">
          <img src={ Avatar1 } />
          <div className="author-name">Mayank</div>
        </div>
        <div>I think just wait a week, I bet they'll be over it really fast</div>
        <a href="#" className="reply-button">Reply</a>
      </div>
    </div>
  );
}

export default Emoji;