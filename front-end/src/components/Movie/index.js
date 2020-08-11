import React from 'react'

export function Movie(props) {
	return (
		<div>
			<div>Movie title: {props.title}</div>
			<div>Release data: {props.releaseDate}</div>
		</div>
	)
}

export const MemoizedMovie = React.memo(Movie)
