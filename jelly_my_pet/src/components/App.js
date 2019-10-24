import React from "react";
// import Main from 'pages/Main'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "pages/Login";
import MainPage from "pages/Main";
import TeamIntro from "pages/TeamIntro";
import Popular from "pages/popular";
import recommend from "pages/Recommend";
import SignUp from "pages/SignUp";
import Profile from "pages/myProfile";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route path="/login" render={Login} />
          <Route path="/recommend" render={recommend} />
          <Route exact path="/" render={MainPage} />
          <Route path="/teamintro" render={TeamIntro} />
          <Route path="/popular" render={Popular} />
          <Route path="/signup" render={SignUp} />
          <Route path="/myProfile" render={Profile} />
        </Switch>
      </div>
    </>
  );
}

export default App;
