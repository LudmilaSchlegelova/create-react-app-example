# React a create react app

# React

- je to javascriptová knižnica, ktorá umožnuje jednoducho vyskladať webove rozhranie pomocou component, ktoré vkladá do DOMu a pred vložením naskôr vysklada virtuálny DOM
- vramci používania react knižnice môžme používať jsx zápis
- jsx je zapis javascriptu spolu s HTMLkom

### Ako React funguje?

React uchováva dve virtuálne DOMy starý a nový DOM.
Starý je ten, ktorý môžeš vidieť v DOMe v prehliadači už vykreslený a nový je ten, ktorý ešte nevidíš v prehlidači ktorý sa vytvorí po zmene stavu v komponentách. Prečo virtuálny DOM existuje je rýchlejší kedže je to reprezentácia DOMu v javascripte, všetyk HTMLka a objekty v nativnom js bez toho aby sa niečo v prehliadači vykresľovalo. V podstate si uchovava dve kopie DOMu.

- Ak sa starý virtualny DOM nezdhoduje niekde z DOMom v prehlidači prekresli v DOM prehlidači len tie miesta kde sú nejaké rozdiely a uloži si nový stav vo virtulanom DOMe. Napríklad ak sa zmení text tlačidla, bude aktualizovaný iba tento text a nebude znova vykresľovať celé tlačidlo.
- Ak sa starý virtulany DOM zhoduje s DOMom v prehliadači tak sa react nedotkne DOMu v prehliadači a preovlá sa render ktorí je možné zstaviť pomocou shouldComponentUpdate a ušetriť tak zbytočné volanie metody.

## aplikacie

- single page aplication
  jedno HTMLko v ktorom sa pomocou napr. react. prekresluje component a nerefreshuje sa stranka a tiez sa znova nestahujú všetky zdrojové kody (cssko, js, html, bootstrap,...) po prvom nacitani stranky.<br>
  je webová aplikácia alebo webová stránka, ktorá spolupracuje s webovým prehliadačom dynamickým prepisovaním aktuálnej webovej stránky novými údajmi z webového servera namiesto predvolenej metódy načítania celých nových stránok prehliadačom. Cieľom sú rýchlejšie prechody, vďaka ktorým bude web vyzerať skôr ako natívna aplikácia.
- multiple page aplication
  viacero HTML stranok, ktoré sa vykresľujú na servery.

pre rýchly štart do reactu si naskôr vytvoríme základ react aplikácie pomocou [create react app](https://reactjs.org/docs/create-a-new-react-app.html)

použitie: otvorim si vo vscode priečinok už s vyklonovaným repositárom z githubu alebo gitlabu. Následne si spustime terminál vo vscode a spustim príkaz

```
npx create-react-app my-app
```

premenna `my-app` ktorú píšem za príkazom `create-react-app` je názov novovytvorenej aplikácie, kedže budeme písať `front-end` aplikácie môžme to premenovať na tento názov viď príklad:

```
npx create-react-app front-end
```

po stiahnutí a vytvorení základu aplikácie s názvom front-end v tomto priečinku budem mať takýto obsah:<br>
![1](./dokumentacia/images/1.png)

- node_modules priecinok obsahuje nainstalovane zavislosti cudzich balickov ktore sme stihli vramci spusteneho skriptu `create-react-app`. Nachadzaju sa tam vsetky zavislosti aplikacie.
- public priecinok obsahuje staticku cast aplikacie ktora sa nacitava v prehliadaci.
  ![2](./dokumentacia/images/2.png)
- src priecinok obsahuje zakladne vygenerovane javascriptove, css, svg, subory ktore tvoria zaklad react aplikacie.
  ![3](./dokumentacia/images/3.png)
- .gitignore služi na defionvanie súborov a pričinkov ktoré maju byť ignorované pri komitovani zmien do repositára na githube alebo gitlabe,...
- package.json obsahuje konfiguraciu aplikacie runnery, ktore pri spusteni v terminaly vykonavaju ukony vramci aplikacie
- yarn.lock subor reprezentuje historiu nainstalovanych zavislosti v node_modules tento subor mozem na zaciatku zmazat ak chcem pouzivat na ovladanie prikazov npm namiesto yarn. Co je [npm](https://docs.npmjs.com/about-npm/) a [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) su to package managers ktoré slúžia na manipuláciu z packages.<br>
  Instalacia pomocou package managera npm

```
npm i
```

alebo yarn

```
yarn
```

ak mam node_modules priecinok a v nom vsetky potrebne zavislosti nainstalovane mozem v ramci package.json sa pozriet na skripts, kde je definovane ako sa pusta aplikacia<br>
na zaciatok ak chcem spustit aplikaciu mozem pouzit prikaz:

```
npm run start
```

alebo pre yarn

```
yarn start
```

ak sme vsetko dokoncili pri tvorbe aplikacie a chceme dany vysledok nahodit na github alebo gilab ako verejne funkcnu aplikaciu pouzijeme prikaz:

```
npm run build
```

alebo pre yarn

```
yarn build
```

ak by sme chceli testovat aplikaciu pomocou jest a pisat unit testy pouzijeme prikaz:

```
npm run test
```

alebo pre yarn

```
yarn test
```

ak by sme chceli odomknut viacej konfiguracie pre nastavenie aplikacie je tu moznost pouzit prikaz:

```
npm run eject
```

alebo pre yarn

```
yarn eject
```

![4](./dokumentacia/images/4.png)<br>

okrem scripts tam môžeme vidiet dependencies packages zavislosti na inch balickov.<br>

Vramci src priecinka mozem vidiet index.js hlavny subor, v ktorom sa nachadza zaciatok strukturi aplikacie:

```js
// importnem si schopnosti z reactu
import React from 'react'
// importnem ReactDOM objekt
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import všetkého z serviceWorker konfiguračneho súboru
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	// a to jsx t.j. html alebo react components ktoré chcem vykresliť konrkrétne <React.StrictMode> slúži na skoré odhalenie chýb vrámci vyvoja a použitia react
	<React.StrictMode>
		{/* <App /> je componenta ktora sa importuje so suboru ./front-end/src/App.js */}
		<App />
	</React.StrictMode>,
	// a druhá hodnota je selektor ktorím selektnem div element v súbore ktorí sa nachádza v ./front-end/public/index.html
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

vramci App.js suboru mozme mat definovanu bud class componets alebo functional componets kazdy jsx vyraz ktory vracia komponenta sa po builde zmeni na javascript vid tekto priklad

```js
// tymto spôsobom vložim funkcionalitu React a doplnok { Component } ktory doplňa extendnutú class App komponentu o ďalšie schopnosti
import React, { Component } from 'react'

// nasledne po class sa definuje názov class komponenty ktorú pomocou extends doplňam o schopnosti z reactu
class App extends Component {
	// táto funkcia musí byť vždy definovaná v class komponente a služí na vysklreslenie html + js kódu do DOMU
	render() {
		// návratová hodnota je JSX zápis t.j. HTML + JASVASCRIPT
		return (
			// ak chceme pridať css classu tak v jsx zápise sa používa len className kedže už hore je definované slovo class pred App. Treba mať na pamäto že po zbildeni aplikacie je prepísany na javascript. náš JSX vždy môže mať jeden koreňový prvok jeden element ako celok.
			<div className="App">
				<h1>Nadpis</h1>
			</div>
		)
	}
}
export default App
```

JSX zapis po zbildeni aplikácie vyzerá takto

```js
// tymto spôsobom vložim funkcionalitu React a doplnok { Component } ktory doplňa extendnutú class App komponentu o ďalšie schopnosti
import React, { Component } from 'react'
// tymto spôsobom viem priradiť css štýli
import './styles.css'
// nasledne po class sa definuje názov class komponenty ktorú pomocou extends doplňam o schopnosti z reactu
class App extends Component {
	// táto funkcia musí byť vždy definovaná v class komponente a služí na vysklreslenie html + js kódu do DOMU
	render() {
		//tento kod je rovnaky ako JSX zapis hore po zbehnuti build procesu. To je dôvod prečo definujem všade import React...
		return React.createElement(
			'div',
			{ className: 'App' },
			React.creteElement('h1', null, 'Nadpis')
		)
	}
}
```

Komponenty sú úžasné, pretože môžeme sústrediť náš kód na každý súbor, a tak ho spravovať oveľa lepšie, jednoduchšie a vieme takto zglobalizovať duplicitný kód.

Ak vytvoríme komponentu ktorú chcem použíť na viacerých miestach rovnakú napr. vytvorim si Person komponentu s textom ktory použijem tri krat pod sebou a vytvorím tak tri rovnaké texty jednoduchým kopírovanim komponenty.

Priklad
Vytovrim si komponentu `<Person />` ktora bude vraciat p a text I'am a Person and I am x years old! a použijeme ich x krat pod sebou

```js
import React from 'react'
const Person = () => <p>I'am a Person and I am x years old!</p>
export default Person
```

pouzitie vytvorenej komponenty

```js
// tymto spôsobom vložim funkcionalitu React a doplnok { Component } ktory doplňa extendnutú class App komponentu o ďalšie schopnosti
import React, { Component } from 'react'
// tymto spôsobom viem priradiť css štýli
import './styles.css'
// nasledne po class sa definuje názov class komponenty ktorú pomocou extends doplňam o schopnosti z reactu
class App extends Component {
	// táto funkcia musí byť vždy definovaná v class komponente a služí na vysklreslenie html + js kódu do DOMU
	render() {
		//tento kod je rovnaky ako JSX zapis hore po zbehnuti build procesu. To je dôvod prečo definujem všade import React...
		// tato komponenta <Person /> vytvori tri texty vďaka kompírovaniu
		return (
			<div className="App">
				<Person />
				<Person />
				<Person />
			</div>
		)
	}
}
```

Ak vytvoríme komponentu ktorá vracia nič len holé HTML a text nazívame statickou komponentou ktorá nič nemení len vracia HTML kod.<br>

Príklad komponenty s dynamickym obsahom, konkretne v tomto priklade sme x pismeno nahradili javascriptovym kódom Math.random() ktoré vracia číslo 0 a 1 s desatinnými hodnotami. a Math.floor() zaokruhly hodnotu.

```js
import React from 'react'
const Person = () => (
	<p>I'am a Janko and I am Math.floor(Math.random() * 30) years old!</p>
)
export default Person
```

ak by sme chceli spustit v texte javascript medzi textom vykonáme to takto:

```js
import React from 'react'
const Person = () => (
	<p>I'am a Janko and I am {Math.floor(Math.random() * 30)} years old!</p>
)
export default Person
```

Zrazu sa nam nahodne generuju tri cisla v komponente `<Person />`<br>

Keď už vieme ako vykresľovať a kopirovať koponenty aj s js v texte tak môžme skúsiť použiť vlastný atribut. Môžeme vidieť že na pridavnie classy sa používa className a to preto lebo slovo class je už vyhradené pre triedu. Pre Person ak by som chcel pridať atribut a preposlať si hodnotu nazov človeka cez name atribut a vek človeka cez atribut age do komponenty urobil by som to takto napr.

```js
import React, { Component } from 'react'
import Person from '../../components/Person'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Person name="Janko" age="28" />
				<Person name="Duri" age="27" />
				<Person name="Vierka" age="20" />
			</div>
		)
	}
}
export default App
```

ako vstupnu hodnotu pre Person funkciu si vzdy davam slovo `props` a to preto lebo to je pravidlo môžem si to pomenovať ináč ale `props` je best practice. Pomocou `props` si preposielam hodnoty z atributov pri použiti kopomenty. V person komponente sme vytovorili HTML s textom a s dynamickým obsahom ktoré sme nastavili z vonku v mieste kde skutočne využívame naše koponenty.

```js
import React from 'react'
const Person = props => (
	<p>
		I'am a {props.name} and I am {props.age} years old!
	</p>
)
export default Person
```

okrem zasielania hodnôt cez atributy vieme preposielať aj väčší obsah do koponenty pomocou `children` a to tým spôsobom že obalim obsah použítou komponentou Person vid. priklad:

```js
import React, { Component } from 'react'
import Person from '../../components/Person'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Person name="Janko" age="28" />
				<Person name="Duri" age="27">
					My hobies: <p>Traktorista</p>
				</Person>
				<Person name="Vierka" age="20" />
			</div>
		)
	}
}
export default App
```

medzi použitu komponentu vieme preposlať viac ako len text, vieme preposlať aj HTML alebo ďalšiu komponentu.

```js
import React from 'react'

