import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Form from './components/form';

function Login() {
	const [isLogged, setIsLogged] = useState(false);
	useEffect(() => {
		if (isLogged) {
			localStorage.setItem('registration', true);
		}
	}, [isLogged]);

	return (
		<div>
			<Form isLogged = {setIsLogged}/>
			{isLogged && <Redirect to = '/' />}
		</div>
	);
}

export default Login;
