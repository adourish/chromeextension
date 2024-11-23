import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Terminal.css';
import './Terminal.scss';

import Console from './Console';

function getAmplenoteToken() {
  const [inputText, setInputText] = useState('');
  const [content, setContent] = useState([]);
  console.log("getAmplenoteToken start")
  const element = document.querySelector('div[data-react-class="NoteEditorApp"]');
  const reactProps = element.getAttribute('data-react-props');
  const item = JSON.parse(reactProps);
  localStorage.setItem('test-adourish', "test");
  console.log(item)
  if (item && item.api && item.api.accessToken) {
    localStorage.setItem('amplenoteToken', item.api.accessToken);

    console.log("getAmplenoteToken end", item.api.accessToken);
    return item.api.accessToken;
  }
}
const Terminal = () => {
  const [inputText, setInputText] = useState('');
  const [content, setContent] = useState([]);
  //runScriptOnWindow("amplenoteToken", "https://www.amplenote.com/notes", getAmplenoteToken);
  return (
    <div className="container">
      <div className="console-wrapper">
        <Console
          inputText={inputText}
          setInputText={setInputText}
          content={content}
          setContent={setContent}
        />
      </div>
    </div>
  );
};

export default Terminal;
