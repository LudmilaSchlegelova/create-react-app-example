import React, { Component } from 'react'
import Title from '../Title'

class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			array: [
				{ title: 'text1', id: 'id-1' },
				{ title: 'text2', id: 'id-2' },
			],
		}
	}

	handleClick = () => {
		let newArray = [...this.state.array]
		newArray.push({ title: 'text3', id: 'id-3' })
		this.setState({ array: newArray })
	}

	render() {
		return (
			<div>
				{this.state.array.map(item => {
					return (
						<Title
							key={item.id}
							title={item.title}
							handleClick={this.handleClick}
						/>
					)
				})}
			</div>
		)
	}
}

export default Footer
