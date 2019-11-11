import React from 'react';
import Loading from '../Loading';
import './moviedropdown.css';

const MovieDropDown = ({ isLoading, data, placeholder, onChange }) => {

    if ( isLoading ) {
        return <Loading />
    }

    return (
        <div className="custom-select">
            <select onChange={onChange} defaultValue="Select">
                <option value="Select" disabled>Select a Movie ...</option>
                {
                    data.map((movie) => (
                        <option key={movie.release_date} value={movie.title}>
                            {movie.title} 2000
                        </option>
                    ))
                }
            </select>
        </div>
    );
};


export default MovieDropDown;