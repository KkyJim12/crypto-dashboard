import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <MainLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
