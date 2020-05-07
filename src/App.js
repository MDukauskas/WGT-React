import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ComponentsPage, LoginPage, UserListPage, UserNewPage, DepartmentListPage, DepartmentNewPage, PositionListPage, PositionsNewPage } from './pages';
import './App.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {

  return (
    <div className="App">
      <Provider store={store}>
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
              <DepartmentListPage />
            </Route>
            <Route exact path="/departments/:id">
              <DepartmentNewPage />
            </Route>
            <Route exact path="/positions">
              <PositionListPage />
            </Route>
            <Route exact path="/positions/:id">
              <PositionsNewPage />
            </Route>
            <Route path="/componentspage">
              <ComponentsPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
