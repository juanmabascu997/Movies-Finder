const initialState = {                              //Estado inicial del reducer
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
  topRanked: [],
};


function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {                                //Si se agrega movie a favoritos
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {                                           //Si se nos solicita una movie
        return {    
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === "GET_MOVIE_DETAIL") {                                     //Si se nos solicita el detalle de una movie
      return {    
        ...state,
        movieDetail: action.payload
      };
  }
  if (action.type === "REMOVE_MOVIE_FAVORITE") {                                           //Si se nos solicita remover una movie
      return {    
        ...state,
        moviesFavourites: state.moviesFavourites.filter(m => m.imdbID !== action.payload)
      };
  }
    if (action.type === "ADD_TOP_RANKED") {                                   //Si se agrega movie a favoritos
      return {
        ...state,
        topRanked: state.topRanked.concat(action.payload)
      }
  }
  if (action.type === "RESET_TOP_RANKED") {                                   //Si se agrega movie a favoritos
    console.log("llego hasta aca?");
    return {
      ...state,
      topRanked: [],
    }
  }
    return state;
}
  
  export default rootReducer;
