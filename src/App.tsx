import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import paths from 'settings/paths';
import ExamplesAppClone from 'containers/ExamplesAppClone';
import ExamplesHoge from 'containers/ExamplesHoge';
import FontAwesome5 from 'containers/FontAwesome5';
import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import ReactHookFormSamples from 'containers/ReactHookFormSamples';
import RiakutoChapter08 from 'containers/RiakutoChapter08';
import RiakutoChapter09 from 'containers/RiakutoChapter09';
import RiakutoChapter11 from 'containers/RiakutoChapter11';
import TextFieldSamples from 'containers/TextFieldSamples';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route exact path={paths.examplesAppClone} component={ExamplesAppClone} />
      <Route exact path={paths.examplesHoge} component={ExamplesHoge} />
      <Route exact path={paths.fontAwesome5} component={FontAwesome5} />
      <Route
        exact
        path={paths.reactHookFormSamples}
        component={ReactHookFormSamples}
      />
      <Route exact path={paths.riakutoChapter08} component={RiakutoChapter08} />
      <Route exact path={paths.riakutoChapter09} component={RiakutoChapter09} />
      <Route exact path={paths.riakutoChapter11} component={RiakutoChapter11} />
      <Route exact path={paths.textFieldSamples} component={TextFieldSamples} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
