import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter.js';

class ContrlPanel extends Component {

	render() {
		console.log('enter ControlPanel reder')
		return(
			<div>
				<Counter caption='First' initValue={0} />
				<Counter caption='Second' initValue={10} />
				<Counter caption='Third' initValue={20} />
				<button onClick={ ()=> this.forceUpdate() }>
					Click me to repaint!
				</button>
			</div>
		);
	}

}

export default ContrlPanel;

