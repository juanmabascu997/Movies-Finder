const KEY = "8649fc7a"

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return async function (dispatch) {
    const response = await fetch(`https://omdbapi.com/?apikey=${KEY}&s=${titulo}`);
    const json = await response.json();
    dispatch({ type: "GET_MOVIES", payload: json });
  };
}

export function getMovieDetail(imdbID) {
  return async function (dispatch) {
    const response = await fetch(`https://omdbapi.com/?apikey=${KEY}&i=${imdbID}`);
    const json = await response.json();
    dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
  };  
}

export function removeMovieFavorite(imdbID) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: imdbID};
}

export function addTopRanked(imdbID) {
  return async function (dispatch) {
    const response = await fetch(`https://omdbapi.com/?apikey=${KEY}&i=${imdbID}`);
    const json = await response.json()
    dispatch({ type: "ADD_TOP_RANKED", payload: json });
  };
}

