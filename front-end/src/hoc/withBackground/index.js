import React from 'react'

const withBackground = Element => props => (
	<Element
		style={{
			background: 'red',
			color: 'white',
			height: '50px',
			padding: '10px',
		}}
		{...props}
	/>
)

export default withBackground
