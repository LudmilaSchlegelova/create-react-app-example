import React, { Fragment } from 'react'
import withBackground from '../../hoc/withBackground'

// const Title = props => {
// 	return <h1 {...props}>super duper farba</h1>
// }

// export default Title

const array = [
	{ id: 1, title: 'krabica 1' },
	{ id: 2, title: 'krabica 2' },
	{ id: 3, title: 'krabica 3' },
]

const Title = props => <div {...props}>{props.title}</div>

const NewTitle = withBackground(Title)

const List = props => {
	// return (
	// 	<Fragment>
	// 		<div {...props}>krabica 1</div>
	// 		<div {...props}>krabica 2</div>
	// 		<div {...props}>krabica 3</div>
	// 	</Fragment>
	// )

	return (
		<Fragment>
			{array.map(element => (
				<NewTitle key={element.id} title={element.title} />
			))}
		</Fragment>
	)
}

export default List
