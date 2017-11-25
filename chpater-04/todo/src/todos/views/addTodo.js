import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../action.js';

class AddTodo extends Component {

	constructor(props, context) {
		super(props, context);

		this.onSubmit = this.onSubmit.bind(this);
		this.refInput = this.refInput.bind(this);

	}

	onSubmit(e) {
		e.preventDefault();

		const input = this.input;

		if (!input.value.trim()) {
			return;
		}

		this.props.onAdd(input.value);
		input.value = ''

	}

	refInput(node) {
		this.input = node;
	}

	render() {
		return (
			<div className="add-todo">
				<form onSubmit={this.onSubmit}>
					<input type="text" className="new-todo" ref={this.refInput} />
					<button type="submit" className="add-btn">Add</button>
				</form>
			</div>
		);
	}

}

AddTodo.propTypes = {
	onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = () => {
	return {
		onAdd: (text) => {
			dispatch(addTodo(text));
		}
	}
};

export default connect(null, mapDispatchToProps)(AddTodo);