const Person = props => (
	<>
		<p>
			I'am a {props.name} and I am {props.age} years old!
		</p>
		<p>{props.children}</p>
	</>
)

export default Person
```

## Pochopenie a použitie react hodnoty state

naskor si vytvorim tlacidlo button nasledne definujem atribut `onClick` ktore nam vytvara posluchaca na event klik teda ak kliknem na tlacidlo button tak sa vykona to co je definovane vo vnútri objektu `{}` pre nás ma po kliknuti prepisat state persons na nove hodnoty vid priklad.<br>

pouzitie state stavu v jsx zapise sa vykonava pomocou klucoveho slova this a cez bodku mam dostupnú premenu `state` a nasledne vytahujem z objektu co chcem pouzit.<br>

pre ulozenie zmeny stavu v premenej `state` pouzijeme metodu z klucoveho slova `this` metodu `setState({...})` kde do vnutra objektu tejto metody definujem svoj prepis predosleho stavu.

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}

	switchNameHandler = () => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Hanka', age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	render() {
		// v konzole vidim vsetko obsah state aj s hodnotou otherState
		console.log(this.state)

		return (
			<div className="App">
				<button onClick={this.switchNameHandler}>Switch name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}

export default App
```

Prevediem si class App komponetu do funkcionalnej komponenty a vyskusame dany postup ukladania a prepisovania stavu pomocou react hooks a konkretne metody `useState` namiesto `setState`.

```js
import React, { useState } from 'react'
import Person from '../../components/Person'

const App = () => {
	//
	const [state, setstate] = useState({
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	})

	const switchNameHandler = () => {
		setstate({
			persons: [
				{ name: 'Hanka', age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	// v konzole vidim vsetko obsah state ale po zmena teda prepise stavu uz nevidim stav otherState
	console.log(state)

	return (
		<div className="App">
			<button onClick={switchNameHandler}>Switch name</button>
			<Person name={state.persons[0].name} age={state.persons[0].age} />
			<Person name={state.persons[1].name} age={state.persons[1].age}>
				My hobies: Traktorista
			</Person>
			<Person name={state.persons[2].name} age={state.persons[2].age} />
		</div>
	)
}

export default App
```

Ak chceme vytvorit globalnu funkciu `switchNameHandler` ktora bude očakávať vstupnú hodnotu ktoru vlozi a prepíse na novu hodnotu v objekte Persons konrektne prvý prvok z pola v premenej name<br>

preposielanie hodnoty do globalnej funkcie `switchNameHandler` sa v starsom zapise pise pomocou metody `bind()`, ktora ocakava dve vstupne hodnoty. Prva hodnota je this ktora definuje spojenie medzi metodou `switchNameHandler` a hodnotou ktoru definujeme ako druhý parameter konretne v príklade `Lietadlo`<br>

V nasom priklade sa metoda `switchNameHandler` zavola len po kliknuti na button
a to pomocou `onClick` atributu ktory obsahuje `{this.switchNameHandler.bind(this, 'Lietadlo')}`

```js
import React, { Component } from 'react'
import Person from '../../components/Person'
class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}
	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: newName, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.switchNameHandler.bind(this, 'Lietadlo')}>
					Switch name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}
export default App
```

ak by sme chceli vytvoriť prepis stavu po kliknuti na jeden Person vytvorili by sme to takto:
naskôr si prepošlem funkciu ktora dokaze zmenit stav t.j. `switchNameHandler` pomocou atributu s nazvom `click`

```js
import React, { Component } from 'react'
import Person from '../../components/Person'
class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}
	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: newName, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.switchNameHandler.bind(this, 'Lietadlo')}>
					Switch name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'auto')}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}
export default App
```

nasledne v componente Person musim definovat novú vstupnú premennu `click`

```js
import React from 'react'

const Person = ({ name, age, children, click }) => (
	<div onClick={click}>
		<p>
			I'am a {name} and I am {age} years old!
		</p>
		{children && <p>{children}</p>}
	</div>
)

export default Person
```

Novsi zapis prepojenia click eventu piseme takto:

```js
import React, { Component } from 'react'
import Person from '../../components/Person'
class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}
	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: newName, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}
	render() {
		return (
			<div className="App">
				<button onClick={() => this.switchNameHandler('Lietadlo')}>
					Switch name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={() => this.switchNameHandler('auto')}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}
export default App
```

Atributy pomocou ktorich vieme kontrolovať teda vytvárať poslucháčov na eventy:
[vaic info](https://reactjs.org/docs/events.html#form-events)

- vramci klavesici kontrola pisania

```
onKeyDown onKeyPress onKeyUp
```

- vramci pozicie mysi nad elementom a odchod kurzora mysi z elementu

```
onFocus onBlur
```

- vramci formularovych elementov pouzivame tieto atributy

```
onChange onInput onInvalid onReset onSubmit
```

- vramci mysi mame tieto atributy

```
onClick onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

- na kontrolu a zachytavanie eventu skroll

```
onScroll
```

## Pridanie obojsmernej väzby

priklad vytvorim si input v Person komponente s type atributom `text` pridame atirbut `onChange` ktory reprezentuje poslucháča ktory sa spustí vždy, keď sa zmení value v tomto inpute. Pre `onChange` atribut definujem hodnotu z vonku t.j. hodnota bude definovana tam kde je dana komponenta použitá (v App.js subore) cez premennú `changed`

```js
import React from 'react'

const Person = ({ name, age, children, click, changed }) => (
	<div onClick={click}>
		<p>
			I'am a {name} and I am {age} years old!
		</p>
		{children && <p>{children}</p>}
		<input type="text" onChange={changed} />
	</div>
)

export default Person
```

následne idem vytvoriť funkcionalitu v `App.js` subore ktora bude preposielana cez premennu `changed`

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}

	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Janko', age: 2 },
				{ name: newName, age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	nameChnagedHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	render() {
		return (
			<div className="App">
				<button onClick={() => this.switchNameHandler('Lietadlo')}>
					Switch name
				</button>
				<Person
					changed={this.nameChnagedHandler}
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={() => this.switchNameHandler('auto')}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}

export default App
```

Ak by sme chceli vidiet na zaciatku nacitania stranky aktualnu hodnotu mena v inpute. Tu nastava obojsmerna vazba v komponente Person. Najskor definujem value atribut spresposlanou hodnotou name

```js
import React from 'react'

const Person = ({ name, age, children, click, changed }) => (
	<div onClick={click}>
		<p>
			I'am a {name} and I am {age} years old!
		</p>
		{children && <p>{children}</p>}
		<input type="text" onChange={changed} value={name} />
	</div>
)

export default Person
```

vsimnime si ze druhy a treti Person input nemoze menit value a to preto lebo nemaju definovanu onChange hodnotu ktora umoznuje prepis noveho stavu.

## Pridavanie styles

je kopec sposobov

- najskor prepojenim cez css subor priklad

vytvorim si v priesinku Person novy subor s nazvom `style.css`

```css
.wrapper {
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;
}
```

nezabudnut si importnut subor css

```js
import React from 'react'
import './style.css'

const Person = ({ name, age, children, click, changed }) => (
	<div onClick={click} className="wrapper">
		<p>
			I'am a {name} and I am {age} years old!
		</p>
		{children && <p>{children}</p>}
		<input type="text" onChange={changed} value={name} />
	</div>
)

export default Person
```

nevyhoda je ze ak pouzijeme niekde v projekte rovnaku classu aka je v Person komponente t.j. `wrapper` tak ten element dostane rovanke cssko a moze sa lahko stat ze nam to niekto prepise vramci projektu.

- inline styles pomocou atributu `style={{}}`

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
	}

	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Janko', age: 2 },
				{ name: newName, age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	nameChnagedHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}
		return (
			<div className="App">
				<button
					style={style}
					onClick={() => this.switchNameHandler('Lietadlo')}>
					Switch name
				</button>
				<Person
					changed={this.nameChnagedHandler}
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={() => this.switchNameHandler('auto')}>
					My hobies: Traktorista
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}

