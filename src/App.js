import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './components/SearchPage';

// API_KEY = AIzaSyBkGjOwcyrpG5ePt2b-Qwz9D5yg1X4fMY4

// SEARCH_ID = c524047d17285d759

// url = GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

function App() {
  return (
    
  <div className="App">

    <Router>
      <>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>  
          <Route path="/">
            <Header/>
            <Main/>
          </Route>
        </Switch>
      </>
    </Router>
  </div>
  );
}

export default App;
