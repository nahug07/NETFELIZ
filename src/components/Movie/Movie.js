import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID);
  }

  render() {
    return (
      <div className="movie-detail">
        <div className="container">
          <h2>{this.props.movie.Title}</h2>
          <div className="container2">
            <div className="izq">
              <h3>Año: {this.props.movie.Year}</h3>
              <h3>Duración: {this.props.movie.Runtime}</h3>
              <h3>Lanzamiento: {this.props.movie.Released}</h3>
              <h3>Género: {this.props.movie.Genre}</h3>
              <h3>Diractor: {this.props.movie.Director}</h3>
              <h3>Actores: {this.props.movie.Actors}</h3>
            </div>
            <div className="der">
              <img src={this.props.movie.Poster} alt="Poster película" className="poster" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function MapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movieID) => dispatch(getMovieDetail(movieID)),
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(Movie);
