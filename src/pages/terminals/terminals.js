import React, {useState} from 'react';

import TerminalsForm from "./components/terminals_form/";
import TerminalsTable from "./components/terminals_table/";

function Terminals() {
	let [terminal, setTerminal] = useState([]);
	return (
		<div>
			<TerminalsForm terminal={terminal} setTerminal={setTerminal}/>
			{terminal.length > 0 && <TerminalsTable terminal={terminal}/>}
		</div>
	);
}

export default Terminals;
