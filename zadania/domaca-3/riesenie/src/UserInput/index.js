import React from 'react'

const UserInput = ({ changed, currentName }) => {
	const inputStyle = {
		border: '2px solid red',
	}

	return (
		<input
			type="text"
			style={inputStyle}
			onChange={changed}
			value={currentName}
		/>
	)
}

export default UserInput
