import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import ShotokanPage from './ShotokanPage';
import KataPage from './KataPage';

browserHistory.listen( location =>  {
  window.ga('send', 'pageview', location.pathname);
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ShotokanPage} />
    <Route path="/kata/:kataName" component={KataPage}/>
  </Router>,
  document.getElementById('root')
);