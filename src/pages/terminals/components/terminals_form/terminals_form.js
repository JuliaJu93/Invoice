import React, {useState, useEffect} from 'react';

function TerminalsForm ({terminal, setTerminal}) {
	let [terminalName, setTerminalName] = useState('');
	let [descriptionTerminal, setDescriptionTerminal] = useState('');
	
	function handleChange (event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if (name === "terminalName") {
			setTerminalName(value);
		}
		else if (name === "descriptionTerminal"){
			setDescriptionTerminal(value);
		}
	}
	
	function handleSubmit (event) {
		event.preventDefault ();

		setTerminal(prevState => {
			const newState = [...prevState];
			newState.push({terminalName: terminalName, descriptionTerminal: descriptionTerminal});
			return newState;
		})
		setTerminalName('');
		setDescriptionTerminal('');
	}

	useEffect(() => {
		if (localStorage.getItem('terminal')) {
			let terminal = JSON.parse(localStorage.getItem('terminal'));
			setTerminal(terminal);
		};
	}, []);

	useEffect(() => {
		localStorage.setItem('terminal', JSON.stringify(terminal));
	}, [terminal]);
	
	return (
		<div className = "terminal_form">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor = "terminalName"> Название терминала: </label>
					<input type = "text" id = "terminalName" name = "terminalName" value ={terminalName} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor = "description"> Описание: </label>
					<textarea id = "description" name = "descriptionTerminal" value ={descriptionTerminal} onChange={handleChange} />
				</div>
				<div>
					<input type = "submit" value = "Добавить" />
				</div>
			</form>
		</div>
	);
}

export default TerminalsForm;
