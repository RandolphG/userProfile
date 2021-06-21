import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Signup from "./Signup";
import React from "react";
import Login from "./Login";
import { Profile } from "./Profile";
import { Dashboard } from "./Dashboard";

const AppRouter: Function = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/" component={Login} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default AppRouter;
