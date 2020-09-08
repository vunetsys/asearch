import React from "react";

export const Pagination = ({ paperPerPage, TotalPapers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalPapers / paperPerPage)/2; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination mx-auto">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href={`#`}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