export default App
```

inline styles ma prednost pred styles z css suboru
vyhoda cssko bude aplikovane len na elmente kde sme ho definovali

- lepsie riesenie je naucit sa pouzivat [styled-componentes](https://styled-components.com/)

## podmienky vykreslenia dvoch komponent na základe klikania

[react dokumentacia s prikladami](https://reactjs.org/docs/conditional-rendering.html)

nainicializujeme pre state objekt novu hodnotu `showPersons` a nastavim ju na false to bude hodnota pomocou ktorej budeme ifovat obsah.
obalime si vsetky Person komponenty do jedneho div elementu a prepiseme funkciu v buttone z `switchNameHandler` na `togglePersonsHandler` a definujem si tuto funkciu v classe ktora bude menit pomocou setState stav pre showPersons takto `this.setState({ showPersons: !this.state.showPersons })` nasledne si vytvorim podmienku pre nase div ktore obaluje Person. Vramci JSX sa pisu podmienky vo vnutri pomocou ternanerho zapisu takto `podmienka ? priestor pre podmienku ktora je pravidva : priestor pre podmienku ktora je nepravdiva` v nasom pripade to bude `this.state.showPersons` nemusim hodnotu porovnavat s true ako `this.state.showPersons === true` pretoze nas parameter showPersons je boolean hodnota...

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
		showPersons: false,
	}

	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Janko', age: 2 },
				{ name: newName, age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	nameChnagedHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

		return (
			<div className="App">
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{this.state.showPersons ? (
					<div>
						<Person
							changed={this.nameChnagedHandler}
							name={this.state.persons[0].name}
							age={this.state.persons[0].age}
						/>
						<Person
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							click={() => this.switchNameHandler('auto')}>
							My hobies: Traktorista
						</Person>
						<Person
							name={this.state.persons[2].name}
							age={this.state.persons[2].age}
						/>
					</div>
				) : null}
			</div>
		)
	}
}

export default App
```

ak je podmienka false a nechcem vraciať nič môžem použiť kratši zapis pomocou `&&` takto

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
		showPersons: false,
	}

	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Janko', age: 2 },
				{ name: newName, age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	nameChnagedHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

		return (
			<div className="App">
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{this.state.showPersons && (
					<div>
						<Person
							changed={this.nameChnagedHandler}
							name={this.state.persons[0].name}
							age={this.state.persons[0].age}
						/>
						<Person
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							click={() => this.switchNameHandler('auto')}>
							My hobies: Traktorista
						</Person>
						<Person
							name={this.state.persons[2].name}
							age={this.state.persons[2].age}
						/>
					</div>
				)}
			</div>
		)
	}
}

export default App
```

dalsi sposob ako vieme narabat s dynamickym obsahom a ifovat ho je lepsi sposob kde oddelim logiku od vzkreslenej casti. Je to prefenovanejsi sposob a viacej citatelnejsi pre vacsie projekty.

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ name: 'Janko', age: 28 },
			{ name: 'Duri', age: 27 },
			{ name: 'Vierka', age: 20 },
		],
		otherState: 'some other value',
		showPersons: false,
	}

	switchNameHandler = newName => {
		// prepis stavu na novy stav po zavolani metody
		this.setState({
			persons: [
				{ name: 'Janko', age: 2 },
				{ name: newName, age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	nameChnagedHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 2 },
				{ name: 'Feri', age: 10 },
				{ name: 'Dusi', age: 5 },
			],
		})
	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

		let persons = null
		if (this.state.showPersons) {
			persons = (
				<div>
					<Person
						changed={this.nameChnagedHandler}
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
					/>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={() => this.switchNameHandler('auto')}>
						My hobies: Traktorista
					</Person>
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
					/>
				</div>
			)
		}

		return (
			<div className="App">
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{persons}
			</div>
		)
	}
}

export default App
```

prepis do funkcionalne komponenty

```js
import React, { useState } from 'react'
import Person from '../../components/Person'

const App = () => {
	const [state, setState] = useState([
		{ name: 'Janko', age: 28 },
		{ name: 'Duri', age: 27 },
		{ name: 'Vierka', age: 20 },
	])
	const [showPersons, setShowPersons] = useState(false)

	const switchNameHandler = newName => {
		setState([
			{ name: 'Janko', age: 2 },
			{ name: newName, age: 10 },
			{ name: 'Dusi', age: 5 },
		])
	}

	const nameChnagedHandler = event => {
		setState([
			{ name: event.target.value, age: 2 },
			{ name: 'Feri', age: 10 },
			{ name: 'Dusi', age: 5 },
		])
	}

	const togglePersonsHandler = () => {
		setShowPersons(!showPersons)
	}

	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
	}

	let persons = null
	if (showPersons) {
		persons = (
			<div>
				<Person
					changed={nameChnagedHandler}
					name={state[0].name}
					age={state[0].age}
				/>
				<Person
					name={state[1].name}
					age={state[1].age}
					click={() => switchNameHandler('auto')}>
					My hobies: Traktorista
				</Person>
				<Person name={state[2].name} age={state[2].age} />
			</div>
		)
	}

	return (
		<div className="App">
			<button style={style} onClick={togglePersonsHandler}>
				Switch name
			</button>
			{persons}
		</div>
	)
}

export default App
```

## Vystupné zoznamy

t.j. vieme opakujucu Person komponentu vzkreslit pomocou map metody a prejst vsetkymi prvkami v poli nemusime deklarovat toľko krát pod sebou komponentu Person. Dokážeme vykresliť toľko Person výstupov koľko mame prvkov v poli...

vramci map metodz vždy musim definovať atribut `key` ktori ocakva hodnotu string a musi to bzt nieco unikatne vacsinou su tieto id definovane z databazy. Slúži to reactu na to aby vedel rýchlejšie vykresľovať elementy vramci map a renderovať komponentu len so zmeneným stavom.

```js
import React, { Component } from 'react'
import Person from '../../components/Person'

class App extends Component {
	// normalom svete by som zacal takto const something = someValue ale toto nefunguje
	somthing = 'some value'
	// namiesto tohto zapisu pouzivame best pratice a vytvorime si premenu s nazvom state
	state = {
		persons: [
			{ id: 'asdfa1', name: 'Janko', age: 28 },
			{ id: 'asdfa2', name: 'Duri', age: 27 },
			{ id: 'asdfa3', name: 'Vierka', age: 20 },
		],
		showPersons: false,
	}

	deletePersonHanlder = personIndex => {
		// objekty a polia v js su referencenho typu, cize sa nesmu priamo mutovat teda menit prepisovat doplnat ich obsah
		// vramci nacitania dat presons aby sme nemutovali stare pole a nieco nepokazili tak vytvarame nove pole a cez spred operator tj. `...` vztiahnem obsah pola
		// starsi sposob
		// const persons = this.state.persons.slice()
		// novsi sposob
		const persons = [...this.state.persons]

		persons.splice(personIndex, 1)
		this.setState({ persons: persons })
	}

	nameChnagedHandler = (event, personId) => {
		// naskor potrebujem zistit v ktorom inpute robim zmenu
		// pomocou findIndex najdem objekt v ktorom robim zmenu a vratim jeho poziciu
		const personIndex = this.state.persons.findIndex(personItem => {
			return personItem.id === personId
		})

		// naskor aby som nemutoval exitujuci objekt vytvorim si novy
		// do tohto objektu vkladam obsah person len ten ktori chcem zmenit
		// pomocou spred operatora vytiahnem vsetky hodnoty vramci vytiahnuteho objektu z pola
		const person = {
			...this.state.persons[personIndex],
		}
		// prepisem name na novu hodnotu zo zachyteneho eventu ktori uchovava aktualnu value z inputu
		person.name = event.target.value

		// vytvorim si nove pole ktore chcem mutovat
		const persons = [...this.state.persons]
		// najdem si v tom novom poli objekt ktori chcem prepisat na novy objekt z novou name
		persons[personIndex] = person

		// prepisem stav stary persons na novy presons
		this.setState({ persons: persons })
	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

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
			<div className="App">
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{persons}
			</div>
		)
	}
}

export default App
```

prepis na funkcionalnu komponentu

```js
import React, { useState } from 'react'
import Person from '../../components/Person'

const App = () => {
	const [persons, setPersons] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])
	const [showPersons, setShowPersons] = useState(false)

	const deletePersonHanlder = personIndex => {
		const newPersons = [...persons]
		newPersons.splice(personIndex, 1)
		setPersons(newPersons)
	}

	const nameChnagedHandler = (event, personId) => {
		const personIndex = persons.findIndex(personItem => {
			return personItem.id === personId
		})
		const person = {
			...persons[personIndex],
		}
		person.name = event.target.value

		const newPersons = [...persons]
		newPersons[personIndex] = person
		setPersons(newPersons)
	}
	const togglePersonsHandler = () => {
		setShowPersons(!showPersons)
	}
	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
	}

	let personsElement = null
	if (showPersons) {
		personsElement = (
			<div>
				{persons.map((person, index) => (
					<Person
						changed={event => nameChnagedHandler(event, person.id)}
						click={() => deletePersonHanlder(index)}
						key={person.id}
						name={person.name}
						age={person.age}
					/>
				))}
			</div>
		)
	}

	return (
		<div className="App">
			<button style={style} onClick={togglePersonsHandler}>
				Switch name
			</button>
			{personsElement}
		</div>
	)
}

export default App
```

