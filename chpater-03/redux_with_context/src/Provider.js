import PropTypes from 'prop-types';
import { Component } from 'react';

class Provider extends Component {
	getChildContext() {
		return {
			store: this.props.store
		};
	}

	render() {
		return this.props.children;
	}

}

export default Provider;

Provider.propTypes = {
	store: PropTypes.object.isRequired
}

Provider.childContextTypes = {
	store: PropTypes.object
}