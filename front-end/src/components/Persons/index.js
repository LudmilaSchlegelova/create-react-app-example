import React, { Component } from 'react'
import Person from '../Person'

export default class Persons extends Component {
	render() {
		return (
			<div>
				{this.props.humans.map((human, index) => {
					console.log('[Persons.js] rendering')

					return (
						<Person
							key={human.id}
							changed={event => this.props.changed(event, human.id)}
							click={() => this.props.click(index)}
							name={human.name}
							age={human.age}
						/>
					)
				})}
			</div>
		)
	}
}

// const Persons = props => {
// 	return (
// 		<div>
// 			{props.humans.map((human, index) => {
// 				console.log('[Persons.js] rendering')

// 				return (
// 					<Person
// 						key={human.id}
// 						changed={event => props.changed(event, human.id)}
// 						click={() => props.click(index)}
// 						name={human.name}
// 						age={human.age}
// 					/>
// 				)
// 			})}
// 		</div>
// 	)
// }
// export default Persons
