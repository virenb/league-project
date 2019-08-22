import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

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

	return <ul>{data.teams.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>;
}

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<h2>My first Apollo app 🚀</h2>
			<Teams />
		</div>
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
