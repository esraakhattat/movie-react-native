
const InitialValues = {
    favourites:[]
}

export default function FavouriteReducer(state = InitialValues, action){
    switch(action.type){
        case "ADD_OR_REMOVE_FAVOURITE":
            console.log(action.payload);
            return{
                ...state,
                favourites: (action.payload.isFavourite?[...state.favourites,action.payload]:state.favourites.filter((el)=>el.id!=action.payload.id) )
            }
        default: 
            return state

    }

}