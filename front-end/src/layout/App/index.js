import React, { Component } from 'react'
import Person from '../../components/Person'
import styled from 'styled-components'

const Wrapper = styled.div`
	text-align: center;
`

const Text = styled.p`
	color: ${({ persons }) => persons.length <= 2 && 'red'};
	font-weight: ${({ persons }) => persons.length <= 1 && 'bold'};
`

const Button = styled.button`
	background-color: ${({ showPersons }) => (showPersons ? 'red' : 'green')};
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: ${({ showPersons }) =>
			showPersons ? 'salmon' : 'lightgreen'};
		color: black;
	}
`

class App extends Component {
	state = {
		persons: [
			{ id: 'asdfa1', name: 'Janko', age: 28 },
			{ id: 'asdfa2', name: 'Duri', age: 27 },
			{ id: 'asdfa3', name: 'Vierka', age: 20 },
		],
		showPersons: false,
	}

	deletePersonHanlder = personIndex => {
		const persons = [...this.state.persons]

		persons.splice(personIndex, 1)
		this.setState({ persons: persons })
	}

	nameChnagedHandler = (event, personId) => {
		const personIndex = this.state.persons.findIndex(personItem => {
			return personItem.id === personId
		})

		const person = {
			...this.state.persons[personIndex],
		}
		person.name = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({ persons: persons })
	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	render() {
		let persons = null
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => (
						<Person
							changed={event => this.nameChnagedHandler(event, person.id)}
							click={() => this.deletePersonHanlder(index)}
							key={person.id}
							name={person.name}
							age={person.age}
						/>
					))}
				</div>
			)
		}

		return (
			<Wrapper>
				<Text persons={this.state.persons}>Example text</Text>
				<Button
					onClick={this.togglePersonsHandler}
					showPersons={this.state.showPersons}>
					Switch name
				</Button>
				{persons}
			</Wrapper>
		)
	}
}

export default App

// import React from 'react'
// import React, { useState } from 'react'
// const App = () => {
// 	const [humans, setHumans] = useState([
// 		{ id: 'asdfa1', name: 'Janko', age: 28 },
// 		{ id: 'asdfa2', name: 'Duri', age: 27 },
// 		{ id: 'asdfa3', name: 'Vierka', age: 20 },
// 	])

// 	const [showHumans, setShowHumans] = useState(false)

// 	const deleteHumanHendler = indexOfHuman => {
// 		// nove pole, do ktoreho vlozim povodne pole humans
// 		const newHumans = [...humans]
// 		// toto nove pole vdaka splice zmazem
// 		newHumans.splice(indexOfHuman, 1)
// 		setHumans(newHumans)
// 	}

// 	const changeHumanName = (event, humanId) => {
// 		// v poli humans hladam konkretny index
// 		const indexOfHuman = humans.findIndex(item => {
// 			return item.id === humanId
// 		})
// 		// nove pole do ktoreho vlozim povodne pole humans aj s indexom
// 		const human = { ...humans[indexOfHuman] }
// 		// meno sa mi bude menit podla toho co budem pisat do inputu
// 		human.name = event.target.value

// 		const newHumans = [...humans]
// 		newHumans[indexOfHuman] = human

// 		setHumans(newHumans)
// 	}

// 	const toggleHumansHandler = () => {
// 		setShowHumans(!showHumans)
// 	}

// 	const style = {
// 		backgroundColor: 'white',
// 		font: 'inherit',
// 		border: '1px solid blue',
// 		padding: '8px',
// 		cursor: 'pointer',
// 	}

// 	let humansNewElement = null
// 	if (showHumans) {
// 		humansNewElement = (
// 			<div>
// 				{humans.map((human, index) => (
// 					<Person
// 						changed={event => changeHumanName(event, human.id)}
// 						click={() => deleteHumanHendler(index)}
// 						key={human.id}
// 						name={human.name}
// 						age={human.age}
// 					/>
// 				))}
// 			</div>
// 		)
// 	}

// 	return (
// 		<div className="App">
// 			<button style={style} onClick={toggleHumansHandler}>
// 				Switch name
// 			</button>
// 			{humansNewElement}
// 		</div>
// 	)
// }

// export default App
