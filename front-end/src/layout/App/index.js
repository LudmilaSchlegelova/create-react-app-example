// import React, { Component } from 'react'
import React, { useState } from 'react'
import Person from '../../components/Person'

// class App extends Component {
// 	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
// 	somthing = 'some value'
// 	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
// 	state = {
// 		persons: [
// 			{ id: 'asdfa1', name: 'Janko', age: 28 },
// 			{ id: 'asdfa2', name: 'Duri', age: 27 },
// 			{ id: 'asdfa3', name: 'Vierka', age: 20 },
// 		],
// 		showPersons: false,
// 	}

// 	deletePersonHanlder = personIndex => {
// 		// objekty a polia v js su referencenho typu, cize sa nesmu priamo mutovat teda menit prepisovat doplnat ich obsah
// 		// vramci nacitania dat presons aby sme nemutovali stare pole a nieco nepokazili tak vytvarame nove pole a cez spred operator tj. `...` vztiahnem obsah pola
// 		// starsi sposob
// 		// const persons = this.state.persons.slice()
// 		// novsi sposob
// 		const persons = [...this.state.persons]

// 		persons.splice(personIndex, 1)
// 		this.setState({ persons: persons })
// 	}

// 	nameChnagedHandler = (event, personId) => {
// 		// naskor potrebujem zistit v ktorom inpute robim zmenu
// 		// pomocou findIndex najdem objekt v ktorom robim zmenu a vratim jeho poziciu
// 		const personIndex = this.state.persons.findIndex(personItem => {
// 			return personItem.id === personId
// 		})

// 		// naskor aby som nemutoval exitujuci objekt vytvorim si novy
// 		// do tohto objektu vkladam obsah person len ten ktori chcem zmenit
// 		// pomocou spred operatora vytiahnem vsetky hodnoty vramci vytiahnuteho objektu z pola
// 		const person = {
// 			...this.state.persons[personIndex],
// 		}
// 		// prepisem name na novu hodnotu zo zachyteneho eventu ktori uchovava aktualnu value z inputu
// 		person.name = event.target.value

// 		// vytvorim si nove pole ktore chcem mutovat
// 		const persons = [...this.state.persons]
// 		// najdem si v tom novom poli objekt ktori chcem prepisat na novy objekt z novou name
// 		persons[personIndex] = person

// 		// prepisem stav stary persons na novy presons
// 		this.setState({ persons: persons })
// 	}

// 	togglePersonsHandler = () => {
// 		this.setState({ showPersons: !this.state.showPersons })
// 	}

// 	render() {
// 		const style = {
// 			backgroundColor: 'white',
// 			font: 'inherit',
// 			border: '1px solid blue',
// 			padding: '8px',
// 			cursor: 'pointer',
// 		}

// 		let persons = null
// 		if (this.state.showPersons) {
// 			persons = (
// 				<div>
// 					{this.state.persons.map((person, index) => (
// 						<Person
// 							changed={event => this.nameChnagedHandler(event, person.id)}
// 							click={() => this.deletePersonHanlder(index)}
// 							key={person.id}
// 							name={person.name}
// 							age={person.age}
// 						/>
// 					))}
// 				</div>
// 			)
// 		}

// 		return (
// 			<div className="App">
// 				<button style={style} onClick={this.togglePersonsHandler}>
// 					Switch name
// 				</button>
// 				{persons}
// 			</div>
// 		)
// 	}
// }

const App = () => {
	const [humans, setHumans] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])

	const [showHumans, setShowHumans] = useState(false)

	const deleteHumanHendler = indexOfHuman => {
		//nove pole, do ktoreho vlozim povodne pole humans
		const newHumans = [...humans]
		//toto nove pole vdaka splice zmazem
		newHumans.splice(indexOfHuman, 1)
		setHumans(newHumans)
	}

	const changeHumanName = (event, humanId) => {
		//v poli humans hladam konkretny index
		const indexOfHuman = humans.findIndex(item => {
			return item.id === humanId
		})
		//nove pole do ktoreho vlozim povodne pole humans aj s indexom
		const human = { ...humans[indexOfHuman] }
		//meno sa mi bude menit podla toho co budem pisat do inputu
		human.name = event.target.value

		const newHumans = [...humans]
		newHumans[indexOfHuman] = human

		setHumans(newHumans)
	}

	const toggleHumansHandler = () => {
		setShowHumans(!showHumans)
	}

	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
	}

	let humansNewElement = null
	if (showHumans) {
		humansNewElement = (
			<div>
				{humans.map((human, index) => (
					<Person
						changed={event => changeHumanName(event, human.id)}
						click={() => deleteHumanHendler(index)}
						key={human.id}
						name={human.name}
						age={human.age}
					/>
				))}
			</div>
		)
	}

	return (
		<div className="App">
			<button style={style} onClick={toggleHumansHandler}>
				Switch name
			</button>
			{humansNewElement}
		</div>
	)
}

export default App
