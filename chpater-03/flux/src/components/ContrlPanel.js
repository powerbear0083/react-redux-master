import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter.js';

class ContrlPanel extends Component {

	render() {
		console.log('enter ControlPanel reder')
		return(
			<div>
				<Counter caption='First' />
				<Counter caption='Second' />
				<Counter caption='Third' />
				<button onClick={ ()=> this.forceUpdate() }>
					Click me to repaint!
				</button>
			</div>
		);
	}

}

export default ContrlPanel;

