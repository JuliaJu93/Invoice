import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Login from './pages/login';
import PrivateRoute from './pages/terminals/components/private_route';
import Terminals from './pages/terminals';

function Main() {
	return (
		<Router>
			<main>
				<Switch>
					<PrivateRoute exact path = '/' component={Terminals} />
				</Switch>
				<Switch>
					<Route exact path = '/login'>
						<Login />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));