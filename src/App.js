import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ComponentsPage, LoginPage, UserListPage, UserNewPage, Departments, DepartmentNew } from './pages';
import './App.scss';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/users">
            <UserListPage />
          </Route>
          <Route exact path="/users/:id">
            <UserNewPage />
          </Route>
          <Route exact path="/departments">
            <Departments />
          </Route>
          <Route exact path="/departments/:id">
            <DepartmentNew />
          </Route>
          <Route path="/componentspage">
            <ComponentsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
