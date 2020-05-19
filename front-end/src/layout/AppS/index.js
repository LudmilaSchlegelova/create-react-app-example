import React from 'react'
import styled from 'styled-components'
import { Alert } from '../../componentsS'
import { Badge } from '../../componentsS'

const arrayOfAlerts = [
	{ title: 'This is a primary alert—check it out!', variant: 'primary' },
	{ title: 'This is a secondary alert—check it out!', variant: 'secondary' },
	{ title: 'This is a success alert—check it out!', variant: 'success' },
	{ title: 'This is a danger alert—check it out!', variant: 'danger' },
	{ title: 'This is a warning alert—check it out!', variant: 'warning' },
	{ title: 'This is a info alert—check it out!', variant: 'info' },
	{ title: 'This is a light alert—check it out!', variant: 'light' },
	{ title: 'This is a dark alert—check it out!', variant: 'dark' },
]

const arrayOfBadges = [
	{ title: 'Primary', variant: 'primary', pill: false },
	{ title: 'Secondary', variant: 'secondary', pill: true },
	{ title: 'Success', variant: 'success', pill: true },
	{ title: 'Danger', variant: 'danger', pill: true },
	{ title: 'Warning', variant: 'warning', pill: true },
	{ title: 'Info', variant: 'info', pill: true },
	{ title: 'Light', variant: 'light', pill: true },
	{ title: 'Dark', variant: 'dark', pill: false },
]

const Wrapper = styled.div`
	margin: 20px;

	> ${Alert} {
		&:first-child {
			margin-top: 0;
		}
	}
`

const App = () => {
	return (
		<Wrapper>
			{arrayOfAlerts.map((item, i) => {
				return (
					<Alert key={i} variant={item.variant}>
						{item.title}
					</Alert>
				)
			})}

			{arrayOfBadges.map((item, i) => {
				return (
					<Badge key={i} variant={item.variant} pill={item.pill}>
						{item.title}
					</Badge>
				)
			})}
		</Wrapper>
	)
}

export default App
