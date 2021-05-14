import Emoji from './Emoji.js';
import Signoff from './Signoff.js';
import Check from './Checkbox.js';
import Discussion from './Discussion.js';
import Assigned from './assigned.js';
import Event from './Event.js';
import Agenda from './Agenda.js';

function ComponentPicker(props) {
  const { line } = props;

  if(line.type === 'h1') {
    return (<div><h1 className="doc-block" contentEditable={true} key={line.text}>{ line.text }</h1></div>)
  } else if(line.type === 'h2') {
    return (<div><h2 className="doc-block" contentEditable={true} key={line.text}>{ line.text }</h2></div>)
  } else if (line.type === 'emoji') {
    return (<Emoji emoji={line.text} count={line.data}/>)
  } else if (line.type === "check") {
    return (<Check text={line.text}/>)
  } else if (line.type === "signoff") {
    return (<Signoff signerName={line.text}/>)
  } else if (line.type === "request") {
    return (<Assigned from={line.text}/>)
  } else if (line.type === "discussion") {
    return (<Discussion text={line.text}/>)
  } else if (line.type === "event") {
    return (<Event text={line.text}/>)
  } else if (line.type === 'agenda') {
    return (<Agenda data={line.data} text={line.text}/>)
  }else {
    return (
      <p className="doc-block" contentEditable={true} key={line.text}>{ line.text }</p>
    )
  }
}

export default ComponentPicker;