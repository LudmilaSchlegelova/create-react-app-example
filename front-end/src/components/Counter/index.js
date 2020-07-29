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
