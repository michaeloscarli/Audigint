import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import App from './App';
// import Contact from './pages/Contact/Contact';
// import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
 <BrowserRouter>
  <div>
   <Route path="/" component={App}/>
   <Route path='/login'/>
  </div>
 </BrowserRouter>
);
export default Routes;
