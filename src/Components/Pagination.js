import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { getPage } from './redux/action/movieAction';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector((state) => state.pageCount);

  useEffect(() => {
    // You may want to dispatch an initial getPage action here if needed
  }, []);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
