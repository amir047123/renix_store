import React from "react";

const Pagination = ({ quantity, size, setSize, page, setPage }) => {
  const newQuantity = Math.ceil(quantity / +size);

  return (
    <div className="my-10">
      {/*<!-- Component: Outline basic pagination  --> */}
      <nav role="navigation" aria-label="Pagination Navigation">
        {newQuantity > 1 && (
          <ul className="flex list-none items-center justify-center divide-x divide-primary overflow-hidden rounded border border-primary text-sm text-slate-700 w-fit mx-auto">
            {page ? (
              <li
                onClick={() => setPage(page - 1)}
                className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-primary/10 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none cursor-pointer hover:bg-primary hover:text-white"
              >
                <span className="order-2 md:sr-only">Prev</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mx-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-35 desc-35"
                >
                  <title id="title-35">Previous page</title>
                  <desc id="desc-35">link to previous page</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </li>
            ) : (
              ""
            )}

            {newQuantity &&
              [...Array(newQuantity).keys()].map((number) => (
                <li
                  key={number}
                  onClick={() => setPage(number)}
                  className={
                    page === number
                      ? "hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-primary/10 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus-visible:outline-none md:inline-flex  cursor-pointer bg-primary text-white"
                      : "hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-primary/10 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus-visible:outline-none md:inline-flex  cursor-pointer hover:bg-primary hover:text-white"
                  }
                >
                  {number + 1}
                </li>
              ))}

            {page + 1 === newQuantity ? (
              ""
            ) : (
              <li
                onClick={() => setPage(page + 1)}
                className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-primary/10 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none  cursor-pointer hover:bg-primary hover:text-white "
              >
                <span className="md:sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mx-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-36 desc-36"
                >
                  <title id="title-36">Next page</title>
                  <desc id="desc-36">link to next page</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            )}
          </ul>
        )}
      </nav>
   
    </div>
  );
};

export default Pagination;
