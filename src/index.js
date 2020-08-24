import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Login from './pages/login';
import PrivateRoute from './common_components/private_route';
import Home from './pages/home';
import Sidebar from './common_components/sidebar';
import Terminals from './pages/terminals';
import Buyers from './pages/buyers';

function Main () {
	const [isLogged, setIsLogged] = useState(!!localStorage.getItem('registration'));
	
	useEffect(() => {
		if (isLogged) {
			localStorage.setItem('registration', true);
		}
	}, [isLogged]);

	return (
		<div className = "container">
			<Router>
				<main>
					<Switch>
						<PrivateRoute isLogged={isLogged} exact path = '/' component={Home} />
					</Switch>
					<Switch>
						<Route exact path = '/login'>
							<Login isLogged={isLogged} setIsLogged={setIsLogged} />
						</Route>
					</Switch>
					<Switch>
						<PrivateRoute isLogged={isLogged} exact path = '/terminals' component ={Terminals} />
					</Switch>
					<Switch>
						<PrivateRoute isLogged={isLogged} exact path = '/buyers' component ={Buyers} />
					</Switch>
				</main>
				{isLogged && <Sidebar /> }
			</Router>
		</div>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));