import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { favoriteColor: 'red' }
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: 'yellow' })
		}, 1000)
	}

	componentDidUpdate() {
		document.getElementById(
			'div'
		).innerHTML = `The updated favorite is ${this.state.favoriteColor}`
	}

	render() {
		return (
			<div>
				<h1
					style={{
						color: this.state.favoriteColor,
					}}>
					My favorite color is {this.state.favoriteColor}
				</h1>
				<div id="div"></div>
			</div>
		)
	}
}
