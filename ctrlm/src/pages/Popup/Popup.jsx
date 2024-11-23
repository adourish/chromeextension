
import React, { Component } from "react";

import Notes from '../Components/NotesComponent.jsx';
import Calendar from '../Components/CalendarComponent.jsx';
import ChatGPT from '../Components/ChatGPTComponent.jsx';
import Tasks from '../Components/TasksComponent.jsx';
import TerminalPopup from '../Components/TerminalPopup.jsx';
import Chat from '../Components/ChatComponent.jsx';
import Mail from '../Components/MailComponent.jsx';
import Feed from '../Components/FeedComponent.jsx';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <Calendar />
      <Tasks />
      <Mail />
      <Chat />

    </div>
  );
};

export default Popup;
