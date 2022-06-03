import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index";


export class ConnectedList extends Component {

  render() {
    return (
      <>
        <h1>Movies Favorites</h1>
        <div>
          <ul className="listaFav">
            {!this.props.movies?<span id="warning">Movie not found, try another one</span>:
            this.props.movies.map((movie) => (
              <div id="Movies"style={{backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, 0) 70%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 1) 100%), linear-gradient(to bottom,rgba(0, 0, 0, 0) 10%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 1) 100%), url(${movie.img === "N/A"? "https://static.wikia.nocookie.net/dragonballfanon/images/f/f9/Img_noDisponible.jpg/revision/latest?cb=20150910135055&path-prefix=es": movie.img})`, backgroundRepeat: 'no-repeat', width: '354px', height: '514px', backgroundSize:'380px'}}    
              >
                <span id="close" onClick={()=> this.props.removeMovieFavorite(movie.imdbID)} className="material-icons md-24">close</span>
                <a>{movie.Title} </a>
              </div>
            ))}{" "}
          </ul>
        </div>
        
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites, //Retorno a movies el valor de lo que haya en moviesLoaded del estado del reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (imdbID) => dispatch(removeMovieFavorite(imdbID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
