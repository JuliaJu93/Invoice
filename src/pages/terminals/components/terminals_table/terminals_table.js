import React from 'react';

import NewTerminal from "../new_terminal";

function TerminalsTable({terminal, setTerminal}) {
	
	return (
		<div>
			<table>
				<thead>
			 		<tr>
    					<th> Название терминала </th>
						<th> Описание </th>
  					</tr>
				</thead>
				<NewTerminal terminal= {terminal} setTerminal={setTerminal}/>
			</table>
		</div>
	);
}

export default TerminalsTable;
