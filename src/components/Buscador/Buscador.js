import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cnt">
        <h2>Buscador</h2>
        <div className="buscador">
          <form
            className="form-container"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <div className="divlabel">
              <label className="label" htmlFor="title">
                Película   
              </label>
              <input
                placeholder="Buscar un película.."
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button type="submit">BUSCAR</button>
          </form>
          <ul className="listaPeliculas">
            {this.props.movies &&
              this.props.movies.map((movie) => (
                <div key={movie.imdbID} className="peli">
                  <Link to={`/movie/${movie.imdbID}`}>◉  {movie.Title}</Link>
                  <button
                    onClick={() =>
                      this.props.addMovieFavorite({
                        title: movie.Title,
                        id: movie.imdbID,
                      })
                    }
                  >
                    ⭐
                  </button>
                </div>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (title) => dispatch(addMovieFavorite(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
