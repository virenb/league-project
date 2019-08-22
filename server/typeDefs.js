const gql = require('apollo-server-express').gql;

const typeDefs = gql`
	type Query {
		teams: [Team!]!
	}

	type Team {
		id: ID!
		name: String!
	}

	type Mutation {
		createTeam(name: String!): Team!
	}
`;

module.exports = typeDefs;
