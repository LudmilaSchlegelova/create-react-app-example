import React, { Component } from 'react'
import Validation from './Validation'
import Char from './Char'

// class App extends Component {
// 	state = { userInput: 'abcdef' }

// 	inputChangeHandler = event => {
// 		this.setState({ userInput: event.target.value })
// 	}

// 	deleteCharHandler = charIndex => {
// 		const text = this.state.userInput.split('')
// 		text.splice(charIndex, 1)
// 		const updatedText = text.join('')
// 		this.setState({ userInput: updatedText })
// 	}

// 	render() {
// 		const charList = this.state.userInput.split('').map((ch, index) => (
// 			<Char key={index} clicked={() => this.deleteCharHandler(index)}>
// 				{ch}
// 			</Char>
// 		))
// 		return (
// 			<div>
// 				<ol>
// 					<li>
// 						v App subore Vytvor input s onChange posluchačom ktori bude
// 						zapisovat hodnotu do paragrafu ktori tiez vytvoris pod inputom
// 					</li>
// 					<li>
// 						vytvor novy komponent Validation ktori bude ocakavat vstupny
// 						parameter inputLength ktori reprezentuje dlzku napisaneho textu v
// 						inpute
// 					</li>
// 					<li>
// 						Validation komponent na zaklade vstupneho parametra inputLength bude
// 						vraciat p element do ktoreho vlozime text ak je dlzka vstupu v
// 						inpute kratsia alebo rovna 5 zobrazim v tom p element tento text
// 						"Text je kratky" ak je vacsia ako 5 zobrazim tento text "Text dost
// 						dlhy"
// 					</li>
// 					<li>
// 						Vytvor dalsi komopnent Char ktori bude vraciat div a pridaj mu
// 						inlinovo tento vzhlad (display: inline-block, padding: 16px,
// 						text-align: center, margin: 16px, border: 1px solid black). Do
// 						vnutra divka budes vkladat cez props character hodnotu.
// 					</li>
// 					<li>
// 						ak budes pisat do inputu text tak sa tento text rozbije po znakoch
// 						nasledne ich budes vykreslovat zaslanim do Char elementu a zobrazia
// 						sa podla dizajnu
// 					</li>
// 					<li>
// 						dalsou funkcionalitou Char komopnenti bude onClick ak kliknem na
// 						jeden znak tak ho zmazem a tiez zmazem z inputu
// 					</li>
// 				</ol>
// 				<input
// 					type="text"
// 					value={this.state.userInput}
// 					onChange={this.inputChangeHandler}
// 				/>
// 				<p>{this.state.userInput}</p>
// 				<Validation inputLength={this.state.userInput.length} />
// 				{charList}
// 			</div>
// 		)
// 	}
// }

class App extends Component {
	state = {
		input: '12345678',
	}

	inputChangeHandler = event => {
		this.setState({ input: event.target.value })
	}

	deleteCharHandler = indexOfItem => {
		//vytvorim si konstantu, do ktorej vlozim moj stav a tento text rozdelim pomocou split podla prazdneho stringu na jednotlive znaky
		const newInput = this.state.input.split('')
		//znaky budem mazat pomocou splice za pomoci indexOfItem
		newInput.splice(indexOfItem, 1)
		//vytvorim si novu konstantu kde si pomocou join metody rozdeleny text zasa spojim
		const updatedInput = newInput.join('')
		// a nastavim to ako novy stav
		this.setState({ input: updatedInput })
	}

	render() {
		//moj stav vkladam do konstanty kde ho rozdelim na znaky a mapujem ich
		const list = this.state.input.split('').map((item, index) => (
			<Char key={index} clicked={() => this.deleteCharHandler(index)}>
				{item}
			</Char>
		))
		return (
			<div>
				<input
					type="text"
					value={this.state.input}
					onChange={this.inputChangeHandler}
				/>
				<p>{this.state.input}</p>
				<Validation inputLength={this.state.input.length} />
				{list}
			</div>
		)
	}
}

export default App
