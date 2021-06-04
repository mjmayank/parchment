import check from './check.png';
import './signoff.css';
import { useState } from 'react';
import { rootDomain } from './App';

function Signoff(props) {
  const [ signoffTime, setSignoff ] = useState(new Date());
  const [ hasSignedOff, setHasSignedOff ] = useState(false);

  const confirmSignoff = async () => {
    const response = await fetch(
      `${rootDomain}/send/review`
    );
  }

  return (
    <div>
      <a name="signoff"/>
      <button className="Signoff" onClick={ () => { confirmSignoff(); setSignoff(new Date()); setHasSignedOff(true); } }>
        <div className="signoff-name-container">
          { hasSignedOff && <img src={check} alt="check"/> }
          {
            signoffTime ?
              <span className="signoff-name">{ props.signerName }</span>
              : <span className="signoff-name">{ props.signerName }</span>
          }
        </div>
        {
          hasSignedOff
            ? <div className="signoff-time">{ signoffTime.toString("dddd, MMMM Do YYYY, h:mm:ss") }</div>
            : <div className="signoff-time">{`Last viewed: ${signoffTime.toString("dddd, MMMM Do YYYY, h:mm:ss")}`}</div>
        }
        {
          hasSignedOff && <div className="signoff-message">"Looks good to me!"</div>
        }
      </button>
    </div>
  );
}

export default Signoff;