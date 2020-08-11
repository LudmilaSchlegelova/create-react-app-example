import React, { Component } from 'react'

export default class FormRef extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		this.state = {
			value: '',
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ value: this.inputRef.current.value })
	}

	render() {
		return (
			<div>
				<h1>React Ref - createRef</h1>
				<h3>value: {this.state.value}</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={this.inputRef} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
