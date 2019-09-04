const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const getUser = (token) => {
	try {
		if (token) {
			return jwt.verify(token, process.env.JWT_SECRET);
		}
		return null;
	} catch (err) {
		return null;
	}
};

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: ({ req }) => {
			const token = req.headers.authorization || '';
			const user = getUser(token);

			return {
				user
			};
		}
	});

	server.applyMiddleware({ app });

	await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds211708.mlab.com:11708/league`, {
		useNewUrlParser: true
	});
	mongoose.connection.once('open', () => {
		console.log('conneted to database');
	});

	app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};
startServer();
