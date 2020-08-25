import React from 'react';
import { Link } from 'react-router-dom';

function NewBuyers({buyers, numberOfBuyers, page}) {
	let arrayForPagination = buyers.slice();
	if (+page === 1) {
		arrayForPagination.splice(numberOfBuyers, buyers.length)
	}
	else if (+page === 2) {
		arrayForPagination.splice(10, 15);
		arrayForPagination.splice(0, 5);
	}
	else if (+page === 3) {
		arrayForPagination.splice(0, 10);
	}
	
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
