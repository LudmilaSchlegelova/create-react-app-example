import React from 'react'
import PropTypes from 'prop-types'
import Person from '../Person'

const Persons = props => {
	return (
		<div>
			{props.humans.map((human, index) => {
				console.log('[Persons.js] rendering')

				return (
					<Person
						key={human.id}
						changed={event => props.changed(event, human.id)}
						click={() => props.click(index)}
						name={human.name}
						age={human.age}
					/>
				)
			})}
		</div>
	)
}

Persons.propTypes = {
	humans: PropTypes.array.isRequired,
}

export default Persons
