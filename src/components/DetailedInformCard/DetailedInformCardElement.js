import styled from 'styled-components';

export const InformCardContainer = styled.div`
	background: #fff;
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	white-space: nowrap;
	font-weight: bold;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const Line = styled.p`
	margin-bottom: 8px;
`;

export const SubLine = styled.li`
	margin-left: 10px;
	&::marker {
		margin: 0 !important;
	}
`;
