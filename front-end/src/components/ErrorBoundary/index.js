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
