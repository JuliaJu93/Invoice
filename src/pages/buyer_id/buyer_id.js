import React from 'react';
import {useParams} from "react-router-dom";

import "./buyer_id.css";

import {buyersArray} from "../buyers/components/buyersArrow"

function BuyersID() {
	let { id } = useParams();
	function searchBuyer () {
		return buyersArray.filter (buyer => String(buyer.id) === id);
	}
	let buyer = searchBuyer();
	return (
		<div className = "buyerId">
			<table>
				<thead>
			 		<tr>
    					<th> ID покупателя </th>
						<th> Имя покупателя </th>
						<th> Средний чек </th>
						<th> Количество покупок </th>
						<th> Общая выручка </th>
  					</tr>
				</thead>
				<tbody>
					<tr>
						<td> {buyer[0].id} </td>
						<td> {buyer[0].name} </td>
						<td> {buyer[0].averageСheck} </td>
						<td> {buyer[0].numberOfPurchases} </td>
						<td> {buyer[0].totalRevenues} </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default BuyersID;
