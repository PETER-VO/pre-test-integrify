import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
	border-radius: 5px;
	background: #04aa6d;
	white-space: nowrap;
	padding: 8px 30px;
	color: #fff;
	font-size: 12px;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #3e8e41;
	}
`;
