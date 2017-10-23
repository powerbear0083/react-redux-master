// import pug
// ==========================================================================
import './index.pug';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';

// import components js
// ==========================================================================
import ContrlPanelSum from './components/ContrlPanelSum.js';


render( <ContrlPanelSum />, document.getElementById('main'));
