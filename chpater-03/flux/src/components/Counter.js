import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';

import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';

class Counter extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this);
		this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this);

		this.state = {
			count: CounterStore.getCounterValues()[props.caption]
		}

	}

	componentWillMount() {
	    console.log('enter componentWillMount ' + this.props.caption);
 	}

 	componentDidMount() {
	    console.log('enter componentDidMount ' + this.props.caption);
	    CounterStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
	    console.log('enter componentWillUnmount ' + this.props.caption);
	    CounterStore.removeChangeListener(this.onChange);
	}

	onChange() {
		const newCount = CounterStore.getCounterValues()[this.props.caption];
		this.setState({count: newCount});
	}

	componentWillReceiveProps(nextProps) {
    	console.log('enter componentWillReceiveProps ' + this.props.caption)
  	}

  	shouldComponentUpdate(nextProps, nextState) {
  		return (nextProps.caption !== this.props.caption || nextState.count !== this.state.count);
  	}

	onClickIncrementBtn() {
		Actions.increment(this.props.caption);
	}

	onClickDecrementBtn() {
		Actions.decrement(this.props.caption);
	}

	render() {
		console.log('enter render ' + this.props.caption);

		const btnStyle = {
			margin: 10
		}

		const {caption} = this.props;

		return(
			<div>
				<button style={btnStyle} onClick={ this.onClickIncrementBtn }>+</button>
				<button style={btnStyle} onClick={ this.onClickDecrementBtn }>-</button>
				<span> {caption} count: {this.state.count} </span>
			</div>
		);
	}

}

Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	initValue: PropTypes.number
}

Counter.defaultProps = {
	initValue: 0
}



export default Counter;

