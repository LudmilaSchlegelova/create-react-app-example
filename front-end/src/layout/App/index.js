// import React, { useState } from 'react'
import React, { Component } from 'react'
import Persons from '../../components/Persons'
import styled from 'styled-components'

const Wrapper = styled.div`
	text-align: center;
`

const Text = styled.p`
	color: ${({ humans }) => humans.length <= 2 && 'red'};
	font-weight: ${({ humans }) => humans.length <= 1 && 'bold'};
`

const Button = styled.button`
	background-color: ${({ showHumans }) => (showHumans ? 'red' : 'green')};
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: ${({ showHumans }) =>
			showHumans ? 'salmon' : 'lightgreen'};
		color: black;
	}
`

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

// 	let humansNewElement = null
// 	if (showHumans) {
// 		humansNewElement = (
// 			<div>
// 				{humans.map((human, index) => {
// 					///sem pisat console.log('[App] rendering')
// 					return (
// 						<Person
// 							key={human.id}
// 							changed={event => changeHumanName(event, human.id)}
// 							click={() => deleteHumanHendler(index)}
// 							name={human.name}
// 							age={human.age}
// 						/>
// 					)
// 				})}
// 			</div>
// 		)
// 	}

// 	return (
// 		<Wrapper>
// 			<Text humans={humans}>Example text</Text>
// 			<Button onClick={toggleHumansHandler} showHumans={showHumans}>
// 				Switch name
// 			</Button>
// 			{humansNewElement}
// 		</Wrapper>
// 	)
// }

// export default App

class App extends Component {
	constructor(props) {
		super(props)
		console.log('[App.js] constructor', props)

		this.state = {
			humans: [
				{ id: 'asdfa1', name: 'Janko', age: 28 },
				{ id: 'asdfa2', name: 'Duri', age: 27 },
				{ id: 'asdfa3', name: 'Vierka', age: 20 },
			],
			showHumans: false,
		}
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDrivedFromProps', props, state)
		return state
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount')
	}

	deleteHumanHendler = indexOfHuman => {
		// nove pole, do ktoreho vlozim povodne pole humans
		const newHumans = [...this.state.humans]
		// toto nove pole vdaka splice zmazem
		newHumans.splice(indexOfHuman, 1)
		this.setState({ humans: newHumans })
	}

	changeHumanName = (event, humanId) => {
		// v poli humans hladam konkretny index
		const indexOfHuman = this.state.humans.findIndex(item => {
			return item.id === humanId
		})
		// nove pole do ktoreho vlozim povodne pole humans aj s indexom
		const human = { ...this.state.humans[indexOfHuman] }
		// meno sa mi bude menit podla toho co budem pisat do inputu
		human.name = event.target.value

		const newHumans = [...this.state.humans]
		newHumans[indexOfHuman] = human

		this.setState({ humans: newHumans })
	}

	toggleHumansHandler = () => {
		this.setState({ showHumans: !this.state.showHumans })
	}

	render() {
		console.log('[App.js] render', this.props, this.state)

		let humansNewElement = null
		if (this.state.showHumans) {
			humansNewElement = (
				<Persons
					humans={this.state.humans}
					changed={this.changeHumanName}
					click={this.deleteHumanHendler}
				/>
			)
		}

		return (
			<Wrapper>
				<Text humans={this.state.humans}>Example text</Text>
				<Button onClick={this.toggleHumansHandler} showHumans={this.showHumans}>
					Switch name
				</Button>
				{humansNewElement}
			</Wrapper>
		)
	}
}

export default App
