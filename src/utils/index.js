
export const sortMovieByDate = (data) => {
    return data.sort((movie1, movie2) => {
        const stringToDate1 = new Date(movie1.release_date).getTime();
        const stringToDate2 = new Date(movie2.release_date).getTime();
        return stringToDate1 - stringToDate2;
    })
}

export const convertHeight = (cm) => {
    const valueInInches = cm / 2.54;
    const valueInFeet = cm / 30.48;
    return { cm , valueInInches, valueInFeet}
}