// import pug
// ==========================================================================
import './index.pug';

// import style
// ==========================================================================
import './css/filter-style.scss';
import './css/todo-style.scss';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import components js
// ==========================================================================
import TodoApp from './TodoApp.js';
import store from './Store.js';




render( 
	<Provider store={store}>
		<TodoApp />
	</Provider>, 
	document.getElementById('main'));
