import React, { useState, useContext, createContext } from 'react'

//preco count je 1?
const CounterContext = createContext({ count: 1 })

const AwareComponent = () => {
	const counter = useContext(CounterContext)

	return (
		<div>
			<p>You clicked {counter} times</p>
		</div>
	)
}

const UnAwareComponent = () => (
	<div>
		<p>Unaware Component</p>
		<AwareComponent />
	</div>
)

const UseContextComponent = () => {
	const [count, updateState] = useState(0)

	return (
		<CounterContext.Provider value={count}>
			<div>
				<div>
					<p>Provider</p>
					<button onClick={() => updateState(count + 1)}>Increment</button>
				</div>
				<UnAwareComponent />
			</div>
		</CounterContext.Provider>
	)
}

export default UseContextComponent
