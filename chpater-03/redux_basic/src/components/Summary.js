import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import store from '../Store.js';

class Summary extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = this.getOwnState();

	}

	getOwnState() {
		const state = store.getState();

		let sum = 0;

		for (const key in state) {
			if (state.hasOwnProperty(key)) {
				sum += state[key];
			}
		}

		return { sum: sum };

	}

	onChange() {
		this.setState(this.getOwnState());
	}

	componentDidMount() {
		store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		store.unsubscribe(this.onChange);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.sum !== this.state.sum;
	}


	render() {

		const sum = this.state.sum;

		return (
			<div>Tota Count: {sum}</div>
		);
	}

}



export default Summary;

