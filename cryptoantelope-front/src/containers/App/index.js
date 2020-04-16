import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from '../Home'
import Account from '../Account'
import NoMatch from '../NoMatch'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/account/:id">
              <Account />
            </Route>
            <Route path="/*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
