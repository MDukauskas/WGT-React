import React from 'react';
import logo from './logo.svg';
import save from './save.svg';
import loading from './loading.svg';
import './App.scss';
import { Notification, Button } from './components'

function App() {
  return (
    <div className="App">
        <Notification type="success">Success notification example</Notification>
        <Notification type="error">Error notification example</Notification>
        <Notification type="info">Info notification example</Notification>
        <div className="direction">
          <Button> Button</Button> 
          <Button> <img src={save} alt="save" /> Button</Button> 
          <Button> <img src={loading} className="loading" alt="loading" /> Loading</Button> 
          {/* Test, button - žalia spalva yra komponentai */}
        </div>
        <div className="direction">
          <Button primary> Button</Button> 
          <Button primary> <img src={save} alt="save" /> Button</Button> 
          <Button primary> <img src={loading} className="loading" alt="loading" /> Loading</Button> 
        </div>
    </div>
  );
}

export default App;
