import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import paths from 'settings/paths';
import ExamplesAppClone from 'containers/ExamplesAppClone';
import ExamplesHoge from 'containers/ExamplesHoge';
import Home from 'containers/Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route exact path={paths.examplesAppClone} component={ExamplesAppClone} />
      <Route exact path={paths.examplesHoge} component={ExamplesHoge} />
    </Switch>
  </Router>
);

export default App;
