import './signoff.css';
import { useState } from 'react';

function Signoff(props) {
  const [ signoffTime, setSignoff ] = useState(new Date());
  const [ hasSignedOff, setHasSignedOff ] = useState(false);

  return (
    <button className="Signoff" onClick={ () => { setSignoff(new Date()); setHasSignedOff(true); } }>
      {
        signoffTime ?
          <span className="signoff-name">{ props.signerName }</span>
          : <span className="signoff-name">{ props.signerName }</span>
      }
      {
        hasSignedOff
          ? <div className="signoff-time">{ signoffTime.toString("dddd, MMMM Do YYYY, h:mm:ss") }</div>
          : <div className="signoff-time">{`Last viewed: ${signoffTime.toString("dddd, MMMM Do YYYY, h:mm:ss")}`}</div>
      }
    </button>
  );
}

export default Signoff;