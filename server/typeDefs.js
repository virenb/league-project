const gql = require('apollo-server-express').gql;

const typeDefs = gql`
	type Query {
		teams: [Team!]!
		users: [User!]!
	}

	type Team {
		id: ID!
		name: String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		password: String!
	}

	type Mutation {
		createTeam(name: String!): Team!
		register(email: String!, name: String!, password: String!): User!
		login(email: String!, password: String!): LoginResponse!
	}

	type LoginResponse {
		token: String
		user: User
	}
`;

module.exports = typeDefs;
