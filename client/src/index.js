import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'http://localhost:4000'
});

client
	.query({
		query: gql`
			{
				books {
					title
					author
				}
			}
		`
	})
	.then((result) => console.log(result));

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<h2>My first Apollo app 🚀</h2>
		</div>
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
