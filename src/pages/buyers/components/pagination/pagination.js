import React from 'react';

function Pagination({ setPage }) {
  function changePages(event) {
    let page = event.target;
    setPage(event.target.innerHTML);
    let elementForPagination = document.querySelectorAll('.buyers_pagination span');
    for (let i = 0; i < elementForPagination.length; i++) {
      if (elementForPagination[i].classList.contains('activePage')) {
        elementForPagination[i].classList.remove('activePage');
      }
    }
    page.classList.add('activePage');
  }
  return (
    <div className="buyers_pagination">
      <span className="activePage" onClick={changePages}> 1 </span>
      <span onClick={changePages}> 2 </span>
      <span onClick={changePages}> 3 </span>
    </div>
  );
}

export default Pagination;
