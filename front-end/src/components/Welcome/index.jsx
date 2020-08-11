import React, { useState, useMemo } from 'react'

export default function Welcome() {
	const [msg, setMsg] = useState('Hello')

	const reverseMsg = useMemo(() => {
		console.log('ahoj')
		return msg.split('').reverse().join('')
	}, [msg])

	return (
		<div>
			<h1>{msg}</h1>
			<h1>{reverseMsg}</h1>
			<h1>{reverseMsg}</h1>
			<button onClick={() => setMsg('vajco')}>prevrat text v nadpisoch</button>
		</div>
	)
}
