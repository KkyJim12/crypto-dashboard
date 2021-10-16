import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/market/BTCUSDT' />
          </Route>
          <Route path='/market/:coin' exact>
            <MainLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
