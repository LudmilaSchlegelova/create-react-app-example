import styled, { css } from 'styled-components'

const variant = variant => {
	let styles = ''
	switch (true) {
		case variant === 'primary':
			styles = css`
				color: #004085;
				background-color: #cce5ff;
				border: 1px solid #b8daff;
			`
			break
		case variant === 'secondary':
			styles = css`
				color: #383d41;
				background-color: #e2e3e5;
				border: 1px solid #d6d8db;
			`
			break
		case variant === 'success':
			styles = css`
				color: #155724;
				background-color: #d4edda;
				border: 1px solid #c3e6cb;
			`
			break
		case variant === 'danger':
			styles = css`
				color: #721c24;
				background-color: #f8d7da;
				border: 1px solid #f5c6cb;
			`
			break
		case variant === 'warning':
			styles = css`
				color: #856404;
				background-color: #fff3cd;
				border: 1px solid #ffeeba;
			`
			break
		case variant === 'info':
			styles = css`
				color: #0c5460;
				background-color: #d1ecf1;
				border: 1px solid #bee5eb;
			`
			break
		case variant === 'light':
			styles = css`
				color: #818182;
				background-color: #fefefe;
				border: 1px solid #fdfdfe;
			`
			break
		case variant === 'dark':
			styles = css`
				color: #1b1e21;
				background-color: #d6d8d9;
				border: 1px solid #c6c8ca;
			`
			break
		default:
			styles = css`
				color: #004085;
				background-color: #cce5ff;
				border: 1px solid #b8daff;
			`
	}
	return styles
}

const Alert = styled.div`
	margin-top: 15px;
	padding: 16px 20px;
	border-radius: 4px;

	${props => variant(props.variant)}
`

export default Alert
