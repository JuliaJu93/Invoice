import React from 'react';

function NewTerminal ({terminal, setTerminal}) {
	function deleteTerminal (event) {
		const number = searchLineNumber (event);
		let terminalElement = JSON.parse(localStorage.getItem('terminal'));
		terminalElement.splice(number, 1);
		setTerminal(terminalElement);
		localStorage.setItem('terminal', JSON.stringify(terminalElement));
	}

	function searchLineNumber (event) {
		let tr = document.querySelector('tbody').childNodes;
		for (let number = 0; number < tr.length; number++) {
			if (tr[number] === event.target.parentElement.parentElement) {
				return number;
			}
		}
	}

	const terminals = terminal.map ((items) => 
		<tr key={Math.random()}>
			<td>
				{items.terminalName}
			</td>
			<td>
				{items.descriptionTerminal}
			</td>
			<td>
				<button onClick={deleteTerminal}>Удалить терминал</button>
			</td>
		</tr>
	);
	
	return (
		<tbody>
			{terminals}		
		</tbody>
	);
}

export default NewTerminal;
