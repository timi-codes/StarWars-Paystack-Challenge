import React, { useState, useEffect } from 'react';
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

  // const [filteredCharacter, setFilteredCharacter] = useState([]);

  // useEffect(() => {
  //   setFilteredCharacter(characters)
  // }, [characters]);

  // console.log(filteredCharacter);

  const handleMovieSelection = (e) => {
    const selectedTitle = e.target.value;
    const movie = movies.find(m => m.title === selectedTitle);
    setSelectedMovie(movie);
  }

  return (
    
    <div className="wrapper">
      <div className="main">
        <img id="logo" src={logo} alt="Star Wars logo" />
        <MovieDropDown
          isLoading={isLoading}
          onChange={handleMovieSelection} 
          data={movies}
        />
        {/* {
          characters.length > 0 && (

          )
        } */}
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
