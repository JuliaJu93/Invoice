import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Form from './components/form';

function Login() {
	const [isLogged, setIsLogged] = useState(!!localStorage.getItem('registration'));
	useEffect(() => {
		const token = new URLSearchParams(window.location.hash).get(
			'#access_token'
		);
		if (token) {
			localStorage.setItem('registration', token);
			setIsLogged(true);
		}
	}, []);

	return (
		<div>
			<Form />
			{isLogged && <Redirect to = '/' />}
		</div>
	);
}

export default Login;
