import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 5;
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const displayItems = items.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  return (
    <div>
      <ul>
        {displayItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={pageCount} marginPagesDisplayed={2} pageRangeDisplayed={3} onPageChange={handlePageClick} containerClassName={"pagination"} activeClassName={"active"} />
    </div>
  );
}

export default Pagination;
