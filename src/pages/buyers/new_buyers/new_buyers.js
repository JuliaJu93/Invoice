import React from 'react';
import { Link } from 'react-router-dom';

function NewBuyers({buyers}) {
	
	let buyer = buyers.map((items) => 
		<tr key = {items.id}>
			<td> <Link to="/buers/ID"> {items.id} </Link> </td>
			<td> {items.name} </td>
			<td> {items.averageСheck} </td>
			<td> {items.numberOfPurchases} </td>
			<td> {items.totalRevenues} </td>
		</tr>
	)
	return (
		<tbody>
			{buyer}
		</tbody>	
	);
}

export default NewBuyers;
