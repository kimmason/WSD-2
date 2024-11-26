import React from 'react';

const Banner = ({ movie }) => {
    const backdropUrl = movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : '';

    return (
        <div className="banner" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default Banner;
