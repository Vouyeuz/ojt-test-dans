import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JobList, JobDetail, LoginContainer } from "./Pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/job-detail">
            <JobDetail />
          </Route>
          <Route exact path="/">
            <LoginContainer />
          </Route>
          <Route path="/job-search">
            <JobList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
