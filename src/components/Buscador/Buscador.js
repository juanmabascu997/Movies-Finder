import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getMovies,
  addMovieFavorite,
  getMovieDetail,
  addTopRanked,
} from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    if(!this.props.topRanked[0]){
      this.props.addTopRanked("tt7879350");
      this.props.addTopRanked("tt2975590");
      this.props.addTopRanked("tt12361974");
      this.props.addTopRanked("tt2820466");
    }
  }


  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;

    return (
      <div id="divGeneral">
        <div id="divList">
          <h2>Movies List</h2>
          <div id="listMovies">
            {!this.props.movies?<span id="warning">Movie not found, try another one</span>:
            this.props.movies.map((movie, index) => (
              <div id="Movies" key={index} style={{backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 60%,rgba(0, 0, 0, 1) 100%), url(${movie.Poster === "N/A"? "https://static.wikia.nocookie.net/dragonballfanon/images/f/f9/Img_noDisponible.jpg/revision/latest?cb=20150910135055&path-prefix=es": movie.Poster})`, backgroundRepeat: 'no-repeat', width: '354px', height: '514px', backgroundSize:'380px'}}    
              >
                <span id="star" onClick={() =>
                    this.props.addMovieFavorite({
                      Title: movie.Title,
                      imdbID: movie.imdbID,
                      img: movie.Poster,
                    })
                  } className="material-icons md-24">star</span>
                <Link to={`/movie/${movie.imdbID}`}>
                  <li>{movie.Title} </li>
                </Link>
              </div>
            ))}{" "}
            {/*Agrego fav y muestro las peliculas*/}
          </div>
        </div>

        <div><div id="divForm">
          <form
            className="form-container"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <h2>Hi! Welcome</h2>
            <div id="formSearch">
              <label className="label" htmlFor="title">
                {" "}
              </label>
              <input
                type="text"
                id="titlee"
                autoComplete="off"
                placeholder="Movie name..."
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
          <h2>Best ranked movies</h2>
          {this.props.topRanked.map((movie, index) => (
            <div id="Movies" key={index} style={{backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 60%,rgba(0, 0, 0, 1) 100%), url(${movie.Poster === "N/A"? "https://static.wikia.nocookie.net/dragonballfanon/images/f/f9/Img_noDisponible.jpg/revision/latest?cb=20150910135055&path-prefix=es": movie.Poster})`, backgroundRepeat: 'no-repeat', width: '354px', height: '514px', backgroundSize:'380px'}}>
              <Link to={`/movie/${movie.imdbID}`}>
                  <li>{movie.Title} </li>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded, //Retorno a movies el valor de lo que haya en moviesLoaded del estado del reducer
    topRanked: state.topRanked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
    getMovieDetail: (imdbID) => dispatch(getMovieDetail(imdbID)),
    addTopRanked: (imdbID) => dispatch(addTopRanked(imdbID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
