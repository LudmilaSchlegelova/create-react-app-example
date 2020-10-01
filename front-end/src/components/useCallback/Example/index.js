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
