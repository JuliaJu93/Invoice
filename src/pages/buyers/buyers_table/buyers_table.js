import React, {useState, useEffect} from 'react';

import sortingImg from '../../../img/sortingImg.png';
import NewBuyers from '../new_buyers';
import {buyersArray} from '../buyersArrow';

function BuyersTable() {

	let [buyers, setBuyers] = useState(buyersArray.slice());
	let [parameterForFilter, setParameterForFilter] = useState('');

	function sorting (event) {
		const parameter = event.target.name;
		buyersArray.sort(function (a, b) {
			if (a[parameter] > b[parameter]) {
			  return 1;
			}
			if (a[parameter] < b[parameter]) {
			  return -1;
			}
			return 0;
		});
		setBuyers(buyersArray.slice());
	}

	function filter () {
		let filter = buyersArray.filter (buyer => buyer.name.toLowerCase().indexOf(parameterForFilter, 0) !== -1);
		if (!parameterForFilter) {
			setBuyers(buyersArray);
		}
		else {
			setBuyers(filter);
		}
	}

	function handleChange (event) {
		const value = event.target.value;
		setParameterForFilter(value.toLowerCase());
	}

	useEffect(() => {
		filter ();
	}, [parameterForFilter]);
	
	return (
		<div>
			<table>
				<thead>
			 		<tr>
    					<th> ID покупателя </th>
						<th> Имя покупателя <input type ="text" onChange = {handleChange} name = "nameBuyers"></input></th>
						<th> Средний чек <button onClick = {sorting} name = 'averageСheck'> <img src={sortingImg} alt ="sorting" name = 'averageСheck'/> </button></th>
						<th> Количество покупок <button  onClick = {sorting} name = 'numberOfPurchases'> <img src={sortingImg} alt = "sorting" name = 'numberOfPurchases'/> </button></th>
						<th> Общая выручка <button  onClick = {sorting} name = 'totalRevenues'> <img src={sortingImg} alt ="sorting" name = 'totalRevenues'/> </button></th>
  					</tr>
				</thead>
				<NewBuyers buyers = {buyers}/>	
			</table>
		</div>
	);
}

export default BuyersTable;
