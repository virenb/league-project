const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers
	});

	server.applyMiddleware({ app });

	await mongoose.connect('mongodb://admin:test123@ds211708.mlab.com:11708/league', { useNewUrlParser: true });
	mongoose.connection.once('open', () => {
		console.log('conneted to database');
	});

	app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};
startServer();
