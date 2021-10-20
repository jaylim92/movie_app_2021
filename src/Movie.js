import React from "react";
import PorpTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.protTypes = {
  id: PorpTypes.number.isRequired,
  title: PorpTypes.string.isRequired,
  summary: PorpTypes.string.isRequired,
  poster: PorpTypes.string.isRequired,
  year: PorpTypes.number.isRequired,
  genres: PorpTypes.arrayOf(PorpTypes.string).isRequired,
};

export default Movie;
