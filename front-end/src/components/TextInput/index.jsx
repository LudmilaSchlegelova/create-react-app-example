import React, { useRef } from 'react'

const TextInput = () => {
	const inputRef = useRef(null)
	const handleFocus = () => {
		console.log(inputRef)
		inputRef.current.focus()
	}
	return (
		<div>
			<input placeholder="name" ref={inputRef} />
			<button onClick={handleFocus}>daj kurzor do inputu</button>
		</div>
	)
}
export default TextInput
