import React from 'react';

import NewBuyers from '../new_buyers'

function BuyersTable() {
	return (
		<div>
			<table>
				<thead>
			 		<tr>
    					<th> ID покупателя <button> </button></th>
						<th> Имя покупателя </th>
						<th> Средний чек </th>
						<th> Количество покупок </th>
						<th> Общая выручка </th>
  					</tr>
				</thead>
				<NewBuyers />	
			</table>
		</div>
	);
}

export default BuyersTable;
