import React from 'react';

function NewTerminal ({terminal}) {
	const terminals = terminal.map ((items) => 
		<tr key={items.terminalName.toString()}>
			<td>
				{items.terminalName}
			</td>
			<td>
				{items.descriptionTerminal}
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
