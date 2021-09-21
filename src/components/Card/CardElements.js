import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
	background: #fff;
	width: 200px;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	white-space: nowrap;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
	}
`;

export const AvatarWrapper = styled.div`
	height: 90px;
	width: 90px;
	background: rgb(229, 229, 229);
	margin-bottom: 10px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const Avatar = styled.p`
	position: absolute;
	font-size: 2rem;
	color: #494949;
`;

export const Name = styled.h2`
	font-size: 1rem;
	margin-bottom: 3px;
`;

export const SubName = styled.h2`
	font-size: 0.7rem;
	font-style: italic;
	margin-bottom: 8px;
	color: gray;
`;

export const SubLink = styled.a`
	font-size: 0.8rem;
	margin-bottom: 20px;
`;
