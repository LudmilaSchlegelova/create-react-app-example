import React from 'react'
import './style.css'

const Person = ({ name, age, children, click, changed }) => (
	<div className="wrapper">
		<p onClick={click}>remove person</p>
		<p>
			I'am a {name} and I am {age} years old!
		</p>
		{children && <p>{children}</p>}
		<input type="text" onChange={changed} value={name} />
	</div>
)

export default Person
