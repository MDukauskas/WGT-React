import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ComponentsPage, LoginPage, UserListPage, NewUserPage } from './pages';
import './App.scss';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/users">
            <UserListPage />
          </Route>
          <Route path="/newusers">
            <NewUserPage />
          </Route>
          <Route path="/">
            <ComponentsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
