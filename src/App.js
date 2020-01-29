import React from 'react';
import logo from './logo.svg';
import save from './save.svg';
import loading from './loading.svg';
import './App.scss';
import { Notification, Button, Card } from './components'

function App() {
  return (
    <div className="App">
      <div className="column">
        <Card title="Text Input">
          <form className="textInput">
            <div>
              <input type="text" value="Text Input Label"/>
            </div>
            <br />
            <div className="innerInput">
              <span>Text Input Label</span>
              <input type="text" value="Text Input Value"/>
              <span className="red">Text Input Error</span>
            </div>
            <br />
            <div>
              <span>Text Input Label</span>
              <input type="text" value="Text Input Value"/>
            </div>
          </form>
        </Card>
        <Card title="Select Input">
          <form className="selectInput">
            <div>
              <select><option value="">Select Input Label</option></select>
            </div>
            <br />
            <div className="innerInput">
              <span>Text Input Label</span><br/>
              <select><option value="">Select Input Label</option></select><br/>
              <span className="red">Text Input Error</span>
            </div>
            <br />
            <div>
              <span>Text Input Label</span><br/>
              <select><option value="">Select Input Label</option></select>
            </div>
          </form>
        </Card>
      </div>
      <div className="column">
        <Card title="Buttons">
          <p>Primary</p>
          <div className="direction">
            <div>
              <span>Default</span>
              <Button> Button</Button>
            </div>
            <div>
              <span>With Icon</span>
              <Button> <img src={save} alt="save" /> Button</Button>
            </div>
            <div>
              <span>Loading</span>
              <Button> <img src={loading} className="loading" alt="loading" /> Loading</Button>
            </div>
          </div>
          <br />
          <br />
          <div className="direction">
            <div>
              <span>Default</span>
              <Button primary> Button</Button>
            </div>
            <div>
              <span>Default</span>
              <Button primary> <img src={save} alt="save" /> Button</Button>
            </div>
            <div>
              <span>Default</span>
              <Button primary> <img src={loading} className="loading" alt="loading" /> Loading</Button>
            </div>
          </div>
        </Card>
        <Card title="Notifications">
          <Notification type="success">Success notification example</Notification>
          <Notification type="error">Error notification example</Notification>
          <Notification type="info">Info notification example</Notification>
        </Card>
        <Card title="Card with just one tab"/>
        <Card title="Card with tabs"/>
      </div>
    </div>
  );
}

export default App;
