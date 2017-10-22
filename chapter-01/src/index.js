// import pug
// ==========================================================================
import './index.pug';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';

// import components js
// ==========================================================================
import ClickCounter from './components/ClickCounter.js';


render( <ClickCounter />, document.getElementById('main'));
