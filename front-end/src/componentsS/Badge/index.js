import styled from 'styled-components'

const styleVariant = variant => {
	let styles = ''
	switch (true) {
		case variant === 'primary':
			styles = `
				color: #fff;
				background-color: #007bff;
			`
			break
		case variant === 'secondary':
			styles = `
				color: #fff;
				background-color: #6c757d;
			`
			break
		case variant === 'success':
			styles = `
				color: #fff;
				background-color: #28a745;
			`
			break
		case variant === 'danger':
			styles = `
				color: #fff;
				background-color: #dc3545;
			`
			break
		case variant === 'warning':
			styles = `
				color: #212529;
				background-color: #ffc107;
			`
			break
		case variant === 'info':
			styles = `
				color: #fff;
				background-color: #17a2b8;
			`
			break
		case variant === 'light':
			styles = `
				color: #212529;
				background-color: #f8f9fa;
			`
			break
		case variant === 'dark':
			styles = `
				color: #fff;
				background-color: #343a40;
			`
			break
		default:
			styles = `
				color: #fff;
				background-color: #007bff;
			`
	}
	return styles
}

const Badge = styled.span`
	display: inline-block;
	padding: 4px 6px;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;

	${({ variant }) => styleVariant(variant)};
	border-radius: ${({ pill }) => (pill ? '10px' : '4px')};
`
export default Badge
