import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
            <SkillSet />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
