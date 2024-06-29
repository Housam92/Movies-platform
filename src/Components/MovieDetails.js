import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({}); // Initialize the state with an empty object.

  // Get movie details.
  const getOneMovie = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: '4fc9593731b374619f62805b730fa304',
          language: 'en-US',
        },
      });
      setMovie(res.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  useEffect(() => {
    getOneMovie();
  }, []);

  return (
    <div>
      <Row className='justify-content-center'>
        <Col md='12' xs='12' className='mt-1'>
          <div className='card-details d-flex  align-items-center'>
            <img className='img-movie w-30' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} alt='card img' />
            <div className='justify-content-center text-center mx-auto'>
              <p className='card-text-details border-bottom'>Movie Name: {movie.title}</p>
              <p className='card-text-details border-bottom'>
                Date of release: {movie.release_date}
              </p>
              <p className='card-text-details border-bottom'>Vote average:{movie.vote_count}</p>
              <p className='card-text-details border-bottom'>Rate: {movie.vote_average}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col lg='12' xs='12' className='mt-1'>
          <div className='card-details d-flex flex-column align-items-start'>
            <div className='text-end p-4'>
              <p className='card-text-title ' style={{color:"black"}}>Story : </p>
            </div>
            <div className='text-end px-2'>
              <p className='card-text-story'>{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md='10' xs='12' sm='12' className='mt-2 d-flex justify-content-center'>
            <a href={movie.homepage}>
          <button style={{ backgroundColor: 'blue', border: 'none' }} className='btn btn-primary mx-2'>
            Watch Now
          </button>
          </a>
          <Link to='/'>
            <button style={{ backgroundColor: 'blue', border: 'none' }} className='btn btn-primary'>
              Back to Main page
            </button>
          </Link>
          <div></div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
