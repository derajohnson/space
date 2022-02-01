import React from 'react'
import LandingPage from './Components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/search'>
<Search />
          </Route>
        <Route path='/'>
        <LandingPage />

        </Route>
        </Switch>
    </Router>
  );
}

export default App;
