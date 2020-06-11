import React from 'react'

const Validation = ({ inputLength }) => {
	const validationMessage = inputLength <= 5 ? 'Text je kratky' : 'Text je dlhy'
	return <p>{validationMessage}</p>
}

export default Validation
