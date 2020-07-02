import React, { useContext } from 'react';
import { InitContext } from '../../global/InitContext';
import closeIcon from '../../icons/closeIcon.png';
import logoVhorizontal from '../../icons/LogoVhorizontal.png';
import './RoomHeader.css';

const RoomHeader = ({ room }) => {
  const { lang: { RoomHeader: lang } } = useContext(InitContext);

  return (
    <div styleName="header">
      <div styleName="innerContainer">
        <img width="96" height="96" src={logoVhorizontal} alt="logo"/>
        <h3>{lang["roomTitle"]}: {room}</h3>
      </div>
      <a href="/" styleName="leaveRoom"><img src={closeIcon} alt="close icon" /></a>
    </div>
  )
};

export default RoomHeader;