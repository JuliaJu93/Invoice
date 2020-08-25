import React from 'react';

function NewBuyers({buyers}) {
	
	let buyer = buyers.map((items) => 
		<tr key = {items.id}>
			<td> {items.id} </td>
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
