import './App.css';
import Header from './header.js';
import ComponentPicker from './ComponentPicker';
import FakeInput from './FakeInput';
import { useState } from 'react';

export const ACCOUNTS = {
  "vee@reddit.com" : {
    email: "mjmayank@gmail.com",
    name: "Vaibhav Sahgal",
  },
  "kd@reddit.com" : {
    email: "mjmayank@gmail.com",
    name: "KD Bhulani",
  },
  "yee@reddit.com" : {
    email: "mjmayank@gmail.com",
    name: "Yee Chen",
  },
  "arjunb023@gmail.com" : {
    email: "arjunb023@gmail.com",
    name: "Arjun Bhargava",
  },
  "cayley@reddit.com" : {
    email: "mjmayank@gmail.com",
    name: "Cayley Larimer",
  },
  "mjmayank@gmail.com" : {
    email: "mjmayank@gmail.com",
    name: "Mayank Jain",
  }
}

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

  const removeItem = index => {
    document.splice(index, 1);
    setDocument([...document]);
  }

  const onEnterPressed = key => {
    if (inputValue === '') {
      if (key === 'Backspace') {
      }
    }
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
      else if (inputValue.includes('/signoff')) {
        const inputEmail = inputValue.substring(inputValue.indexOf("/signoff ") + "/signoff ".length, inputValue.length-1);
        console.log(inputEmail)
        console.log(ACCOUNTS[inputEmail])
        const email = ACCOUNTS[inputEmail].email;
        const name = ACCOUNTS[inputEmail].name;
        setDocument([
          ...document, {
            text: name,
            type: "signoff"
          }
        ])
        setInputValue('')
        fetch(
          `https://limitless-sierra-24357.herokuapp.com/send/review?email=${email}`
        )
      }
      else if (inputValue.includes('/discussion')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/discussion ") + "/discussion ".length),
            type: "discussion"
          }
        ])
        setInputValue('')
      }
      else if (inputValue.includes('/emoji')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/emoji ") + "/emoji ".length) || "👍",
            type: "emoji",
            data: 0,
          }
        ])
        setInputValue('')
      }
      else if (inputValue.includes('/h1')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/h1 ") + "/h1 ".length),
            type: "h1",
          }
        ])
        setInputValue('')
      }
      else if (inputValue.includes('/h2')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/h2 ") + "/h2 ".length),
            type: "h2",
          }
        ])
        setInputValue('')
      }
      else if (inputValue.includes('/p')) {
        setDocument([
          ...document, {
            text: inputValue.substring(inputValue.indexOf("/p ") + "/p ".length),
            type: "p",
          }
        ])
        setInputValue('')
      }
      else {
        setDocument([
          ...document, {
            text: inputValue,
            type: "p",
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
          document.map((line, index) => {
            return <ComponentPicker line={line} removeItem={() => removeItem(index)}/>
          })
        }
        <FakeInput
          value={ inputValue }
          className="fake-input"
          updateDocument={ value => updateDocument(value) }
          onEnterPressed={ key => onEnterPressed(key) }
        />
        <a href="https://docs.google.com/document/d/1M3erMHjZqOhPhs_SnrceyZK4KqqBarFaxhFlQ0vdKGo/edit#" className="footer">
          View autogenerated Google Doc
        </a>
      </div>
    </div>
  );
}

export default App;
