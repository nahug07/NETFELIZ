export function getMovies(title) {
    return function(dispatch){
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
        .then(response => response.json())
        .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}))
    }
}

export function filterMovies(title,movies){
    let moviesFiltered = movies.filter(m => m.title!== title)
    dispatch({type: 'MOVIES_FILTERED', payload: moviesFiltered})
}