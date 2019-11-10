import { useState, useEffect } from 'react';
import { sortMovieList } from '../utils';


/**
 * custom hooks to fetch list movie
 * @returns an object of the loading state, error state and sorted movie list
 */
export const useSwapiApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setErrors] = useState(false);
    const [movies, setMovies] = useState([]);

    async function fetchData() {
        setIsLoading(true);

        const res = await fetch("https://swapi.co/api/films");
        res
        .json()
        .then(response => {
            const sortedList = sortMovieList(response.results);
            setMovies(sortedList)
            setIsLoading(false);
        })
        .catch(error => setErrors(error));
    };

    useEffect(() => {
        fetchData();
    }, [hasError]);

    return { isLoading, hasError, movies }
};