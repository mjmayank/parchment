import './App.css';
import Header from './header.js';
import ComponentPicker from './ComponentPicker';
import FakeInput from './FakeInput';
import { useEffect, useState } from 'react';
import { ACCOUNTS } from './constants';
import signInWithGoogleButton from './btn_google_signin_dark_focus_web@2x.png';
import modalBG from './modal-background.jpeg';

export const rootDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://api.speckdoc.com'

// Client ID and API key from the Developer Console
var CLIENT_ID = '73937624438-b70smv6ui0j29m29akdjv3vg36oh0htf.apps.googleusercontent.com'
var API_KEY = 'AIzaSyDttxQZEswvFpB56MN7J7dbxMqzQvi2Oxk';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/documents";

const document_data = []

function App() {
  const [document, setDocument] = useState(document_data);
  const [inputValue, setInputValue] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [title, setTitle] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(true);

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

  const syncDocument = document => {
    setDocument(document);
  }

  const removeItem = index => {
    document.splice(index, 1);
    setDocument([...document]);
  }

  const onEnterPressed = key => {
    if (inputValue === '') {
      if (key === 'Backspace') {
        const lastItem = document.pop();
        setDocument([...document])
        if (lastItem) {
          setInputValue(lastItem.text);
        }
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
          `${rootDomain}/send/review?email=${email}`
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
      else if (inputValue.includes('/github')) {
        const repoUrl = inputValue.substring(inputValue.indexOf("/github ") + "/github ".length)
        const body = {
          idToken: window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token,
          documentId: documentId,
          repo: repoUrl.trim(),
        }
        fetch(`${rootDomain}/github/read`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          return response.json()
        }).then(data => {
          setDocument([
            ...document,
            ...data.data,
          ]);
        })
        
        setInputValue('')
      }
      else {
        setDocument([
          ...document, {
            text: inputValue.trim(),
            type: "p",
          }
        ])
        setInputValue('')
      }
    }
  }

  const onLoginButtonPressed = () => {
    gapi.auth2.getAuthInstance().signIn();
  }

  const afterLogin = (isSignIn) => {
    console.log('sign in listener fired');
    if (isSignIn) {
      setIsSignedIn(true);
      var body = {
        idToken: window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token,
      }
      fetch(`${rootDomain}/checkRegistration`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (!response.ok) {
          window.open(`${rootDomain}/signin`);
        }
      })
    }
  }

  const gapi = window.gapi;

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
  async function initClient() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    if (params.get('new') === 'true') {
      setDocument([]);
    } else if (params.get('docId')) {
      setDocumentId(params.get('docId'));
    }

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      console.log('initialized gapi');
      gapi.auth2.getAuthInstance().isSignedIn.listen(afterLogin)

      if(!gapi.auth2.getAuthInstance().isSignedIn.get()){
        setIsSignedIn(false);
      } else {
        var body = {
          idToken: window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token,
        }
        fetch(`${rootDomain}/checkRegistration`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            if (params.get('new') === 'true') {
              setDocument([]);
              body = {
                idToken: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token,
              }
              fetch(`${rootDomain}/createNew`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(response => {
                return response.json()
              }).then(data => {
                const docId = data['documentId'];
                setDocumentId(docId);
                window.history.replaceState(null, null, `?docId=${docId}`);
              })
            } else if (params.get('docId')) {
              body = {
                idToken: window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token,
                documentId: params.get('docId'),
              }
              fetch(`${rootDomain}/document/sync`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(response => {
                return response.json()
              }).then(data => {
                setTitle(data.title);
                syncDocument(data.body);
              })
            }
          } else {
            window.open(`${rootDomain}/signin`);
          }
        })
      }
    });
  }

  useEffect(handleClientLoad, []);

  return (
    <div className="App">
      <Header
        documentData={ document }
        documentId={ documentId }
        setTitle={ setTitle }
        title={ title }
      />
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
        {
          document.length > 0 && 
          <a href={`https://docs.google.com/document/d/${documentId}/edit#`} className="footer">
            View autogenerated Google Doc
          </a>
        }
      </div>
      {
        !isSignedIn &&
          <div style={{ 'backgroundImage': `url(${modalBG})` }} className="login-footer">
            <div className="modal-title">Welcome to Speck!</div>
            <div className="modal-description">Sign in to get started</div>
            <button style={{ 'backgroundImage': `url(${signInWithGoogleButton})` }} onClick={ onLoginButtonPressed }></button>
          </div>
      }
    </div>
  );
}

export default App;
