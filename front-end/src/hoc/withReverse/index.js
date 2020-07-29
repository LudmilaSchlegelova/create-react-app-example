import React from 'react'

const withReverse = PassedComponent => props => {
	return (
		<PassedComponent {...props}>
			{props.children.split('').reverse().join('')}
		</PassedComponent>
	)
}

export default withReverse
