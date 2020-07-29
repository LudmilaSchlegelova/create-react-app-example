import React, { Component } from 'react'

export default class Child extends Component {
	componentWillUnmount() {
		alert('Child component je unmounted.')
	}
	render() {
		return <h1>Hellow world!</h1>
	}
}
