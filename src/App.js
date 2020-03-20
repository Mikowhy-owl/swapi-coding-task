import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import Play from "./components/Play";
import Game from "./components/Game";

const App = () => {
  return (
    <Router>
      <Redirect to='/play' />
      <Switch>
        <Route path='/play' component={Play} />
        <Route path='/game' component={Game} />
      </Switch>
    </Router>
  );
};
export default withRouter(App);
