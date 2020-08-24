import React from 'react';

function NewBuyers() {
	const buyers = [
		{id: 1, name: 'Иванов', averageСheck: 2000, numberOfPurchases: 12, totalRevenues: 40000},
		{id: 2, name: 'Иванова', averageСheck: 5000, numberOfPurchases: 4, totalRevenues: 44000},
		{id: 3, name: 'Петров', averageСheck: 7000, numberOfPurchases: 55, totalRevenues: 40400},
		{id: 4, name: 'Барсучок', averageСheck: 200, numberOfPurchases: 34, totalRevenues: 7000},
		{id: 5, name: 'Федорова', averageСheck: 2700, numberOfPurchases: 55, totalRevenues: 700},
		{id: 6, name: 'Морковкин', averageСheck: 270, numberOfPurchases: 3, totalRevenues: 4700},
		{id: 7, name: 'Степанов', averageСheck: 2065, numberOfPurchases: 55, totalRevenues: 6000},
		{id: 8, name: 'Сидоров', averageСheck: 2677, numberOfPurchases: 14, totalRevenues: 420},
		{id: 9, name: 'Иванов', averageСheck: 2005, numberOfPurchases: 4, totalRevenues: 100},
		{id: 10, name: 'Иванов', averageСheck: 205, numberOfPurchases: 56, totalRevenues: 1100},
		{id: 11, name: 'Турка', averageСheck: 700, numberOfPurchases: 182, totalRevenues: 11000},
		{id: 12, name: 'Перичкин', averageСheck: 500, numberOfPurchases: 82, totalRevenues: 33000},
		{id: 13, name: 'Людова', averageСheck: 4000, numberOfPurchases: 182, totalRevenues: 43000},
		{id: 14, name: 'Максимов', averageСheck: 300, numberOfPurchases: 92, totalRevenues: 430},
		{id: 15, name: 'Иванов', averageСheck: 32000, numberOfPurchases: 12, totalRevenues: 4330},
	];
	
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
