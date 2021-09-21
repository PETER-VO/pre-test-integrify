import React from 'react';
import {
	AvatarWrapper,
	Avatar,
	Name,
	SubName,
	SubLink,
	CardContainer,
} from './CardElements';
import { Button } from '../ButtonCustom/ButtonElements';

const Card = ({ user }) => {
	const { id, name, username, website } = user;
	return (
		<>
			<CardContainer>
				<AvatarWrapper>
					<Avatar>{name[0]}</Avatar>
				</AvatarWrapper>
				<Name>{name}</Name>
				<SubName>{username}</SubName>
				<SubLink href={`http://${website}`} target='_blank'>
					http://{website}
				</SubLink>
				<Button to={`/user/${id}`}>More details</Button>
			</CardContainer>
		</>
	);
};

export default Card;