## Dynamické nastavovanie štýlov

zmenme farbu pozadia pre tlacidlo na zelenu a farba pisma na bielu. Skúsme po kliknuti na tlacidlo nech sa farba pozadia meni zo zelenej na cervenu a naopak...

```jsx
import React, { Component } from 'react'
import Person from '../../components/Person'

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

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
			// prepis inline style z green na red
			style.backgroundColor = 'red'
		}

		return (
			<div className="App">
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{persons}
			</div>
		)
	}
}

export default App
```

Vytvorme si dve classy `.red` ktora bude obsahovat `color: red` a `.bold` bude pridavat `font-weight: bold` style.
Nad button Switch name si pridam p element s textom `Example text` a sk[sim pridat dve classy pre tento element

skusme pridat logiku ak je dlzka persons pola mensia rovna ako 2 tak pridam classu `.red` a dalsia logika ak je dlzka pola persons mensia a rovna 1 pridam classu `.bold`

```jsx
import React, { Component } from 'react'
import Person from '../../components/Person'
import './style.css'

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

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

			style.backgroundColor = 'red'
		}

		// zmena stylov pomocou class zo suboru style.css
		const classes = []
		if (this.state.persons.length <= 2) {
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold')
		}

		return (
			<div className="App">
				<p className={classes.join(' ')}>Example text</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{persons}
			</div>
		)
	}
}

export default App
```

## Radium a pouzitie pseudo selektorov

vramci css vieme pridat psuedo selector napr. hover velmi jednoducho ale co ak sme chceli tuto moznost vykonat v inline styloch vramci reactu to nie je mozne ale je to mozne s pouzitim balicka [radium](https://www.npmjs.com/package/radium). Balíček je doplnok ktori už niekto vytvoril a ktori nám pridáva nejakú novú schopnosť. V našom prípad vieme pridavať pseudoselektori v inline style objekte. Inštalacia balíčka sa vykoná pomocou prikazu

```
npm install --save radium
```

alebo

```
yarn add radium
```

použitie tohto balíčka začína importom Radium

```jsx
import React, { Component } from 'react'
import Person from '../../components/Person'
// import balicka Radium a nasledne celkom na spodnej casti suboru prevolam metodu Radium do ktoreho vkladam class komponentu.
import Radium from 'radium'
import './style.css'

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			// teraz uz vieme vramci inline stylov pouzivat hover effecty
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		}

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

			style.backgroundColor = 'red'
			// ak chceme prepisat stylz pre pseudo selektor vieme to takto jednoducho
			style[':hover'] = {
				backgroundColor: 'salmon',
			}
		}

		const classes = []

		if (this.state.persons.length <= 2) {
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold')
		}

		return (
			<div className="App">
				<p className={classes.join(' ')}>Example text</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{persons}
			</div>
		)
	}
}

// tym ze prevolam jednu funkcionalnu komponentu druhou a doplnim ju o schopnosti, Raddium sa stava higher order component (HOC). Nesk;r si HOC skusime vztovri aj my... Da sa to pouzit aj na class aj na func. komponenty rovnakym spôsobom.
export default Radium(App)
```

## Radium a použitie media query pre responzivitu

ak by sme cheli napisat v cssku media querz pre Person a zmenit sirku urobime to takto

```css
@media (min-width: 500px) {
	.wrapper {
		width: 450px;
	}
}
```

ak by sme to chceli urobit v inline zapise v Person funkcionalnej komponente urobime to takto

```jsx
import React from 'react'
import Radium from 'radium'
import './style.css'

const Person = ({ name, age, children, click, changed }) => {
	const style = {
		'@media(min-width: 500px)': {
			width: '450px',
		},
	}

	return (
		<div className="wrapper" style={style}>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</div>
	)
}

export default Radium(Person)
```

ak by sme sa pozreli do prehliadaca a klikli na nas button uvideli sme error ktori nam hovori ze ak pouzivam media query alebo keyfrmes musim obalit danu funkcionalnu komponentu HOC komponentou `StyleRoot` takto

```jsx
import React, { Component } from 'react'
import Person from '../../components/Person'
import Radium, { StyleRoot } from 'radium'
import './style.css'

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			// teraz uz vieme vramci inline stylov pouzivat hover effecty
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		}

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

			style.backgroundColor = 'red'
			// ak chceme prepisat stylz pre pseudo selektor vieme to takto jednoducho
			style[':hover'] = {
				backgroundColor: 'salmon',
			}
		}

		const classes = []

		if (this.state.persons.length <= 2) {
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold')
		}

		return (
			<StyleRoot>
				<div className="App">
					<p className={classes.join(' ')}>Example text</p>
					<button style={style} onClick={this.togglePersonsHandler}>
						Switch name
					</button>
					{persons}
				</div>
			</StyleRoot>
		)
	}
}

export default Radium(App)
```

## intro styled components

styled-components je baliček ktori nám prídá kopec schopností pre naše react aplikácie.

- automatic critical css je schopnost kde styled component sleduje ktora komponenta sa vykresluje na stranke a automaticky vklada jej styly v najmensom potrebnom mnozstve alebo formate.
- ziadne className a menej chyb, znamena to ze kazdý pridaný štýl sa pridáva pomocou vygenerovanej unikatnej classy. Nikdy sa nestane to ze budem mat duplicitu a prepisanie si stylov medzi komponentami.
- lahsie mazanie a detekcia csska ktora je pouzita pre ktoru komponentu
- lahsia tvorba dynamickeho csska t.j. globalne styly sa daju jednoducho definovat z jedneho suboru a pouzivat nad vsetkymi styled komponentami
- lahsia udrzba kodu kedze stylujeme len v js suboroch
- automaticky prefix pre vsetky prehliadace.

ak chcem naisntalovat [styled-components](https://styled-components.com/)

```
npm install --save styled-components
```

alebo

```
yarn add --save styled-components
```

Pouzitie vramci funkcionalen komponentz v Person.js<br>

```jsx
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;

	@media (min-width: 500px) {
		.wrapper {
			width: 450px;
		}
	}
`

const Person = ({ name, age, children, click, changed }) => {
	return (
		<Wrapper>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</Wrapper>
	)
}

export default Person
```

prepis class komponenty so styled components v tejto komponente mame aj dynamicke css ktore sa meni na zaklade nejakej podmienky to vieme v styled komponent vytvorit takto

```jsx
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
```

prepis na funkcionalnu

```jsx
import React, { useState } from 'react'
import Person from '../../components/Person'
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

const App = () => {
	const [humans, setHumans] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])

	const [showHumans, setShowHumans] = useState(false)

	const deleteHumanHendler = indexOfHuman => {
		// nove pole, do ktoreho vlozim povodne pole humans
		const newHumans = [...humans]
		// toto nove pole vdaka splice zmazem
		newHumans.splice(indexOfHuman, 1)
		setHumans(newHumans)
	}

	const changeHumanName = (event, humanId) => {
		// v poli humans hladam konkretny index
		const indexOfHuman = humans.findIndex(item => {
			return item.id === humanId
		})
		// nove pole do ktoreho vlozim povodne pole humans aj s indexom
		const human = { ...humans[indexOfHuman] }
		// meno sa mi bude menit podla toho co budem pisat do inputu
		human.name = event.target.value

		const newHumans = [...humans]
		newHumans[indexOfHuman] = human

		setHumans(newHumans)
	}

	const toggleHumansHandler = () => {
		setShowHumans(!showHumans)
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
		<Wrapper>
			<Text humans={humans}>Example text</Text>
			<Button onClick={toggleHumansHandler} showHumans={showHumans}>
				Switch name
			</Button>
			{humansNewElement}
		</Wrapper>
	)
}

export default App
```

## Debugging react app error messages vramci neobsahujucich hodnot v premennej

[react dev tools doplnok](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)<br>

Skúsme definovať nepsravny pristup k premennej z event objektu a premenovat `event.target.value` na `event.input.value` nasledne otvorime v prehliadac a uvidime chybovu hlasku s chybou, v ktorom subore je dana chyba a na ktorom riadku v danom subore samozrejme tato chyba sa zobrazi po zmene stavu v inputoch pre dany Person komponent. Okrem zobrazenej chyby v prehliadaci mozeme pozriet v dev tools v terminaly dalsi vystup chybovej hlasky.

```jsx
import React, { useState } from 'react'
import Person from '../../components/Person'
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

const App = () => {
	const [humans, setHumans] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])

	const [showHumans, setShowHumans] = useState(false)

	const deleteHumanHendler = indexOfHuman => {
		const newHumans = [...humans]
		newHumans.splice(indexOfHuman, 1)
		setHumans(newHumans)
	}

	const changeHumanName = (event, humanId) => {
		const indexOfHuman = humans.findIndex(item => {
			return item.id === humanId
		})
		const human = { ...humans[indexOfHuman] }
		// human.name = event.target.value  <-- spravne to je takto
		// priklad ako vramci event premennej definujem input ktori sa v objekte nenachadza
		human.name = event.input.value

		const newHumans = [...humans]
		newHumans[indexOfHuman] = human

		setHumans(newHumans)
	}

	const toggleHumansHandler = () => {
		setShowHumans(!showHumans)
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
		<Wrapper>
			<Text humans={humans}>Example text</Text>
			<Button onClick={toggleHumansHandler} showHumans={showHumans}>
				Switch name
			</Button>
			{humansNewElement}
		</Wrapper>
	)
}

