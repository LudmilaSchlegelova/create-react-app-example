import React from 'react'
import { Header, Navigation, Alert, Badge } from '../../components'
import './App.css'

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

const array = [
	'Toto je moj nadpis A',
	'Toto je moj nadpis B',
	'Toto je moj nadpis C',
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

const App = () => {
	return (
		<div className="wrapper">
			{array.map((item, i) => {
				return <Header title={item} key={i} />
			})}

			<Header title="Toto je moj nadpis A" />
			<Header title="Toto je moj nadpis B" />
			<Header title="Toto je moj nadpis C" />

			<Navigation />
			<ul>
				<li>a</li>
				<li>b</li>
				<li>c</li>
			</ul>

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
		</div>
	)
}

export default App
