import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	background-color: pink;
	height: 200px;
	width: 400px;
	text-align: center;
	margin: 100px auto;
	border: 1px solid black;
	border-radius: 10px;
`

const setColor = value => {
	if (value.length <= 2) {
		return 'pink'
	}
	if (value.length > 2 && value.length < 5) {
		return 'red'
	}
	if (value.length >= 5) {
		return 'blue'
	}
}

const InputStyled = styled.input`
	color: ${props => setColor(props.value)};
	margin-top: 90px;
	text-align: center;
`

const Input = () => {
	const [value, setValue] = useState('')

	const handleChange = e => {
		setValue(e.target.value)
	}

	return (
		<Wrapper>
			<InputStyled value={value} onChange={e => handleChange(e)} />
		</Wrapper>
	)
}

export default Input
