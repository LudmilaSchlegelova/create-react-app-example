import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 400px;
	height: 300px;
	margin: 0 auto;
	border: 1px solid black;
	box-shadow: 0 8px 9px rgb(81 24 91);
	padding: 15px;
	text-align: center;
	background-color: plum;
	border-radius: 10px;
`

const Title = props => {
	return (
		<Wrapper>
			<p> {props.title}</p>
			<button
				style={{
					backgroundColor: 'black',
					color: 'plum',
					height: '45px',
					width: '120px',
					borderRadius: '5px',
				}}
				type="button"
				onClick={() => props.handleClick()}>
				add item
			</button>
		</Wrapper>
	)
}

export default Title
