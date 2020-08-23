import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Login from './pages/login';
import PrivateRoute from './pages/home/components/private_route';
import Home from './pages/home';
import Sidebar from './common_components/sidebar';
import Terminals from './pages/terminals';
import Buyers from './pages/buyers';

function Main () {
	return (
		<div>
			<Router>
				<main>
					<Switch>
						<PrivateRoute exact path = '/' component={Home} />
					</Switch>
					<Switch>
						<Route exact path = '/login'>
							<Login />
						</Route>
					</Switch>
					<Switch>
						<Route exact path = '/terminals'>
							<Terminals />
						</Route>
					</Switch>
					<Switch>
						<Route exact path = '/buyers'>
							<Buyers />
						</Route>
					</Switch>
				</main>
				{localStorage.getItem('registration') && <Sidebar /> }
			</Router>
		</div>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));