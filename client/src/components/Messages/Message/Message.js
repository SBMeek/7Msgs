import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let fromCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    fromCurrentUser = true;
  }

  return (
    fromCurrentUser
      ? (
        <div styleName="messageContainer rightMsg">
          <div styleName="messageBox msgFromUser">
            <p styleName="messageText">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div styleName="messageContainer leftMsg">
            <span styleName="userMsg">{user}</span>
            <div styleName="messageBox">
              <p styleName="messageText">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        )
  );
}

export default Message;