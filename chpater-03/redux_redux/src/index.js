// import pug
// ==========================================================================
import './index.pug';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import components js
// ==========================================================================
import ContrlPanel from './components/ContrlPanel.js';
import store from './Store.js';



render( 
	<Provider store={store}>
		<ContrlPanel />
	</Provider>, 
	document.getElementById('main'));
