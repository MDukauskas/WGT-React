import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ComponentsPage, LoginPage, UserListPage, NewUserPage, Departments, Newdepartment, DepartmentSolution } from './pages';
import './App.scss';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/users">
            <UserListPage />
          </Route>
          <Route path="/newusers">
            <NewUserPage />
          </Route>
          <Route path="/departments">
            <Departments />
          </Route>
          <Route path="/newdepartment">
            <Newdepartment />
          </Route>
          <Route path="/departmentSolution">
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
