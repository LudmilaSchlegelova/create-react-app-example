import React from 'react'

import './style.css'

const UserOutput = ({ userName }) => {
	return (
		<div className="UserOutput">
			<p>Username: {userName}</p>
			<p>I hope I'll be overwritten!</p>
		</div>
	)
}

export default UserOutput
