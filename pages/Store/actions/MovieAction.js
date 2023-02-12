import axios from "axios";

export const getMoviesList = () => (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9dee35d33d48888bd478fed31c90d916`)
        .then((data) => {
            let movieF
            movieF = data.data.results.map((movie) => {
                movie.isFavourite = false
                return movie
            })
            dispatch({
                type: "MOVIES_LIST",
                payload: movieF,
            });
        })
        .catch((err) => console.log(err))
}

export const editSingleMovie=(payload)=>{
    return {
        type: "EDIT_SINGLE_MOVIE",
        payload
    }
}
