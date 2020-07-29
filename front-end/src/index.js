import React from 'react'
import ReactDOM from 'react-dom'
// import ThemeProvider from 'styled-components'
import './styles/reset.css'
// import Hello from './components/Hello'
// import withReverse from './hoc/withReverse'
// import withColor from './hoc/withColor'
// import withNameReact from './hoc/withNameReact'
// import Persons from './components/Persons'
// import Example from './components/Example'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Container from './components/Container'
// import Counter from './components/Counter'
// import Animation from './components/Animation'
// import Input from './components/Input'
// import ErrorBoundary from './components/ErrorBoundary'
import App from './layout/App'
// import AppS from './layout/AppS'
import * as serviceWorker from './serviceWorker'

// const theme = {
// 	main: 'mediumseagreen',
// }

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
