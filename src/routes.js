import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const Routes = (props) => (
 <BrowserRouter>
  <div>
   <Route path="/" component={App}/>
   <Route path='/login'/>
  </div>
 </BrowserRouter>
);
export default Routes;
