// import pug
// ==========================================================================
import './index.pug';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';

// import components js
// ==========================================================================
import CountDownContainer from './components/CountDownContainer.js';


render( <CountDownContainer />, document.getElementById('main'));
