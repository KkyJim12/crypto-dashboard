import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/Home";
import Register from "pages/Auth/Register";
import Login from "pages/Auth/Login";

const App = () => {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/market/BTCUSDT" />
          </Route>
          <Route path="/market/:coin" exact>
            <Home />
          </Route>{" "}
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
