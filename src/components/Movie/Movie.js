import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <h2>Año: {this.props.movie.Year}</h2>
                <h2>Duración: {this.props.movie.Runtime}</h2>
                <h2>Lanzamiento: {this.props.movie.Released}</h2>
                <h2>Género: {this.props.movie.Genre}</h2>
                <h2>Diractor: {this.props.movie.Director}</h2>
                <h2>Actores: {this.props.movie.Actors}</h2>
                <img src={this.props.movie.Poster} alt="Poster película"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}

function MapDispatchToProps(dispatch){
    return{
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Movie);