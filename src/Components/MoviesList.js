import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationComponent from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovie } from './redux/action/movieAction';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies); // Adjust this based on your state structure
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  return (
    <Row className="mt-3">
      {movies && movies.length >= 1 ? (
        movies.map((mov) => <CardMovie key={mov.id} mov={mov} />)
      ) : (
        <h2 className="text-center p-5">No Movies Available.</h2>
      )}

      {movies && movies.length >= 1 && <PaginationComponent />}
    </Row>
  );
};

export default MoviesList;
