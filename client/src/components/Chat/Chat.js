import React, { useState, useEffect, useContext } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import RoomHeader from "../RoomHeader/RoomHeader";
import Input from '../Input/Input';

import { InitContext } from '../../global/InitContext';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  // const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { lang: { Chat: lang } } = useContext(InitContext);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io();

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      if(message.info){
        switch(message.info){
          case 'welcomeMsg':
            message.text = `${message.username}, ${lang["welcomeToRoom"]} ${message.room}.`
            break;
          case 'joinMsg':
            message.text = `${message.username} ${lang["userJoin"]}.`
            break;
          case 'leftMsg':
            message.text = `${message.username} ${lang["userLeft"]}.`
            break;
          default: break;
        }
      }
      setMessages(messages => [ ...messages, message ]);
    });
    
    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
}, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) socket.emit('sendMessage', message, () => setMessage(''));
  }

  return (
    <div styleName="outerContainer">
      <div styleName="container">
          <RoomHeader room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
