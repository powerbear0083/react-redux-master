import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import CountDown from './CountDown.js';

class CountDownContainer extends Component {

	render() {

		return(
			<div>
				<CountDown startCount={100}>
					{
						(count) => <div>{count}</div>
					}
				</CountDown>
				<CountDown startCount={10}>
					{
						(count) => <div>{ count > 0 ? count : '新年快樂'}</div>
					}
				</CountDown>
			</div>
		);
	}

}

export default CountDownContainer;

