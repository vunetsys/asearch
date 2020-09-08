import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
import Conferences from "./Conferences/Pages/Conferences.js";
import Home from "./HomePage/Pages/HomePage.js";
import ConferenceMetadata from "./Conferences/Pages/ConferenceMetadata";
import SearchPage from "./SearchPage/Pages/SearchPage.js";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/conferences" exact>
          <Conferences />
        </Route>
        <Route path="/conferences/:acronym" exact>
          <ConferenceMetadata/>
        </Route>
        <Route path={"/search/:type/:query"} exact>
          <SearchPage/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
