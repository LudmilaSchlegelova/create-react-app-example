import React from 'react'
import './style.css'

const Alert = ({ variant, children }) => (
	<div className={`alert ${variant}`}>{children}</div>
)

export default Alert
