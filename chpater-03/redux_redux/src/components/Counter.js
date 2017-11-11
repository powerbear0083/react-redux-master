import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';

// import store from '../Store.js';
import * as Actions from '../Actions.js';

const btnStyle = {
	margin: 10
}

// 無狀態組件一
// class Counter extends Component {
// 	render() {
// 		const {caption, onIncrement, onDecrement, value} = this.props;

// 		return (
// 			<div>
// 				<button style={btnStyle} onClick={ onIncrement }>+</button>
// 				<button style={btnStyle} onClick={ onDecrement }>-</button>
// 				<span> {caption} count: {value} </span>
// 			</div>
// 		);

// 	}
// }

// 無狀態組件二
// function Counter (props) {
// 	
// 	const {caption, onIncrement, onDecrement, value} = props;

// 	return (
// 		<div>
// 			<button style={btnStyle} onClick={ onIncrement }>+</button>
// 			<button style={btnStyle} onClick={ onDecrement }>-</button>
// 			<span> {caption} count: {value} </span>
// 		</div>
// 	);
// }

// 無狀態組件三
function Counter ({caption, onIncrement, onDecrement, value}) {

	return (
		<div>
			<button style={btnStyle} onClick={ onIncrement }>+</button>
			<button style={btnStyle} onClick={ onDecrement }>-</button>
			<span> {caption} count: {value} </span>
		</div>
	);
}


Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired
}


class CounterContainer extends Component {

	constructor(props, context) {
		// super(props, context);
		super(...arguments);

		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);

		this.state = this.getOwnState();

	}

	getOwnState() {
		return {
			value: this.context.store.getState()[this.props.caption]
		};
	}

	onIncrement() {
		this.context.store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
		this.context.store.dispatch(Actions.decrement(this.props.caption));
	}

	onChange() {
		this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextProps, nextState) {
	    return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
	}

	componentDidMount() {
	    this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	    this.context.store.unsubscribe(this.onChange);
 	}

	render() {
		return <Counter 
			caption={this.props.caption}
			onIncrement={this.onIncrement}
			onDecrement={this.onDecrement}
			value={this.state.value} />
	}

}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
	store: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
		value: state[ownProps.caption]
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onIncrement: () => {
			dispatch(Actions.increment(ownProps.caption));
		},
		onDecrement: () => {
			dispatch(Actions.decrement(ownProps.caption));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

