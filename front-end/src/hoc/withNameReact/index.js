import React from 'react'

export default function withNameReact(WrappedComponent) {
	return class extends React.Component {
		render() {
			return <WrappedComponent name="React" {...this.props} />
		}
	}
}
