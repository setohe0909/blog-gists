import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as routes from './constants/routes';

/* Components */
import ListContainer from './features/list/container/list';
import DetailsContainer from './features/details/components/details';

import './assets/App.scss';

const App = () =>
  (<Router>
     <div>
        <Route exact path={routes.MAIN} component={() => <ListContainer />} />
        <Route exact path={routes.POST_DETAILS} component={() => <DetailsContainer />} />
      </div>
  </Router>);

export default App;
