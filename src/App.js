import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import AuthLayout from "layouts/AuthLayout";

const App = () => {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/market/BTCUSDT" />
          </Route>
          <Route path="/market/:coin" exact>
            <MainLayout />
          </Route>
          <Route path="/login" exact>
            <AuthLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
