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
