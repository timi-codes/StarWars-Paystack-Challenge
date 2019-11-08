import React from 'react';
import './moviedropdown.css';

const MovieDropDown = ({data, placeholder}) => {
    return (
        <div className="custom-select">
          <select>
                <option value="" selected disabled hidden>{placeholder} ...</option>
                <option value="">A New Hope</option>
                <option value="">The Empire strike back</option>
                <option value="">Return of Jedi</option>
            </select>
        </div>
    );
};


export default MovieDropDown;