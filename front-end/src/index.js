import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
// import Counter from '../src/components/useContext/Example1/Counter'
// import App from '../src/components/useContext/Example2/Display'
// import HeaderBar from '../src/components/useContext/Example2/HeaderBar'
// import C from '../src/components/useContext/Example3/ComponentC'
import UserProvider from '../src/components/useContext/Example4/UserContext'
import App from '../src/components/useContext/Example4/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	// <Counter />,
	// <App />,
	// <HeaderBar />,
	// <C />,
	<UserProvider>
		<App />
	</UserProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