export default App
```

## Debugging react app hladanie logickych chyb pomocou nastroja dev tools a sourcemaps

ak napisem logicku chybu napr. `humanItem.id` na `humanItem.userId` ktore sa v objekte nenachadza v prehlidaci tuto chybu neodhalime teda musime zapnut devtools a pozriet sa do sources<br>
vramci priecinkovej strukturi src/App.js naznacime bod prerusenia vramci const indexOfHuman a zacneme znova pisat do inputu a tym ze sme defionvali prerusenie vykreslenie po zmene dat sa zastavi na tom mieste kde sme zaznacili cerveny kruzok t.j. debug mode, ak chceme ist do vnutra funkcie pouzijeme tretiu sipku v poradi smerom nadol. Ak by som prechadzal kod zhora nadol a mysou presuval nad premenne zistim kde je hodnota undefined a najdem chybu. Cize aktualna chyba bude ze v `humanItem` objekte sa nenachadza premenna `userId`

```jsx
import React, { useState } from 'react'
import Person from '../../components/Person'
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

const App = () => {
	const [humans, setHumans] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])

	const [showHumans, setShowHumans] = useState(false)

	const deleteHumanHendler = indexOfHuman => {
		const newHumans = [...humans]
		newHumans.splice(indexOfHuman, 1)
		setHumans(newHumans)
	}

	const changeHumanName = (event, humanId) => {
		const indexOfHuman = humans.findIndex(humanItem => {
			// return humanItem.id === humanId   <-- spravne to je takto
			// ak prepisem humanItem.id na humanItem.userId vytvorim logicku chzbu ktoru len tak neuvidim v prehliadaci a ani react app mi nepomoze
			return humanItem.usedId === humanId
		})
		const human = { ...humans[indexOfHuman] }
		human.name = event.target.value

		const newHumans = [...humans]
		newHumans[indexOfHuman] = human

		setHumans(newHumans)
	}

	const toggleHumansHandler = () => {
		setShowHumans(!showHumans)
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
		<Wrapper>
			<Text humans={humans}>Example text</Text>
			<Button onClick={toggleHumansHandler} showHumans={showHumans}>
				Switch name
			</Button>
			{humansNewElement}
		</Wrapper>
	)
}

export default App
```

## Debugging react app pouzivanie chybovych hranic

vramci Person si vytvorim nahodne generovanie chyby, ktora sa bezne deje pri requeste na databazu, moze a nemusi fungovat.

```jsx
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;

	@media (min-width: 500px) {
		.wrapper {
			width: 450px;
		}
	}
`

const Person = ({ name, age, children, click, changed }) => {
	const rnd = Math.random()

	if (rnd > 0.7) {
		throw new Error('Something went wrong')
	}

	return (
		<Wrapper>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</Wrapper>
	)
}

export default Person
```

potom si vytovrim HOC ErrorBoundary pomocou ktorej budem zachytavat chyby v komponentach. Pouziva sa to iba v pripade, ze mam nejaky kod o ktorom viem ze moze zlyhat a tiez na zaznam chyb v aplikacii, pocas pouzivania.<br>

