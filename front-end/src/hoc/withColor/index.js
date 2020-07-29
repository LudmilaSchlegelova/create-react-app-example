import React from 'react'

const withColor = Element => props => (
	<Element style={{ color: 'red' }} {...props} />
)

export default withColor
