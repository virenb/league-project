import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Teams from './components/Team';
import './App.css';
import CreateTeam from './components/CreateTeam';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<h2>My first Apollo app 🚀</h2>
			<Teams />
			<CreateTeam />
		</div>
	</ApolloProvider>
);

export default App;
