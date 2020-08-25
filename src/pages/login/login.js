import React from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';

import Form from './components/form';

function Login({isLogged, setIsLogged}) {
	return (
		<div>
			{isLogged && <Redirect to = '/' />}
			<Form setIsLogged = {setIsLogged}/>
		</div>
	);
}

export default Login;
