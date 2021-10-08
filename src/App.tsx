import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import paths from 'settings/paths';
import ExamplesAppClone from 'containers/ExamplesAppClone';
import ExamplesHoge from 'containers/ExamplesHoge';
import Home from 'containers/Home';
import RiakutoChapter08 from 'containers/RiakutoChapter08';
import RiakutoChapter09 from 'containers/RiakutoChapter09';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route exact path={paths.examplesAppClone} component={ExamplesAppClone} />
      <Route exact path={paths.examplesHoge} component={ExamplesHoge} />
      <Route exact path={paths.riakutoChapter08} component={RiakutoChapter08} />
      <Route exact path={paths.riakutoChapter09} component={RiakutoChapter09} />
    </Switch>
  </Router>
);

export default App;
