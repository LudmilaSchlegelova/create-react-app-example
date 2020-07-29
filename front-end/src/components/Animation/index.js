import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

const Spin = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${props => props.color};
	${props =>
		props.start &&
		css`
			animation: ${rotating} 2s linear infinite;
		`};
`

const Animation = () => {
	const [start, setStart] = useState(false)
	const [color, setColor] = useState('red')

	useEffect(() => {
		console.log('useEffect', start)
		const timer = setTimeout(() => {
			console.log('rotating stop')
			setColor('red')
			setStart(false)
		}, 3000)
		return () => clearTimeout(timer)
	})

	return (
		<Center>
			<Spin start={start} color={color} />
			<button type="button" onClick={() => setStart(true)}>
				start rotating
			</button>
			<button type="button" onClick={() => setStart(false)}>
				stop rotating
			</button>
			<button type="button" onClick={() => setColor('blue')}>
				change color
			</button>
		</Center>
	)
}

export default Animation
