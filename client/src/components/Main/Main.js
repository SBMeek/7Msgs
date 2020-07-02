import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import logoVhorizontal from '../../icons/LogoVhorizontal.png'
import './Main.css';

import { InitContext } from '../../global/InitContext';

export default function Main() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const { lang: { Main: lang } } = useContext(InitContext);

  return (
    <div styleName="join-outer-container">
      <div styleName="join-inner-container">
        <img styleName="logo" src={logoVhorizontal} alt="logo" />
        <input 
          placeholder={lang["usernamePlaceholder"]} 
          styleName="input username-input" 
          type="text" 
          onChange={(event) => setName(event.target.value)} 
        />
        <input 
          placeholder={lang["roomNamePlaceholder"]} 
          styleName="input"
          type="text" 
          onChange={(event) => setRoom(event.target.value)} 
        />
        <Link 
          onClick={e => (!name || !room) ? e.preventDefault() : null} 
          to={`/chat?name=${name}&room=${room}`}
          style={ { width: '100%' } }
        >
          <button styleName="btn" type="submit">{lang["btnStartText"]}</button>
        </Link>
      </div>
    </div>
  );
}
