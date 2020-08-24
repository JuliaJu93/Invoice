import React, {useState, useEffect} from 'react';

import RegisterButton from '../register_button';
import {requestForAvatar} from "./request_for_avatar";
import {passwordVerification} from "./password_verification";
import {errorOutput} from "./error_output";

function Form ({setIsLogged}) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginCorrect, setIsLoginCorrect] = useState(false);
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [mistakes, setMistakes] = useState([]);

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
				localStorage.setItem('avatarUrl', data.avatar_url);
			}
			else {setIsLoginCorrect(false)}
		  })
		  setMistakes(passwordVerification(password, setIsPasswordCorrect));
	}

	useEffect(() => {
		if (isLoginCorrect && isPasswordCorrect) {
			setIsLogged(true);
		}
	}, [isLoginCorrect, isPasswordCorrect, setIsLogged]);

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<label htmlFor = "login">Логин с GitHub:</label>
			<input type = "text" name = "login" id = "login" value={login} onChange={handleChange}></input>
			<label htmlFor = "password">Пароль:</label>
			<input type = "password" name = "password" id = "password" value={password} onChange={handleChange}></input>
			<RegisterButton />
		</form>
		<ul>
			{errorOutput(mistakes)}
		</ul>
		</div>
	);
}

export default Form;