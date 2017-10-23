import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import CounterSum from './CounterSum.js';

class ContrlPanel extends Component {

	render() {
		console.log('enter ControlPanel reder')
		return(
			<div>
				<CounterSum caption='First' initValue={0} />
				<CounterSum caption='Second' initValue={10} />
				<CounterSum caption='Third' initValue={20} />
				<button onClick={ ()=> this.forceUpdate() }>
					Click me to repaint!
				</button>
			</div>
		);
	}

}

export default ContrlPanel;

