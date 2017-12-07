import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../action.js';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    // this.refInput = this.refInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    }

  }

  onSubmit(e) {
    e.preventDefault();

    // const input = this.input;
    
    // if (!input.value.trim()) {
    //   return;
    // }

    // this.props.onAdd(input.value);
    // input.value = '';
    
    const inputValue = this.state.value;
    if (!inputValue.trim()) {
      return;
    }
    
    this.props.onAdd(inputValue);
    this.setState({value: ''});
     
  }

  // refInput(node) {
  //   this.input = node;
  // }
  
  onInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" 
            onChange={this.onInputChange}
            value={this.state.value} />
          <button className="add-btn" type="submit">
            ADD
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);