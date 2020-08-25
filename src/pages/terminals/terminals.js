import React, { useState } from 'react';

import './terminals.css';

import TerminalsForm from './components/terminals_form/';
import TerminalsTable from './components/terminals_table/';

function Terminals() {
  let [terminal, setTerminal] = useState([]);
  return (
    <div className="terminals">
      <TerminalsForm terminal={terminal} setTerminal={setTerminal} />
      {terminal.length > 0 && (
        <TerminalsTable terminal={terminal} setTerminal={setTerminal} />
      )}
    </div>
  );
}

export default Terminals;
