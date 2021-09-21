import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((result) => {
				result.json().then((data) => {
					console.log(data);
					setUsers(data);
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<Cards users={users} />
		</>
	);
};

export default Home;
