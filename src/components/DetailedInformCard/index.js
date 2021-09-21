import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
	InformCardContainer,
	Line,
	SubLine,
} from './DetailedInformCardElement';

const DetailedInformCard = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((result) => {
				result.json().then((data) => {
					if (data.id) {
						console.log(data);
						setUser(data);
					}
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<InformCardContainer>
				{!user ? (
					<>
						<Line>Id does not exist</Line>
					</>
				) : (
					<>
						<Line>- name: {user.name}</Line>
						<Line>- username: {user.username}</Line>
						<Line>- email: {user.email}</Line>
						<Line>- phone: {user.phone}</Line>
						<Line>- company: {user.company.name}</Line>
						<Line>- website: {user.website}</Line>
						<Line>- address:</Line>
						<SubLine>street: {user.address.street}</SubLine>
						<SubLine>suite: {user.address.suite}</SubLine>
						<SubLine>city: {user.address.city}</SubLine>
						<SubLine>zipcode: {user.address.zipcode}</SubLine>
					</>
				)}
			</InformCardContainer>
		</>
	);
};

export default DetailedInformCard;
