// import pug
// ==========================================================================
import './index.pug';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';

// import components js
// ==========================================================================
import ContrlPanel from './components/ContrlPanel.js';


render( <ContrlPanel />, document.getElementById('main'));
