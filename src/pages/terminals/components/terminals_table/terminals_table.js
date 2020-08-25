import React from 'react';

import NewTerminal from "../new_terminal";

function TerminalsTable({terminal, setTerminal}) {
	
	return (
		<div className = "terminal_table">
			<table>
				<NewTerminal terminal= {terminal} setTerminal={setTerminal}/>
			</table>
		</div>
	);
}

export default TerminalsTable;
