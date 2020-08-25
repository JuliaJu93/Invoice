import React from 'react';

function Pagination({setPage}) {
	function changePages (event) {
		let page = event.target;
		setPage(event.target.innerHTML);
		let p = document.querySelectorAll('.buyers_pagination p');
		for (let i = 0; i < p.length; i++) {
			if (p[i].classList.contains("activePage")) {
				p[i].classList.remove("activePage");
			}
		}
		page.classList.add('activePage')
	}
	return (
		<div className = "buyers_pagination">
			<p className = "activePage" onClick = {changePages}> 1 </p>
			<p onClick = {changePages}> 2 </p>
			<p onClick = {changePages}> 3 </p>
		</div>
	)
}

export default Pagination;
