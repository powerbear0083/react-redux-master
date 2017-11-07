import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter.js';
import Summary from './Summary.js';

class ContrlPanel extends Component {

	render() {
		console.log('enter ContrlPanel render')
		return(
			<div>
				<Counter caption='First' />
				<Counter caption='Second' />
				<Counter caption='Third' />
				<hr/>
				<Summary />
			</div>
		);
	}

}

export default ContrlPanel;

