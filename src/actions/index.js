export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=8649fc7a&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(imdbID) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=8649fc7a&i=" + imdbID)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}

export function removeMovieFavorite(imdbID) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: imdbID};
}

export function addTopRanked(imdbID) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=8649fc7a&i=" + imdbID)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "ADD_TOP_RANKED", payload: json });
      });
  };
}
