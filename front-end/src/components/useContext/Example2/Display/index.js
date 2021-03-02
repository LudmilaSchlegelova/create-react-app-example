// import useContext (or we could write React.useContext)
import React, { useContext } from 'react'

// Create a Context
const NumberContext = React.createContext()
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
	// Use the Provider to make a value available to all
	// children and grandchildren
	return (
		<NumberContext.Provider value={42}>
			<div>
				<Display />
			</div>
		</NumberContext.Provider>
	)
}

function Display() {
	const value = useContext(NumberContext)
	return <div>The answer is {value}.</div>
}

export default App
