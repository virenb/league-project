const gql = require('apollo-server-express').gql;

const typeDefs = gql`
	type Query {
		teams: [Team!]!
		users: [User!]!
		currentUser: User!
	}

	type Team {
		id: ID!
		name: String!
		captain: User!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		password: String!
		team: Team
	}

	type Mutation {
		createTeam(name: String!): Team!
		register(email: String!, name: String!, password: String!): User!
		login(email: String!, password: String!): AuthPayload
	}

	type AuthPayload {
		token: String
		user: User
	}
`;

module.exports = typeDefs;
