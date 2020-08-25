import React from 'react';
import { Link } from 'react-router-dom';

function NewBuyers({buyers}) {
	
	return buyers.map((buyer) => 
		<tr key = {buyer.id}>
			<td> <Link to={`/buyers/${buyer.id}`}> {buyer.id} </Link> </td>
			<td> {buyer.name} </td>
			<td> {buyer.averageСheck} </td>
			<td> {buyer.numberOfPurchases} </td>
			<td> {buyer.totalRevenues} </td>
		</tr>
	)
}

export default NewBuyers;
