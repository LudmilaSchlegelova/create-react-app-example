import React from 'react'
import ThemeContext from '../ThemeContext'

const C = () => {
	const color = React.useContext(ThemeContext)

	return <p style={{ color }}>Hello World</p>
}

export default C