podobny priklad v reacte [link](https://reactjs.org/docs/error-boundaries.html)

```jsx
import React, { Component } from 'react'

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: null,
		errorInfo: null,
	}

	componentDidCatch = (error, errorInfo) => {
		// na tomto mieste by sa mala pouzit nejaka sluzba ktora zaznamenava chyby
		this.setState({ hasError: true, errorMessage: error, errorInfo: errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage.toString()}</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
```

pouzitie

```jsx
import React, { useState } from 'react'
import Person from '../../components/Person'
import ErrorBoundary from '../../components/ErrorBoundary'
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

const App = () => {
	const [humans, setHumans] = useState([
		{ id: 'asdfa1', name: 'Janko', age: 28 },
		{ id: 'asdfa2', name: 'Duri', age: 27 },
		{ id: 'asdfa3', name: 'Vierka', age: 20 },
	])

	const [showHumans, setShowHumans] = useState(false)

	const deleteHumanHendler = indexOfHuman => {
		// nove pole, do ktoreho vlozim povodne pole humans
		const newHumans = [...humans]
		// toto nove pole vdaka splice zmazem
		newHumans.splice(indexOfHuman, 1)
		setHumans(newHumans)
	}

	const changeHumanName = (event, humanId) => {
		// v poli humans hladam konkretny index
		const indexOfHuman = humans.findIndex(item => {
			return item.id === humanId
		})
		// nove pole do ktoreho vlozim povodne pole humans aj s indexom
		const human = { ...humans[indexOfHuman] }
		// meno sa mi bude menit podla toho co budem pisat do inputu
		human.name = event.target.value

		const newHumans = [...humans]
		newHumans[indexOfHuman] = human

		setHumans(newHumans)
	}

	const toggleHumansHandler = () => {
		setShowHumans(!showHumans)
	}

	let humansNewElement = null
	if (showHumans) {
		humansNewElement = (
			<div>
				{humans.map((human, index) => (
					<ErrorBoundary key={human.id}>
						<Person
							changed={event => changeHumanName(event, human.id)}
							click={() => deleteHumanHendler(index)}
							name={human.name}
							age={human.age}
						/>
					</ErrorBoundary>
				))}
			</div>
		)
	}

	return (
		<Wrapper>
			<Text humans={humans}>Example text</Text>
			<Button onClick={toggleHumansHandler} showHumans={showHumans}>
				Switch name
			</Button>
			{humansNewElement}
		</Wrapper>
	)
}

export default App
```

## lepšia priečinkova štruktura projektu

nezabudať že ak mam veľa komponent v jednom subore je lepšie vytvoriť si priečinkovú štruktúru components a do tohto priečinka vytvarať svoje globalne komponenty ktoré bude používať nad celou aplikáciou

## state full and state less komponenty

state full komponent je komponent, ktory ma definovany nejaky zaciatocny stav a tento stav sa meni na zaklade nejakej logiky. State full komponenty ci uz class alebo funkcionalna komponenta maju rozne zapisy.

- class state full komponenta

```jsx
import React, { Component } from 'react'

export default class Example extends Component {
	state = {
		showTitle: false,
	}

	toggleTitleHandler = () => {
		this.setState({ showTitle: !this.state.showTitle })
	}

	render() {
		return (
			<div>
				<button onClick={this.toggleTitleHandler}>show title</button>
				{this.state.showTitle && this.props.title}
			</div>
		)
	}
}
```

- funkcionalna state full komponenta

```jsx
import React, { useState } from 'react'

const Example = props => {
	const [showTitle, setShowTitle] = useState(false)

	const toggleTitleHandler = () => {
		setShowTitle(!showTitle)
	}

	return (
		<div>
			<button onClick={toggleTitleHandler}>show title</button>
			{showTitle && props.title}
		</div>
	)
}

export default Example
```

- state less komponenty su bezstavove komponenty, ktore nemaju dynamicky meniaci obsah, len vykresluju obsah.

## class vs. funkcionalna komponenta

- class komponenta je objekt, ktory je doplneny o funkcionalitu z reactu.

```jsx
class NazovKomponenty extends Component {...}
```

- funkcionalna komponenta je jednoducha js funkcia, ktora vracia jsx kod.

```jsx
const NazovKomponenty = (props) => {...}
```

- class a funkcionalna komponenta sa lisi vramci manazovania stavu v komponente a vramci react metod, pre class existuju life cycle (zivotne cykly) a pre funkcionalne komponenty mame react hooks.
- kazda class komponenta ma vo vnutri dosah na vsetko pomocou slova `this`. Napriklad na stav v komponente je dosah `this.state.nazovStavu` alebo preposlana hodnota do class komponenty `this.props.preposlanaHodnota`.

### ---------------------------------------------------------------------------------------------

### Specialne schopnosti Reactu

#### <Fragment></Fragment> vs <></>

react fragment sluzi na obalenie elementov alebo javascriptu ak nechcem zbytocne vkladat obalovaci element

```jsx
import React, { Component } from 'react'
import Person from '../Person'

export default class Persons extends Component {
	render() {
		return (
			<>
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
			</>
		)
	}
}
```

alebo Fragment

```jsx
import React, { Component, Fragment } from 'react'
import Person from '../Person'

export default class Persons extends Component {
	render() {
		return (
			<Fragment>
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
			</Fragment>
		)
	}
}
```

### Heigher order components (HOC)

je komponeta vyžšieho radu, inak povedané je to komponenta funkcionalna alebo classova ktorá prevezme komponent a vráti nový doplnený komponent.

HO v jednoduchom javascripte priklad

```js
function nasobok(cislo) {
	return x => x * cislo
}

const nasobokDvoma = nasobok(2)
console.log(nasobokDvoma(2)) // 4
const nasobokTroma = nasobok(3)
console.log(nasobokTroma(3)) // 9
const nasobokDesiatimi = nasobok(10)
console.log(nasobokDesiatimi(3)) // 30
```

priklad HOC v reacte doplnanie atributu name

naskor sme vyrobili funkcionalnu komponentu Hello

```jsx
import React from 'react'

const Hello = props => {
	return <h1>Hello {props.name}!</h1>
}

export default Hello
```

nasledne vytvorim HO funkciu withNameReact s class komponentov

```jsx
import React from 'react'

export default function withNameReact(WrappedComponent) {
	// zasielam do vnutra komponentu ktora bude doplnena o atribut name
	return class extends React.Component {
		render() {
			// vraciam zaslanu komponentu do vnutra uz s definovanym name atributom
			return <WrappedComponent name="React" {...this.props} />
		}
	}
}
```

zapis cez funkciu

```jsx
import React from 'react'

export default function withNameReact(WrappedComponent) {
	return function ({ children, ...props }) {
		return <WrappedComponent name="React" {...props} />
	}
}
```

zapis cez arrow function

```jsx
import React from 'react'

const withNameReact = WrappedComponent => ({ children, ...props }) => (
	<WrappedComponent name="React" {...props} />
)

export default withNameReact
```

použitie v App

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import withNameReact from './hoc/withNameReact'

// vytvorim si novy komponentu ktora bude obsahovat HOC
const NewComponent = withNameReact(Hello)

ReactDOM.render(<NewComponent />, document.getElementById('root'))
```

priklad HOC v reacte pridavanie farby

upravim si Hello komponentu o nacitanie preposlanych props

```jsx
import React from 'react'

const Hello = props => {
	return <h1 {...props}>Hello {props.name}!</h1>
}

export default Hello
```

vytvorim si HOC withColor ktora bude pridavat farbu pisma cervena

```jsx
import React from 'react'

const withColor = Element => props => (
	<Element style={{ color: 'red' }} {...props} />
)

export default withColor
```

pouzitie v App

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import withColor from './hoc/withColor'

// vytvorim si novy komponentu ktora bude obsahovat HOC
const NewComponent = withColor(Hello)

ReactDOM.render(<NewComponent />, document.getElementById('root'))
```

priklad HOC v reacte reverse textu preposlany cez children

priklad HOC funkcie ktora reversne children text a vrati novu komponentu s reversnutym textom

```jsx
import React from 'react'

const withReverse = PassedComponent => props => {
	return (
		<PassedComponent {...props}>
			{props.children.split('').reverse().join('')}
		</PassedComponent>
	)
}

export default withReverse
```

pouzitie v App

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import withReverse from './hoc/withReverse'

const Name = props => <span>{props.children}</span>

const ReversedName = withReverse(Name)

ReactDOM.render(
	<ReversedName>Hello</ReversedName>,
	document.getElementById('root')
)
```

[link na priklad s HOC ktora obsahuje metody na kontrolu ci je user prihlaseny alebo nie](https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006)

#### PropTypes [link](https://reactjs.org/docs/typechecking-with-proptypes.html)

tento doplnok vieme nainstalovat pomocou prikazu

```
npm i prop-types

```

priklad pouzitia

```jsx
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
```

a dalsi priklad

```jsx
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;

	@media (min-width: 500px) {
		.wrapper {
			width: 450px;
		}
	}
`

const Person = ({ name, age, children, click, changed }) => {
	// const rnd = Math.random()
	console.log('[Person.js] rendering')

	// if (rnd > 0.7) {
	// 	throw new Error('Something went wrong')
	// }

	return (
		<Wrapper>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</Wrapper>
	)
}

Person.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	children: PropTypes.element.isRequired,
	click: PropTypes.func.isRequired,
	changed: PropTypes.func.isRequired,
}

export default Person
```

## react life cycles

react umoznuje definovat komponenty ako triedy alebo funkcie. Komponenty definovane ako triedy v sucasnosti poskytuju viac funkcii, ktore nazyvame `life cycle`. Ak chceme definovat class komponent od reactu, musime rozsirit tuto classu o React.Component

```jsx
import React from 'react'

class Example extends React.Component {
	render() {
		return <h1>Hello,{this.props.name}</h1>
	}
}
```

Jedina metoda, ktoru musime v class komponente vzdy definovat je `render()`, vsetky ostatne life cycle metody su volitelne.<br>

Kazda react class komponenta ma niekolko life cycle metod, ktore mozeme prepisat, tak aby sa spustili na kod v konkretnych casoch procesu, t.j. od inicializacie stavu v komponente pri zachytavani zmeny stavu, zmenit stav pred vykreslenim v UI do prehliadaca,...

### v ramci class komponents mame tieto life cycle metody

tieto metody sa volaju vramci class komponenty v nasledujucom poradi, ked sa vytvara instancia komponenty a vklada sa do DOM, ako celok ich mozeme oznacit za `mounting` metody:

- constructor(props)
- static getDerivedStateFromProps(props,state)
- render()
- componentDidMount()

aktualizacia moze byt sposobena zmenami props alebo stavu. Pri opakovanom vykreslovani komponenty sa tieto metody zapisuju v nasledujucom poradi, tiez ich mozeme oznacit za `updating` metody:

- static getDerivedStateFromProps(props,state)
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate(prevProps,prevState)
- componentDidUpdate(prevProps,prevState,snapshot)

ked sa komponent odstranuje z DOM vramci class komponenty pouzivame na to metodu `componentWillUnmount()`. Radi sa medzi `unmounting` metodu. Vramci react buducnosti bude tato metoda odstranena, nedoporucuje sa pouzivat pri tvorbe komponent.

- componentWillUnmount()

tieto metody sa volaju ked dojde k chybe pocas vykreslovania alebo v metode life cycle alebo v konstruktore. Zachytavaju sa chyby od miesta kde sme tieto life cycle pouzili az po vsetky komponenty, ktore su obalene touto komponentou. Radime ich medzi `error handling` metody:

- static getDerivedStateFromError()
- componentDidCatch()

### ---------------------------------------------------------------------------------------------

### mounting metody:

#### constructor(props)

ked je component vytvoreny ako prve je volana metoda konstruktor. Je to defaultna metoda vramci ES6 class schopnosti. Podstatna vec je, ze tento konstruktor dokaze prijimat props z vonku ale vo vnutri konstruktora sa musi volat metoda `super(props)`. Samotny konstruktor nemusi byt definovany v kazdej class komponente. Okrem nacitania props sa v konstuktore definuju vsetky zaciatocne stavy komponenty. Vo vnutri konstruktora by sa nemali zapisovat metody HTTP requestov alebo zoradovanie niecoho vramci local storagu v prehliadaci, alebo zasielanie nejakych dat tretej strane.<br>

Vramci class App componenty sme definovali atribut title s hodnoutou takto:

```jsx
<App title="example title" />
```

danu premennu `title` vieme ziskat a definovat v konstruktore ako state takto:

```jsx
import React, { Component } from 'react'

export default class Example extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.title,
			showTitle: false,
		}
	}

	toggleTitleHandler = () => {
		this.setState({ showTitle: !this.state.showTitle })
	}

	render() {
		return (
			<div>
				<button onClick={this.toggleTitleHandler}>show title</button>
				{this.state.showTitle && this.state.title}
			</div>
		)
	}
}
```

priklad nacitania premennej bez konstruktora, ktory sa uz nepouziva

```jsx
import React, { Component } from 'react'

export default class Example extends Component {
	state = {
		showTitle: false,
	}

	toggleTitleHandler = () => {
		this.setState({ showTitle: !this.state.showTitle })
	}

	render() {
		return (
			<div>
				<button onClick={this.toggleTitleHandler}>show title</button>
				{this.state.showTitle && this.props.title}
			</div>
		)
	}
}
```

#### static getDerivedStateFromProps(props,state)

je to metoda, ktora sa vola tesne pred volanim metody `render()`, t.j. pri uvodnom nacitani komponenty a tiez aj pri zmene stavu, teda aktualizaciach. Tato metoda by mala vracat objekt na aktualizaciu stavu, alebo null. Tato metoda sa zriedkavo pouziva, ked stav zavisi od zmien v props v priebehu casu. <br>
Napriklad by mohlo byt uzitocne implementovat komponent `<Transition>`, ktory porovnava jeho predchadzajuce a nasledujuce children a rozhoduje, ktore z nich sa budu animovat.

```jsx
ReactDOM.render(<Example favcol="yellow" />, document.getElementById('root'))
```

```jsx
import React, { Component } from 'react'

export default class Example extends Component {
	state = {
		favoriteColor: 'red',
	}

	static getDerivedStateFromProps(props, state) {
		return {
			favoriteColor: props.favcol,
		}
	}
	render() {
		return <h1>My favorite color is {this.state.favoriteColor}</h1>
	}
}
```

#### render()

Jedina metoda, ktoru musime definovat v class komponente je `render()`

#### componentDidMount()

Metoda sa vola po vlozeni a vykresleni metody do DOM. V nej by sme mohli definovat nejakeho posluchaca na nejaky event, nejaky asynchronny kod, request na databazu.

```jsx
ReactDOM.render(<Example />, document.getElementById('root'))
```

```jsx
import React, { Component } from 'react'

export default class Example extends Component {
	state = {
		favoriteColor: 'red',
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: 'yellow' })
		}, 3 * 1000)
	}
	render() {
		return <h1>My favorite color is {this.state.favoriteColor}</h1>
	}
}
```

najskôr zašlime title atribut do App komponenty takto

```jsx
<App title="Example title" />
```

definujem si console.log pre constructor, getDerivedStateFromProps, componentDidMount, vramci render metody App komponenty a vo vnútri Person komponenty a pokusme sa vytvorit novu komponentu Persons. Tato komponenta bude vykreslovat zoznam humans tiez definujme console log v tejto komponente pre kazdy namapovany prvok z pola. Pozrime sa kedy su dane console.logi volane v prehliadaci v dev tools terminaly. Vidime najskôr log constructor potom getDerivedStateFromProps nasledne render nasledne componentDidMount. Nevidime log ktory je definovany v Persons komponente, pretoze to nie je este vykreslene v DOM. Po kliknuti na tlacidlo uvidime aj dany Persons a person rendering kedze dane komponenty boli volane a aby sa vykreslili...

```jsx
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
				<div>
					{this.state.humans.map((human, index) => {
						console.log('[Persons.js] rendering')

						return (
							<Person
								key={human.id}
								changed={event => this.changeHumanName(event, human.id)}
								click={() => this.deleteHumanHendler(index)}
								name={human.name}
								age={human.age}
							/>
						)
					})}
				</div>
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
```

```jsx
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
```

a tiez si defijme console log v Person komponente takto

```jsx
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;

	@media (min-width: 500px) {
		.wrapper {
			width: 450px;
		}
	}
`

const Person = ({ name, age, children, click, changed }) => {
	const rnd = Math.random()
	console.log('[Person.js] rendering')

	return (
		<Wrapper>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</Wrapper>
	)
}

export default Person
```

### ---------------------------------------------------------------------------------------------

### update metody:

#### shouldComponentUpdate()

metoda je volana pred vykreslenim do DOM. Nemala by sa pouzivat ak pouzivame metodu `forceUpdate()`
je metoda ktora ma vraciat boolean hodnotu a ta urcuje kedy ma alebo nema komponenta pokracovat vo vykreslvoani do DOM. Málo používaná metoda a nepoužívať v nej porovnania hodnot vramci JSON.strigify

```jsx
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { favoriteColor: 'red' }
	}

	shouldComponentUpdate() {
		console.log('[Header.js] shouldComponentUpdate')
		return false
	}

	changeColor = () => {
		this.setState({ favoriteColor: 'blue' })
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
				<button type="button" onClick={this.changeColor}>
					Change color
				</button>
			</div>
		)
	}
}

