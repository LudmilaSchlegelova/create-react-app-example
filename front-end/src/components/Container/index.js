import React, { Component } from 'react'

export default class Container extends Component {
	trowError = () => {
		try {
			throw new Error('Something went wrong')
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.trowError}>
					create error
				</button>
			</div>
		)
	}
}
