import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/Header';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

const App = () => (
	<ApolloProvider client={client}>
		<Header />
	</ApolloProvider>
);

export default App;
