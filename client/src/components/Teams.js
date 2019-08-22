import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function Teams() {
	const { loading, error, data } = useQuery(gql`
		{
			teams {
				name
				id
			}
		}
	`);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! Sorry</p>;

	return (
		<div>
			<h2>Teams</h2>
			<ul>{data.teams.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>
		</div>
	);
}

export default Teams;
