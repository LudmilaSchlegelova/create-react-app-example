import React from 'react'

const Char = ({ children, clicked }) => {
	return (
		<div
			style={{
				display: 'inline-block',
				padding: '16px',
				textAlign: 'center',
				margin: '16px',
				border: '1px solid black',
			}}
			onClick={clicked}>
			{children}
		</div>
	)
}
export default Char
