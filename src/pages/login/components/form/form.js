import React, {useState, useEffect} from 'react';

import RegisterButton from '../register_button';
import {requestForAvatar} from "./request_for_avatar";

function Form () {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginCorrect, setIsLoginCorrect] = useState(false);

	function handleChange (event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if (name === "login") {
			setLogin(value);
		}
		else if (name === "password"){
			setPassword(value);
		}
	}

	function handleSubmit (event) {
		event.preventDefault ();
		requestForAvatar (login).then((data) => {
			if (data.avatar_url){
				setIsLoginCorrect(true);
			}
			else {setIsLoginCorrect(false)}
		  })
		
	}

	useEffect(() => {
		console.log(isLoginCorrect);
	}, [isLoginCorrect]);

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor = "login">Логин с GitHub:</label>
			<input type = "text" name = "login" id = "login" value={login} onChange={handleChange}></input>
			<label htmlFor = "password">Пароль:</label>
			<input type = "password" name = "password" id = "password" value={password} onChange={handleChange}></input>
			<RegisterButton />
		</form>
	);
}

export default Form;