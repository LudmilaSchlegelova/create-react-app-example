import React from 'react'
import './style.css'

const Badge = ({ children, variant, pill }) => (
	<span
		className={`badge ${variant} ${pill ? 'pill' : ''}`}
		pill={pill ? '10px' : '4px'}>
		{children}
	</span>
)

export default Badge
