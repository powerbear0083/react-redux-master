import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import CounterSum from './CounterSum.js';

const style = {
	maring: 20
}

class ContrlPanelSum extends Component {

	constructor(props) {
		super(props);

		this.onCounterUpdate = this.onCounterUpdate.bind(this);

		this.initValue = [0, 10, 20];

		// 陣列相加，從陣列 index 0 開始
		const initSum = this.initValue.reduce((a, b) => a + b, 0);

		this.state = {
			sum: initSum
		}

	}

	// newValue 更新之後的值
	// previousValue 更新之前的值
	onCounterUpdate(newValue, previousValue) {
		const valueChange = newValue - previousValue;
		this.setState(
			{
				sum: this.state.sum + valueChange
			}
		);
	}


	render() {
		console.log('enter ControlPanel reder')
		return(
			<div style={style}>
				<CounterSum onUpdate={this.onCounterUpdate} caption='First' />
				<CounterSum onUpdate={this.onCounterUpdate} caption='Second' initValue={this.initValue[1]} />
				<CounterSum onUpdate={this.onCounterUpdate} caption='Third' initValue={this.initValue[2]} />
				<hr/>
				<div>Total Count: {this.state.sum} </div>
			</div>
		);
	}

}

export default ContrlPanelSum;

