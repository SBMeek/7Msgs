import React, { useState, useContext } from 'react';
import sendIcon from '../../icons/send-512.png';
import './Input.css';

import { InitContext } from '../../global/InitContext';

const Input = ({ setMessage, sendMessage, message }) => {
  const [ok, setOk] = useState(false);
  const { lang: { Input: lang } } = useContext(InitContext);

  const handleInputChange = async (e) => {
    e.persist();
    const elem = e.target;
    setMessage(elem.value);
    await setOk((elem.value.length > 0));
    if(e.key === 'Enter' && ok) sendMessage(event)
  }

  const handleBtnClick = (e) => {
    sendMessage(e)
    setOk(!ok);
  }

  return (
    <form styleName="form">
      <input
        styleName="input"
        type="text"
        placeholder={lang["inputPlaceholder"]}
        value={message}
        onChange={handleInputChange}
      />
      <button 
        styleName="sendButton" 
        onClick={handleBtnClick}
        disabled={!ok}
        title={!ok ? lang["btnDisabled"] : ""}
      >
        <img 
          width="32" 
          height="32" 
          src={sendIcon}
          style={{
            filter: !ok && "invert(31%)"
          }}
        />
      </button>
    </form>
  )
}

export default Input;