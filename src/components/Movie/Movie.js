import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);
    }
  render() {
    return (
      <> 
        <h1>Movie Detail</h1>
        <div className="movie-detail">
            <div className="imgs">
                <img src={this.props.movies.Poster} alt="img"></img>
                <p>Released: {this.props.movies.Released}</p>
                <p>Genre: {this.props.movies.Genre}</p>
                <p>Cast: {this.props.movies.Actors}</p>
            </div>
            <div className="info">
              <h1>{this.props.movies.Title} - {this.props.movies.Year}</h1>
              <h2>Resumen:</h2>
              <h4>{this.props.movies.Plot}</h4>
              <h2>Awards:</h2>
              <h4>{this.props.movies.Awards}</h4>
              <h2>Ratings: </h2>
              {!this.props.movies.Ratings?<p>Loading info...</p>:this.props.movies.Ratings.map((movie)=> 
                (<h4>{movie.Source}, value {movie.Value}</h4>))}
            </div>
        </div>
      </>
       );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movieDetail, //Retorno a movies el valor de lo que haya en moviesLoaded del estado del reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (imdbID) => dispatch(getMovieDetail(imdbID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
