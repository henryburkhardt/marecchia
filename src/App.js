import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./containers/About";
import Post from "./containers/Post";
import Opinion from "./components/Opinion";
import AllPosts from "./components/AllPosts";
import DailyDan from "./components/DailyDan";
import Election from "./components/Election";
import Mardle from "./components/Mardle";
import MonoTracker from "./components/MonoTracker";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages";
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
          <Header />
          <Hero />

          <div className="container">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/about" component={About} />
              <Route exact path="/post/:postId" component={Post} />
              <Route exact path="/opinion" component={About} />
              <Route exact path="/feature" component={About} />
              <Route exact path="/monotracker" component={MonoTracker} />
              <Route exact path="/dailydan" component={DailyDan} />
              <Route exact path="/campaigncoverage" component={Election} />
              <Route exact path="/mardle" component={Mardle} />

              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
