import React from 'react';

import NewTerminal from "../new_terminal";

function TerminalsTable({terminal}) {
	
	return (
		<div>
			<table>
				<thead>
			 		<tr>
    					<th> Название терминала </th>
						<th> Описание </th>
  					</tr>
				</thead>
				<NewTerminal terminal= {terminal}/>
			</table>
		</div>
	);
}

export default TerminalsTable;
