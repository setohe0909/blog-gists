import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as routes from './constants/routes';

/* Components */
import ListContainer from './features/list/components/list';

import './App.scss';

const App = () =>
  (<Router>
      <Route exact path={routes.MAIN} component={() => <ListContainer />} />
  </Router>);

export default App;
