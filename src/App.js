import logo from './logo.svg';
import './App.css';
import Emoji from './Emoji.js';
import Signoff from './Signoff.js';

const document_data = [
  { 
    text: "Parchment v0",
    type: "h1",
  },
  {
    text: "Let's see if this works",
    type: "p",
  },
  {
    text: "Signoff",
    type: "h1",
  }
]

function App() {
  return (
    <div className="App">
      {
        document_data.map(line => {
          console.log(line);
          return display(line)
        })
      }
      <div><Signoff signerName="Mayank Jain"/></div>
      <div><Signoff signerName="Arjun Bhargava"/></div>
    </div>
  );
}

const display = (line) => {
  if(line.type === 'h1') {
    return (<div><h1 key={line.text}>{ line.text }</h1></div>)
  } else {
    return (
      <div>
        <p key={line.text}>{ line.text }</p>
        <Emoji count={2}/>
      </div>
    )
  }
}

export default App;
