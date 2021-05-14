import './App.css';
import Header from './header.js';
import ComponentPicker from './ComponentPicker';
import { useState } from 'react';

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
    type: 'agenda',
    data: [
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
      }
    ]
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
  const [document, setDocument] = useState(document_data);
  const [inputValue, setInputValue] = useState('');

  const updateDocument = value => {
    if (value === '/check') {
      setDocument([...document, {
        text: "",
        type: "check"
      }]);
      setInputValue('')
    } else {
      setInputValue(value)
    }
  }

  const onEnterPressed = key => {
    if (key === 'Enter') {
      if (inputValue.includes('/request')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/request ") + "/request ".length),
            type: "request"
          }
        ])
        setInputValue('')
      }
      if (inputValue.includes('/signoff')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/signoff ") + "/signoff ".length),
            type: "signoff"
          }
        ])
        setInputValue('')
      }
      if (inputValue.includes('/discussion')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/discussion ") + "/discussion ".length),
            type: "discussion"
          }
        ])
        setInputValue('')
      }
      if (inputValue.includes('/emoji')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/emoji ") + "/emoji ".length) || "👍",
            type: "emoji",
            data: 0,
          }
        ])
        setInputValue('')
      }
    }
  }

  return (
    <div className="App">
      <Header/>
      <div className="doc-container">
        {
          document.map(line => {
            return <ComponentPicker line={line}/>
          })
        }
        <input
          value={ inputValue }
          className="fake-input"
          onChange={ e => updateDocument(e.target.value) }
          onKeyUp={ e => onEnterPressed(e.key) }
        />
      </div>
    </div>
  );
}

export default App;
