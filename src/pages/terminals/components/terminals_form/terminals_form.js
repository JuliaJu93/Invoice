import React from 'react';

function TerminalsForm() {
	return (
		<div>
			<form>
				<label htmlFor = "terminalName"> Название терминала: </label>
				<input type = "text" id = "terminalName"></input>
				<label htmlFor = "description"> Описание: </label>
				<textarea id = "description"/>
				<input type = "submit" value = "Добавить"></input>
			</form>
		</div>
	);
}

export default TerminalsForm;
