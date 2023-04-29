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
    <div className="container mx-auto my-4">
      <ul className="border border-gray-300 p-4">
        {displayItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={pageCount} marginPagesDisplayed={2} pageRangeDisplayed={3} onPageChange={handlePageClick} containerClassName={"flex justify-center mt-4"} pageClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} activeClassName={"bg-blue-500 text-white"} previousClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} nextClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} disabledClassName={"opacity-50 cursor-not-allowed"} />
    </div>
  );
}

export default Pagination;
