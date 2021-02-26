import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
