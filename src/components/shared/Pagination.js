const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination mt-5">
      <ul className="pagination-list flex justify-center items-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={
                number === currentPage
                  ? "pagination-link  bg-primary text-white px-3 py-1 rounded-md"
                  : "pagination-link text-blue-500 border border-primary px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
