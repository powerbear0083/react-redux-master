import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';

import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component {

	constructor(props) {
		super(props);

		this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this);
		this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this);

		this.state = {
			sum: SummaryStore.getSummary()
		}

	}

	componentDidMount() {
		SummaryStore.addChamgeListener(this.onUpdate);
	}

	componentWillUnmount() {
		SummaryStore.removeChangeListener(this.onUpdate);
	}



	render() {

		const btnStyle = {
			margin: 10
		}


		return(
			<div>Tota Count: {this.state.sum}</div>
		);
	}

}



export default Summary;

