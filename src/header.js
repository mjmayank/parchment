import { useState } from 'react';
import './header.css'
import caret from './left-caret.png'

function Header(props) {
  const [title, setTitle] = useState("Follower Notifs")
  return (
    <div className="header-container">
      <div><img className="caret" src={caret} alt="caret"/></div>
      <div className="title-container">
        <input value={title} onChange={ e => setTitle(e.value) } className="title" />
        <div>
          <div className="tag">Specs</div>
          <div className="tag">Growth</div>
          <div className="tag">Pending Signoff</div>
        </div>
      </div>
      <div className="right-side">
        <div className="signoff-info">
          <div className="signoff-date">
            Sign off requested by 5/12/2021
          </div>
          <a href="#signoff" className="jump-to-signoff">
            Jump to signoff
          </a>
        </div>
        <div className="invite-button">
          Invite
        </div>
      </div>
    </div>
  );
}

export default Header;