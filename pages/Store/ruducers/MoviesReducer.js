
const InitialValues = {
    movies:[]
}

export default function MoviesReducer(state = InitialValues, action){

    switch(action.type){
        case "MOVIES_LIST":
            return{
                ...state,
                movies: action.payload
            }
        case "EDIT_SINGLE_MOVIE":
            const movie = state.movies.find(
                (singleMovie) => singleMovie.id == action.payload.id
            );
            const movieIndex=state.movies.indexOf(movie)
            state.movies[movieIndex]=action.payload
            return state
        default: 
            return state

    }

}