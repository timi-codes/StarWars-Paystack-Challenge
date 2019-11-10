

export const sortMovieList = (data) => {
    return data.sort((movie1, movie2) => {
        const stringToDate1 = new Date(movie1.release_date).getTime();
        const stringToDate2 = new Date(movie2.release_date).getTime();
        return stringToDate1 - stringToDate2;
    })
}