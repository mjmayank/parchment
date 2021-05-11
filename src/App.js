import logo from './logo.svg';
import './App.css';
import Emoji from './Emoji.js';
import Signoff from './Signoff.js';
import Header from './header.js';
import Check from './Checkbox.js';
import Discussion from './Discussion.js';
import Assigned from './assigned.js';
import Event from './Event.js';

// const document_data = [
//   { 
//     text: "[Spec] Follower Notifs",
//     type: "h1",
//   },
//   {
//     text: "Action Items",
//     type: "h2",
//   },
//   {
//     text: "Chat with community team",
//     type: "check",
//   },
//   {
//     text: "Overview",
//     type: "h2",
//   },
//   {
//     text: "We are planning to launch a new notification when you get a new follower. The purpose of this is so that you are alerted when you get a new follower, and to create a viral experience where more and more people discover the follower feature",
//     type: "p",
//   },
//   {
//     text: "User Messaging/Announcements",
//     type: "h2",
//   },
//   {
//     text: "Title: New Follower Notifications Launching Next Week",
//     type: "p",
//   },
//   {
//     text: "Posted in: r/changlog",
//     type: "p",
//   },
//   {
//     text: "When: 5/17/2021",
//     type: "p",
//   },
//   {
//     text: "By: u/mjmayank",
//     type: "p",
//   },
//   {
//     text: "Hey everyone! Just wanted to let you know about a new launch that's coming up. We're launching follower notifs! Let us know in the comments if you have any feedack",
//     type: "p",
//   },
//   {
//     text: "Megan Murray",
//     type: "request",
//   },
//   {
//     text: "👍",
//     type: 'emoji',
//     data: 2,
//   },
//   {
//     text: "Discussion",
//     type: "h2",
//   },
//   {
//     text: "What should we do if subreddits blackout?",
//     type: "discussion",
//   },
//   {
//     text: "Signoff",
//     type: "h2",
//   },
//   {
//     text: "Mayank Jain",
//     type: "signoff",
//   },
//   {
//     text: "Arjun Bhargava",
//     type: "signoff",
//   }
// ]

const document_data = [
  {
    text: "Growth Roadmap Review: 10:30am-11:30am",
    type: "event",
  },
  { 
    text: "Growth Roadmap Review",
    type: "h1",
  },
  {
    text: "Agenda",
    type: "h2",
  },
  {
    text: "Roadmap Study Hall - 15 minutes",
    type: "p",
  },
  {
    text: "Roadmap Discussion - 20 minutes",
    type: "p",
  },
  {
    text: "Backlog Review - 20 minutes",
    type: "p",
  },
  {
    text: "Follow Ups",
    type: "h2",
  },
  {
    text: "",
    type: "check",
  },
  {
    text: "Roadmap",
    type: "h2",
  },
  {
    text: "Channels",
    type: "p",
  },
  {
    text: "Rose Liu",
    type: "request",
  },
  {
    text: "👍",
    type: 'emoji',
    data: 0,
  },
  {
    text: "Core Growth",
    type: "p",
  },
  {
    text: "Mike Jiao",
    type: "request",
  },
  {
    text: "👍",
    type: 'emoji',
    data: 0,
  },
  {
    text: "International",
    type: "p",
  },
  {
    text: "Jason Lee",
    type: "request",
  },
  {
    text: "👍",
    type: 'emoji',
    data: 0,
  },
  {
    text: "SEO",
    type: "p",
  },
  {
    text: "Chuck Kao",
    type: "request",
  },
  {
    text: "👍",
    type: 'emoji',
    data: 0,
  },
  {
    text: "Key Discussion",
    type: "h2",
  },
  {
    text: "Can we do anything to accelerate subreddit notifications?",
    type: "discussion",
  },
  {
    text: "Action Items",
    type: "h2",
  },
  {
    text: "",
    type: "check",
  },
  {
    text: "Signoff",
    type: "h2",
  },
  {
    text: "KD Bhulani",
    type: "signoff",
  },
  {
    text: "Vee Sahgal",
    type: "signoff",
  },
  {
    text: "Yee Chen",
    type: "signoff",
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="doc-container">
        {
          document_data.map(line => {
            console.log(line);
            return display(line)
          })
        }
        <input className="fake-input"/>
      </div>
    </div>
  );
}

const display = (line) => {
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
  } else {
    return (
      <p className="doc-block" contentEditable={true} key={line.text}>{ line.text }</p>
    )
  }
}

export default App;
