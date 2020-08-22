import React from 'react';

import RegisterButton from '../register_button';

function Form () {

	return (
		<form>
			<label for = "login">Логин с GitHub:</label>
			<input type = "text" id = "login"></input>
			<label for = "password">Пароль:</label>
			<input type = "password" id = "paassword"></input>
			<RegisterButton />
		</form>
	);
}

export default Form;