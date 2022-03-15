import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./containers/About";
import Post from "./containers/Post";
import AllPosts from "./components/AllPosts";
import DailyDan from "./components/DailyDan";
import Election from "./components/Election";
import Mardle from "./components/Mardle";
import MonoTracker from "./components/MonoTracker";
import Disclaimer from "./components/Disclaimer";
import CommunitySubmissions from "./components/CommunitySubmissions";
import DataExport from "./data/data";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import PageNotFound from "./pages/404";
import ReactGA from "react-ga";
ReactGA.initialize("UA-132829761-4");

class App extends Component {
  componentDidMount() {
    let contents;
    contents = window.location.pathname + window.location.search;
    ReactGA.pageview(contents);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Hero />

          <div className="container">
            <Switch>
              <Route exact path="/" component={AllPosts} />
              <Route exact path="/electioncoverage" component={Election} />
              <Route exact path="/dailydan" component={DailyDan} />
              <Route exact path="/monotracker" component={MonoTracker} />
              <Route path="/about" component={About} />
              <Route exact path="/post/:postId" component={Post} />

              {/* hidden URLs*/}
              <Route exact path="/mardle" component={Mardle} />
              <Route exact path="/disclaimer" component={Disclaimer} />
              <Route exact path="/community" component={CommunitySubmissions} />
              <Route exact path="/jsonexport" component={DataExport} />

              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