ReactDOM.render(<Header />, document.getElementById('root'))
```

priklad s kladnym return ktori povoli prekreslenie

```jsx
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { favoriteColor: 'red' }
	}

	shouldComponentUpdate() {
		console.log('[Header.js] shouldComponentUpdate')
		return true
	}

	changeColor = () => {
		this.setState({ favoriteColor: 'blue' })
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
				<button type="button" onClick={this.changeColor}>
					Change color
				</button>
			</div>
		)
	}
}

ReactDOM.render(<Header />, document.getElementById('root'))
```

#### getSnapshotBeforeUpdate(prevProps, prevState)

tato metoda sa vyvola tesne predtym, ako sa posledny vykresleny vstup vlozi do DOM. Umoznuje vramci komponenty zachytit props a state pred aktualizaciou, co znamena ze aj po aktualizacii je moze skontrolovat ake hodnoti boli pred aktualizaciou. Inac povedan prepisem po prvy krat stav red na novy stav yellow a vramci metody `getSnapshotBeforeUpdate(prevProps, prevState)` mam stale ulozeny predosli stav red ako v tomto priklade.

```jsx
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

	getSnapshotBeforeUpdate(prevProps, prevState) {
		document.getElementById(
			'div1'
		).innerHTML = `Before the update, the favorite was ${prevState.favoriteColor}`
		return null
	}

	componentDidUpdate() {
		document.getElementById(
			'div2'
		).innerHTML = `The updated favorite is ${this.state.favoriteColor}`
	}

	changeColor = () => {
		this.setState({ favoriteColor: 'blue' })
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
				<button type="button" onClick={this.changeColor}>
					Change color
				</button>
				<div id="div1"></div>
				<div id="div2"></div>
			</div>
		)
	}
}
```

#### componentDidUpdate(prevProps, prevState, snapshot)

tato metoda sa vola po kazdej zmene stavu v komponente. Ci uz zmenim stav z hora vramci preposlanej props alebo vnutorny stav komponenty alebo stav z metody `getSnapshotBeofreUpdate()`

```jsx
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
```

### ---------------------------------------------------------------------------------------------

### unmounting metoda:

#### componentWillUnmount

ked sa komponent odstranuje z DOM vramci class komponenty pouzivame na to metodu `componentWillUnmount()`. Radi sa medzi `unmounting` metodu. Vramci react buducnosti bude tato metoda odstranena, nedoporucuje sa pouzivat pri tvorbe komponent. Priklad:

```jsx
import React, { Component } from 'react'
import Child from '../Child'

export default class Container extends Component {
	constructor(props) {
		super(props)
		this.state = { show: true }
	}
	deleteChild = () => {
		this.setState({ show: false })
	}

	render() {
		let myheader = null
		if (this.state.show) {
			myheader = <Child />
		}
		return (
			<div>
				{myheader}
				<button type="button" onClick={this.deleteChild}>
					Delete Child
				</button>
			</div>
		)
	}
}
```

a pouzitie componentWillUnmount()

```jsx
import React, { Component } from 'react'

export default class Child extends Component {
	componentWillUnmount() {
		alert('Child component je unmounted.')
	}
	render() {
		return <h1>Hellow world!</h1>
	}
}
```

### ---------------------------------------------------------------------------------------------

### Error handling metody:

#### static getDerivedStateFromError()

Tento životný cyklus sa zavolá pri vzniku chyby v definovanej komponente. Dostane chybu, ktorá bola vyvolaná ako parameter a mala by vratiť hodnotu do stavu aktualizácie.

```jsx
import React, { Component } from 'react'

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
```

ak by som chcel otestovať tuto metodu musim vytvoriť vlastný error a to týmto spôsobom

```jsx
throw new Error('Something went wrong')
```

```jsx
ReactDOM.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	document.getElementById('root')
)
```

### componentDidCatch(error, info)

Tento životný cyklus sa vyvola po vyvolani chyby v definovanej komponente. Prijmam dva parametre:

- error - chyba, ktora bola vyvolana.
- info - objekt obsahujuci informacie o tom, ktora komponenta sposobila chybu.

```jsx
import React, { Component } from 'react'

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: null,
		errorInfo: null,
	}

	componentDidCatch = (error, errorInfo) => {
		// na tomto mieste by sa mala pouzit nejaka sluzba ktora zaznamenava chyby
		this.setState({ hasError: true, errorMessage: error, errorInfo: errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage.toString()}</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
```

```jsx
import React, { Component } from 'react'

export default class Container extends Component {
	trowError = () => {
		throw new Error('Something went wrong')
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.trowError}>
					create error
				</button>
			</div>
		)
	}
}
```

```jsx
ReactDOM.render(
	<ErrorBoundary>
		<Container />
	</ErrorBoundary>,
	document.getElementById('root')
)
```

alebo môžeme použiť bežný try a catch

```jsx
import React, { Component } from 'react'

export default class Container extends Component {
	trowError = () => {
		try {
			throw new Error('Something went wrong')
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.trowError}>
					create error
				</button>
			</div>
		)
	}
}
```

### ---------------------------------------------------------------------------------------------

### react hooks pre funkcionalne komponenty

hooky môžme používať len vo funkcionalných komponentách a len vo vnútri komponente.

#### useState()

tento hook slúži na uloženie stavu, v pravej časti je metoda hooku useState ktora očakáva vstupný parameter ako začiatočný stav a v ľavej časti hooku je pole pomocou ktorého deštrujeme ľavu časť hoooku t.j. vyťahujeme hodnoty konkretne state je hodnota stavu buď začiatočný stav alebo prepisaný nový stav a druhá hodnota v poli je metoda pomocou ktorej viem prepisať začiatočný stav na nový stav.

```jsx
const [state, setstate] = useState(initialState)
```

```jsx
import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			Počet: {count}
			<div>
				<button onClick={() => setCount(0)}>Reset</button>
			</div>
			<div>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
			<div>
				<button onClick={() => setCount(count - 1)}>-</button>
			</div>
		</div>
	)
}

export default Counter
```

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

#### useEffect()

tato metoda sa vždy vola pri začiatočnom načítani komponenty a tiež pri každej zmene stavu či props. Táto metoda je kombinaciou týchto class lifecycle metod: `componentDidMount()`, `componentDidUpdate()` a `componentWillUnmount()`. Tento hook sa väčšinou používa na načitanie začiatočných dát ak robime request nad databazou z back-endu pomocou fetch, axios,...

```jsx
const Animation = () => {
	const [start, setStart] = useState(false)
	const [color, setColor] = useState('red')

	useEffect(() => {
		console.log('useEffect', start)
		const timer = setTimeout(() => {
			console.log('rotating stop')
			setColor('red')
			setStart(false)
		}, 3000)
		return () => clearTimeout(timer)
	}, [start]) // tým že sme definovali v poli start stav useEffect je volany na začiatku načitania stranky a vždy po zmene stavu start

	return (
		<Center>
			<Spin start={start} color={color} />
			<button type="button" onClick={() => setStart(true)}>
				start rotating
			</button>
			<button type="button" onClick={() => setStart(false)}>
				stop rotating
			</button>
			<button type="button" onClick={() => setColor('blue')}>
				change color
			</button>
		</Center>
	)
}

export default Animation
```

alebo

```jsx
import React, { useState, useEffect } from 'react'

const Animation = () => {
	const [name, setName] = useState({ title: '', first: '', last: '' })

	useEffect(async () => {
		const res = await fetch('https://randomuser.me/api/')
		const json = await res.json()
		setName(json.results[0].name)
	}, []) // ak definujem prazdne pole pre useEffect to znamena ze je volany iba raz a to na zaciatku zobrazenia stranky s touto komponentou

	return (
		<div>{`The person name is: ${name.title} ${name.first} ${name.last}`}</div>
	)
}
```

alebo

```jsx
const Animation = () => {
	const [start, setStart] = useState(false)
	const [color, setColor] = useState('red')

	useEffect(() => {
		console.log('useEffect', start)
		const timer = setTimeout(() => {
			console.log('rotating stop')
			setColor('red')
			setStart(false)
		}, 3000)
		return () => clearTimeout(timer)
	}) // tým že sme nedefinovali ani pole start useEffect je volany na začiatku načitania stranky a po každej zmene stavu

	return (
		<Center>
			<Spin start={start} color={color} />
			<button type="button" onClick={() => setStart(true)}>
				start rotating
			</button>
			<button type="button" onClick={() => setStart(false)}>
				stop rotating
			</button>
			<button type="button" onClick={() => setColor('blue')}>
				change color
			</button>
		</Center>
	)
}

export default Animation
```

#### React.createContext() vs useContext() [link](https://reactjs.org/docs/context.html#reactcreatecontext)

React Context API je spôsob, ako v podstate vytvárať globálne premenné, ktoré môžu byť prenášané v aplikácii React.Je to alternatíva k preposielaniu props. Kontext poskytuje spôsob, ako preniesť dáta cez strom komponentov bez nutnosti definovania a odovzdávania hodnoty props na každej úrovni.

Predstavme si, že mám nejaké informácie, ktoré chcem aby boli k dispozícii kdekoľvek alebo všade v každej react komponente.

##### React.createContext()

Najskôr si vytvorim konštantu UserContext do ktorej vložim vytvorenie kontextu `React.createContext()`. Následne si vytvorím dve košntanty prvá bude mať ľubovoľný názov so slovom Provider ktorá bude obshaovať `UserContext.Provider` a druhá konštanta bude mať ľubovoľný názov so slovom Consumer ktorá bude obsahovať `UserContext.Consumer`. Samozrejme ak ich chceme niekde v priečinkovej štrukture použiť musia byť vyexportované. To čo tieto dve konštanty teda komponenty robia, je jednoduché:

- UserProvider je komponenta pre ktorú môžem definovať globalny atribut s hodnotou value
- UserConsumer je komponenta ktorou keď obalim inú komponentu dokážem preposlať všetky definované hodnoty v UserProvider.

```jsx
import React from 'react'

