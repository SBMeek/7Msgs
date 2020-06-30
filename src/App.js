import React, { useState } from 'react';
import AppStyles from './App.css';
import useChat from './hooks/useChat';
import { useFirestore } from 'reactfire';

function App() {
  const [msg, setMsg] = useState('');
  const { msgs } = useChat();
  const msgColl = useFirestore().collection('msg');

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    msgColl.add({
      timestamp: Date.now(),
      text: msg
    })
  }

  return (
    <div className={AppStyles.App}>
      <header className={AppStyles["App-header"]}>
        <p>Env&iacute;a</p>
        <form method="POST" onSubmit={handleFormSubmit}>
          <input name="msg" value={msg} onChange={handleMsgChange} />
          <button type="submit">{">"}</button>
        </form>
        <ul>
          {msgs.map(m => (
            <li key={m.id}>{m.text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
