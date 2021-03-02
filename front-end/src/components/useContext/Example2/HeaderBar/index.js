import React, { useContext } from 'react'

const Notifications = React.createContext({ length: 1 })
const CurrentUser = React.createContext({ name: 'Ferko' })

function HeaderBar() {
	const user = useContext(CurrentUser)
	const notifications = useContext(Notifications)

	return (
		<header>
			Welcome back, {user.name}! You have {notifications.length} notifications.
		</header>
	)
}
export default HeaderBar
