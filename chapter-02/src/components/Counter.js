import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {

	constructor(props) {
		super(props);

		this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this);
		this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this);

		this.state = {
			count: props.initValue
		}

	}

	componentWillMount() {
	    console.log('enter componentWillMount ' + this.props.caption);
 	}
 	componentDidMount() {
	    console.log('enter componentDidMount ' + this.props.caption);
	}
	componentWillReceiveProps(nextProps) {
    	console.log('enter componentWillReceiveProps ' + this.props.caption)
  	}

  	shouldComponentUpdate(nextProps, nextState) {
  		return (nextProps.caption !== this.props.caption || nextState.count !== this.state.count);
  	}

	onClickIncrementBtn() {
		this.setState({
			count: this.state.count + 1
		});
	}

	onClickDecrementBtn() {
		this.setState({
			count: this.state.count - 1
		});
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

