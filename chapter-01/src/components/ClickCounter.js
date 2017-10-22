import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class ClickCounter extends Component {

	constructor(props) {
		super(props);

		this.onClickPlusButton = this.onClickPlusButton.bind(this);
		this.onClickMinusButton = this.onClickMinusButton.bind(this);

		this.state = {
			count: 0
		}
	}

	onClickPlusButton() {
		this.setState(
			{count: this.state.count +1}
		);
	}

	onClickMinusButton() {
		let currentState = this.state.count;

		if( currentState !== 0 ) {
			this.setState(
				{count: this.state.count -1}
			)
		} else {
			return false;
		}
		
	}


	render() {
		return(
			<div>
				<button onClick={ this.onClickPlusButton }>Click Me + </button>
				<button onClick={ this.onClickMinusButton }>Click Me - </button>
				<div>
					Click count: {this.state.count}
				</div>
			</div>
		);
	}

}

export default ClickCounter;

