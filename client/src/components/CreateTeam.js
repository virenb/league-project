import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CREATE_TEAM = gql`
	mutation createTeam($name: String!) {
		createTeam(name: $name) {
			name
			id
		}
	}
`;

function CreateTeam() {
	let input;
	const [ createTeam, { data } ] = useMutation(CREATE_TEAM);
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					createTeam({ variables: { name: input.value } });
					input.value = '';
				}}
			>
				<input
					ref={(node) => {
						input = node;
					}}
				/>
				<button type="submit">Create Team</button>
			</form>
		</div>
	);
}

export default CreateTeam;
