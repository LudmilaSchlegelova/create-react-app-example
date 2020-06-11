import React, { Component } from 'react'
import UserInput from './UserInput'
import UserOutput from './UserOutput'

// class App extends Component {
// 	state = {
// 		username: 'supermax',
// 	}

// 	usernameChangedHandler = event => {
// 		this.setState({ username: event.target.value })
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<ol>
// 					<li>Vytvor dve nove komponenty: UserInput and UserOutput</li>
// 					<li>
// 						UserInput komponenta bude vraciat input s atributom type text kedze
// 						budeme pisat do inputu text tento input naštýlujeme pomocou inline
// 						style podla dizajnu tento input bude prepojeny obojsmerne pouzijes
// 						onChange ktora bude preposielana a value ktoré bude tiez
// 						preposielane
// 					</li>
// 					<li>
// 						UserOutput bude vraciat dve paragrafy prvý paragraf bude UserName:
// 						props.userName hodnota preposielana z hora a druhy bude len text
// 						podla dizajnu to nastilovat cez css style subor
// 					</li>
// 					<li>
// 						Ak nieco napisem do Inputu tento text sa preposle do prveho a
// 						druheho blocku
// 					</li>
// 					<li>
// 						ak dany input focusnem nech ma border ciernej farby ak odidiem z
// 						neho teda kliknem niedke mimo bude border cervenej farby
// 					</li>
// 				</ol>
// 				<UserInput
// 					changed={this.usernameChangedHandler}
// 					currentName={this.state.username}
// 				/>
// 				<UserOutput userName={this.state.username} />
// 				<UserOutput userName={this.state.username} />
// 				<UserOutput userName="Max" />
// 			</div>
// 		)
// 	}
// }

class App extends Component {
	state = {
		userName: 'superMax',
	}

	userNameChangedHandler = event => {
		this.setState({ userName: event.target.value })
	}

	render() {
		return (
			<div>
				<UserInput
					changed={this.userNameChangedHandler}
					currentName={this.state.userName}
				/>
				<UserOutput userName={this.state.userName} />
				<UserOutput userName={this.state.userName} />
				<UserOutput userName="Max" />
			</div>
		)
	}
}

export default App
