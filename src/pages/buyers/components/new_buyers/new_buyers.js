import React from 'react';
import { Link } from 'react-router-dom';

function NewBuyers({buyers, numberOfBuyers}) {
	let arrayForPagination = buyers.slice();
	arrayForPagination.splice(numberOfBuyers, buyers.length)
	return arrayForPagination.map((buyer) => 
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