const UserContext = React.createContext()

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext
```

UserProvider

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'
import { UserProvider } from './context/userContext'
import * as serviceWorker from './serviceWorker'

const App = () => {
	// user konštanta bude globalne preposlana všade kde použijem UserConsumer
	const user = { name: 'Duri traktorista', loggedIn: true }

	return (
		<UserProvider value={user}>
			<HomePage />
		</UserProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

Usercontext

```jsx
import React, { Component } from 'react'
import UserContext from '../../context/userContext'

export default class HomePage extends Component {
	static contextType = UserContext
	render() {
		return <div>{this.context.name}</div>
	}
}
```

alebo modernejší zapis

```jsx
import React, { Component } from 'react'
import { UserConsumer } from '../../context/userContext'

export default class HomePage extends Component {
	render() {
		return <UserConsumer>{props => <div>{props.name}</div>}</UserConsumer>
	}
}
```

##### useContext()

naskôr vytvorim context

./context/ColorContext/index.js

```jsx
import React from 'react'

export const ColorContext = React.createContext()
```

./index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'
import { ColorContext } from './context/ColorContext'
import * as serviceWorker from './serviceWorker'

const App = () => {
	const colors = {
		blue: 'blue',
		white: '#fff',
		black: '#000',
	}
	return (
		<ColorContext.Provider value={colors}>
			<HomePage />
		</ColorContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
```

pouzite hooku `useContext` namiesto `Consumer` hodnoty z kontextu

```jsx
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'

const HomePage = () => {
	const colors = useContext(ColorContext)
	console.log(colors)
	return <div>Duri traktorista</div>
}
export default HomePage
```

##### useMemo()

Očakava dve vstupné hodnoty a to funkciu ktoru chcem optimalizovať keď sa zmenia vstupy a druhá vstupná hodnota je pole [] v ktorom definujem premenne podla ktorych useMemo nebude pouzivat cash pamäť ale znova danú funkciu prevolá. Táto optimalizácia pomáha vyhnúť sa nákladným vypočtom pri každom vykreslení komponenty.

UseMemo umožňuje zapamätať si výsledok funkcie a tento výsledok bude vraciať kým sa nezmení pole závislotí.

```jsx
import React, { useState } from 'react'

const Welcome = () => {
	const [msg, setMsg] = useState('Hello')

	const reverseMsg = () => {
		console.log('ahoj')
		return msg.split('').reverse().join('')
	}

	return (
		<div>
			<h1>{msg}</h1>
			<h1>{reverseMsg()}</h1>
			<h1>{reverseMsg()}</h1>
			<button onClick={() => setMsg('vajco')}>prevrat text v nadpisoch</button>
		</div>
	)
}
export default Welcome
```

kedže sme použíli reverseMsg funkciu na dvoch miestach na dosiahnutie rovnakého výsledku v tomto prípade môžeme použíť na optimalizaicu kódu useMemo hook takto

```jsx
import React, { useState, useMemo } from 'react'

const Welcome = () => {
	const [msg, setMsg] = useState('Hello')

	const reverseMsg = useMemo(() => {
		console.log('ahoj')
		return msg.split('').reverse().join('')
	}, [msg])

	return (
		<div>
			<h1>{msg}</h1>
			<h1>{reverseMsg}</h1>
			<h1>{reverseMsg}</h1>
			<button onClick={() => setMsg('vajco')}>prevrat text v nadpisoch</button>
		</div>
	)
}
export default Welcome
```

Vo vyššie uvedenom kóde sme zabalili funkciu pomocou hooku useMemo() tato funkcia vráti memoizovanú hodnotu alebo hodnotu uloženú v pamäti, ktorá je uložená vo vnútri premennej reverseMsg.

Teraz môžeme použiť reverseMsg na viacerých miestach, ale funkcia sa spustí iba raz a nabudúce okamžite vráti hodnotu z vyrovnávacej pamäte.

Háčik useMemo znova spustí túto funkciu, len keď sa zmení jedna z jej závislostí.

To znamená, že ak klikneme na tlačidlo Change Msg, bude aktualizovaná vlastnosť msg. takže sa zmení závislosť háčika useMemo a znova spustite funkciu, aby ste získali novú hodnotu v pamäti.

Pri rozhodovaní o aktualizácii DOM React najskôr vykreslí vašu komponentu a potom porovná výsledok s predchádzajúcim výsledkom vykreslenia. Ak sú výsledky vykreslenia odlišné, React aktualizuje DOM.

Porovnanie vysledku súčastného a predchádzajúceho vykreslenia je rýchle. Za určitých okolností však môžeme tento proces urýchliť.

Keď je komponent zabalený do React.memo(MojaKomponenta), React komponent vykresli a zapise si vysledok. Ak sú nové props pred ďalším vykreslením rovnaké, React znova použije memoizovaný výsledok, ktory preskočí a rovno komponentu vykresli.

```jsx
import React from 'react'

export const Movie = props => {
	return (
		<div>
			<div>Movie title: {props.title}</div>
			<div>Release data: {props.releaseDate}</div>
		</div>
	)
}

export const MemoizedMovie = React.memo(Movie)
```

```jsx
const App = () => {
	return (
		<>
			<MemoizedMovie title="Heat" releaseDate="December 15. 1999" />
			<MemoizedMovie title="Heat" releaseDate="December 15. 1999" />
		</>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
```

#### useCallback()

useCallback funkcia ma dve vstupne premenne a to anonymnu funkciu a pole s prvkami alebo prazdne pole. Ak je definovany prvok v tomto poly a zmeni sa jeho stav, tak sa prevola ta anonymna funkcia. Dokaze si uchovat vyslednu hodnotu tejto funkcie po zavolani a porovnat s novym stavom.

```jsx
const memoizedCallback = useCallback(() => {
	doSomething(a, b)
}, [a, b])
```

useCallback funkcia dokaze memoizovat alebo uchovavat hodnotu zo spatneho volania funkcie, ktora sa meni iba ak sa zmenila jedna premenna zo zavislosti

```jsx
import React, { useState, useRef, useCallback } from 'react'

const useCountRenders = () => {
	const renders = useRef(0)
	console.log('Renders: ', renders.current++)
}

const Hello = React.memo(props => {
	useCountRenders()
	return <button onClick={() => props.increment(5)}>Hello</button>
})

function Example() {
	const [count, setCount] = useState(0)
	const increment = useCallback(n => setCount(c => c + n), [setCount])

	return (
		<div>
			<Hello increment={increment} />
			<div>Count: {count}</div>
		</div>
	)
}

export default Example
```

##### useRef()

useRef hook nám pomáha získať prístup k DOM uzlom alebo html prvkom, aby sme mohli s týmto prvkom samotný DOM iteragovať, napríklad prístup k hodnote vstupného prvku alebo zaostrenie vstuného prvku.

```jsx
import React, { useRef } from 'react'

const TextInput = () => {
	const inputRef = useRef(null)
	const handleFocus = () => {
		console.log(inputRef)
		inputRef.current.focus()
	}
	return (
		<div>
			<input placeholder="name" ref={inputRef} />
			<button onClick={handleFocus}>daj kurzor do inputu</button>
		</div>
	)
}
export default TextInput
```

Vo vyššie uvedenom priklade sme naimportovali hook useRef a potom sme vyvolali tento hook s počiatočnou hodnotou null.

V inpute sme definovali ref atribut s hodnotou inputRef, aby sme k tomuto input elementu mali pristup pomocou premennej inputRef.current

```jsx
import React, { Component } from 'react'

export default class FormRef extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		this.state = {
			value: '',
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ value: this.inputRef.current.value })
	}

	render() {
		return (
			<div>
				<h1>React Ref - createRef</h1>
				<h3>value: {this.state.value}</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={this.inputRef} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
```

##### useReducer

```js
const numbers = [175, 50, 25]

const sum = (total, num) => {
	return total + num
}

console.log(numbers.reduce(sum))
```

`reduce` metoda redukuje pole na jednu hodnotu. Tato metoda vykononá definovanú funkciu pre každý prvok z pola z ľava do prava. Vratena hodnota z definovane funkcie je ulozena do akumulatora total.

```js
pole.reduce(function(začiatočná_hodnota_alebo_predchadzajuca_navaratova_hodnota_z_funkcie, hodnota_aktualneho_prvku, index_aktualneho_prvku, pole), zaciatocna_hodnota)
```

priklad pocitadla v reacte pomocou useState

```jsx
import React, { useState } from 'react'

export function Example1() {
	const [state, setstate] = useState(0)

	const spocitaj = () => {
		setstate(state + 1)
	}

	const odpocitaj = () => {
		setstate(state - 1)
	}

	const reset = () => {
		setstate(0)
	}
	return (
		<>
			počet: {state}
			<button onClick={odpocitaj}>-</button>
			<button onClick={spocitaj}>+</button>
			<button onClick={reset}>reset</button>
		</>
	)
```

priklad pocitadla aj s resetom pomocou useReducer

```jsx
import React, { useReducer } from 'react'

export function Example1() {
	const reducer = (count, action) => {
		switch (action) {
			case 'spocitaj':
				return count + 1
			case 'odpocitaj':
				return count - 1
			case 'reset':
				return 0
			default:
				throw new Error()
		}
	}

	const [count, dispatch] = useReducer(reducer, 0)

	return (
		<>
			počet: {count}
			<button onClick={() => dispatch('odpocitaj')}>-</button>
			<button onClick={() => dispatch('spocitaj')}>+</button>
			<button onClick={() => dispatch('reset')}>reset</button>
		</>
	)
}
```
