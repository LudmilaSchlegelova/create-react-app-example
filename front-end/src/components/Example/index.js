import React, { Component } from 'react'

export default class Example extends Component {
	state = {
		favoriteColor: 'red',
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: 'yellow' })
		}, 3 * 1000)
	}
	render() {
		return <h1>My favorite color is {this.state.favoriteColor}</h1>
	}
}
