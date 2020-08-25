import React, {useState} from 'react';

import sortingImg from '../../../img/sortingImg.png';
import filterImg from '../../../img/filterImg.png';
import NewBuyers from '../new_buyers';

function BuyersTable() {
	let buyersArray = [
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
	let [buyers, setBuyers] = useState(buyersArray);

	function sorting () {
		buyersArray.sort(function (a, b) {
			if (a.averageСheck > b.averageСheck) {
			  return 1;
			}
			if (a.averageСheck < b.averageСheck) {
			  return -1;
			}
			return 0;
		});
		setBuyers(buyersArray);
		console.log(buyers)
	}
	
	return (
		<div>
			<table>
				<thead>
			 		<tr>
    					<th> ID покупателя </th>
						<th> Имя покупателя <button> <img src={filterImg} alt ="sorting" /> </button></th>
						<th> Средний чек <button onClick = {sorting}> <img src={sortingImg} alt ="sorting"/> </button></th>
						<th> Количество покупок <button> <img src={sortingImg} alt ="sorting"/> </button></th>
						<th> Общая выручка <button> <img src={sortingImg} alt ="sorting"/> </button></th>
  					</tr>
				</thead>
				<NewBuyers buyers = {buyers}/>	
			</table>
		</div>
	);
}

export default BuyersTable;
