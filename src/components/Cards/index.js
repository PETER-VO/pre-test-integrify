import React from 'react';
import Card from '../Card';
import { CardsContainer, Title, CardsWrapper } from './CardsElement';

const Cards = ({ users }) => {
	return (
		<>
			<CardsContainer>
				<Title>Users</Title>
				<CardsWrapper>
					{users.map((user) => (
						<Card user={user} />
					))}
				</CardsWrapper>
			</CardsContainer>
		</>
	);
};

export default Cards;
