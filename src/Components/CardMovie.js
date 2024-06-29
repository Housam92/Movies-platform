import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            className="card__image"
            alt={`Poster for ${mov.original_title}`}
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Name: {mov.original_title}</p>
              <p>Release Date: {mov.release_date}</p>
              <p>Vote number: {mov.vote_count}</p>
              <p>Rate: {mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
