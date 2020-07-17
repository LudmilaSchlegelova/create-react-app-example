import React, { Component } from 'react'
import Validation from './Validation'
import Char from './Char'

class App extends Component {
	state = {
		input: '12345678',
	}

	inputChangeHandler = event => {
		this.setState({ input: event.target.value })
	}

	deleteCharHandler = indexOfItem => {
		const newInput = this.state.input.split('')
		newInput.splice(indexOfItem, 1)
		const updatedInput = newInput.join('')
		this.setState({ input: updatedInput })
	}

	render() {
		const list = this.state.input.split('').map((item, index) => (
			<Char key={index} clicked={() => this.deleteCharHandler(index)}>
				{item}
			</Char>
		))
		return (
			<div>
				<input
					type="text"
					value={this.state.input}
					onChange={this.inputChangeHandler}
				/>
				<p>{this.state.value}</p>
				<Validation inputLength={this.state.input.length} />
				{list}
			</div>
		)
	}
}

export default App
