import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ComponentsPage, LoginPage, UserListPage, UserNewPage, Departments, DepartmentNew, DepartmentSolution } from './pages';
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
          <Route path="/users/new">
            <UserNewPage />
          </Route>
          <Route exact path="/departments">
            <Departments />
          </Route>
          <Route path="/departments/new">
            <DepartmentNew />
          </Route>
          <Route path="/departments/solution">
            <DepartmentSolution />
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
