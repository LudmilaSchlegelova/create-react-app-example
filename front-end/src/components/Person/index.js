import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 200px;
	margin: 16px;
	border: 1px solid black;
	box-shadow: 0 2px 3px #ccc;
	padding: 15px;
	text-align: center;

	@media (min-width: 500px) {
		.wrapper {
			width: 450px;
		}
	}
`

const Person = ({ name, age, children, click, changed }) => {
	return (
		<Wrapper>
			<p onClick={click}>remove person</p>
			<p>
				I'am a {name} and I am {age} years old!
			</p>
			{children && <p>{children}</p>}
			<input type="text" onChange={changed} value={name} />
		</Wrapper>
	)
}

export default Person
