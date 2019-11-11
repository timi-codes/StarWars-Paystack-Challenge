import { useState, useEffect } from 'react';
import { sortMovieByDate } from '../utils';
import axios from 'axios';

/**
 * custom hooks to fetch list movie
 * @returns an object of the loading state, error state and sorted movie list
 */
export const useSwapiApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setErrors] = useState(false);
    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        setIsLoading(true);

        const res = await fetch("https://swapi.co/api/films");
        res
        .json()
        .then(response => {
            const sortedList = sortMovieByDate(response.results);
            setMovies(sortedList)
            setIsLoading(false);
        })
        .catch(error => setErrors(error));
    };


    useEffect(() => {
        fetchMovies();
    }, [hasError]);

    return { isLoading, setIsLoading, hasError, movies }
};

export const useSelectedMovie = ({ charactersUrl }) => {
    const [isLoadingCharacters, setLoadingCharacters] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [fetchCharacterError, setFetchCharacterError] = useState(false);


    useEffect(() => {
        setLoadingCharacters(true);

        if (charactersUrl.length > 0) {
            const req = charactersUrl.map(url => 
                axios.get(url)
                    .then(response => {
                        return response.data
                })
            );
    
            Promise.all(req)
                .then(responses => {
                    setCharacters(responses);
                    setLoadingCharacters(false);
                })
                .catch(error => {
                    console.log(error);
                    setFetchCharacterError(error);
                });
        }
    }, [charactersUrl, fetchCharacterError]);

    return { isLoadingCharacters, fetchCharacterError, characters }
}