import React, { useState } from 'react';
import { useSwapiApi, useSelectedMovie} from './hooks'
import logo from './assets/starwars-logo.png';
import './App.css';

import MovieDropDown from './components/MovieDropDown'
import FilterableTable from './components/FilterableTable';

function App() {

  const { isLoading, hasError, movies } = useSwapiApi();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { isLoadingCharacters, fetchCharacterError, characters } = useSelectedMovie({
    charactersUrl: selectedMovie ? selectedMovie.characters : []
  });
  
  console.log('==>', characters);

  const handleMovieSelection = (e) => {
    const selectedTitle = e.target.value;
    const movie = movies.find(m => m.title === selectedTitle);
    setSelectedMovie(movie);
  }

  const handlerGenderFilter = (e) => {

  }

  return (
    
    <div className="wrapper">
      <div className="main">
        <img src={logo} alt="Star Wars logo" />
        <MovieDropDown
          isLoading={isLoading}
          onChange={handleMovieSelection} 
          data={movies}
        />
        {
          characters.length > 0 && (
            <div className="custom-select">
              <select onChange={handlerGenderFilter} defaultValue="Select">
                    <option value="all">Filter Gender (All)</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                    <option value="n/a">N/A</option>
                    <option value="hermaphrodite">Hermaphrodite</option>
                </select>
            </div>
          )
        }
        {
          !isLoadingCharacters && (
            <FilterableTable
              data={characters}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
