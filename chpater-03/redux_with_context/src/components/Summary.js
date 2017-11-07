import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';

import store from '../Store.js';

// 無狀態組件一
// class Summary extends Component {
// 	render() {
// 		return (
// 			<div>Tota Count: {this.props.sum}</div>
// 		);
// 	}
// }

// 無狀態組件二
function Summary({sum}) {
	return(
		<div>Tota Count: {sum}</div>
	);
}

Summary.propTypes = {
	sum: PropTypes.number.isRequired
}

class SummaryContainer extends Component {

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
		return (
			<Summary sum={this.state.sum} />
		);
	}

}



export default SummaryContainer;

