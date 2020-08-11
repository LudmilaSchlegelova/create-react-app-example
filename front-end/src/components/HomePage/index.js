// import React, { Component } from 'react'
import { ColorContext } from '../../context/ColorContext'

// export default class HomePage extends Component {
// 	static contextType = UserContext
// 	render() {
// 		return <div>{this.context.name}</div>
// 	}
// }

// export default class HomePage extends Component {
// 	render() {
// 		return <UserConsumer>{props => <div>{props.name}</div>}</UserConsumer>
// 	}
// }

import React, { useContext } from 'react'

export default function HomePage() {
	const colors = useContext(ColorContext)
	console.log(colors)
	return <div>Duri traktorista</div>
}
