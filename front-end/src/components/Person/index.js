import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
	// const rnd = Math.random()
	console.log('[Person.js] rendering')

	// if (rnd > 0.7) {
	// 	throw new Error('Something went wrong')
	// }

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

Person.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	children: PropTypes.element.isRequired,
	click: PropTypes.func.isRequired,
	changed: PropTypes.func.isRequired,
}

export default Person
