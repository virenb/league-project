import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Teams from './Teams';
import CreateTeam from './CreateTeam';

function Header() {
	return (
		<div>
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/teams">Teams</Link>
						</li>
						<li>
							<Link to="/create-team">Create Team</Link>
						</li>
					</ul>

					<hr />

					<Route path="/teams" component={Teams} />
					<Route path="/create-team" component={CreateTeam} />
				</div>
				<h1>
					League Project{' '}
					<span role="img" aria-label="soccer-ball">
						⚽
					</span>
				</h1>
			</Router>
		</div>
	);
}

export default Header;
