import React from 'react'
import ReactDOM from 'react-dom'
// import ThemeProvider from 'styled-components'
import './styles/reset.css'
// import Example from './components/Example'
import Header from './components/Header'
// import App from './layout/App'
// import AppS from './layout/AppS'
import * as serviceWorker from './serviceWorker'

// const theme = {
// 	main: 'mediumseagreen',
// }

ReactDOM.render(<Header />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
