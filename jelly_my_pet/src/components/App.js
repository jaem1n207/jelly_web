import React from 'react';
// import Main from 'pages/Main'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import MainPage from 'pages/Main';
import TeamIntro from 'pages/TeamIntro';

function App() {
    return (
        <>
          <div
            className="App"
            style={{
              height: '100%'
            }}
          >
            <Switch>
              <Route path="/login" render={Login} />
              <Route exact path="/" render={MainPage} />
              <Route path="/teamintro" render={TeamIntro} />
            </Switch>
          </div>
        </>
    );
}

export default App;
