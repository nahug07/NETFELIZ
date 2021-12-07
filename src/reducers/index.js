const initialState = {
  moviesLoaded: [],
  moviesFavorites: [],
  movieDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
        return {
            ...state,
            moviesLoaded: action.payload.Search
        }
        case "MOVIES_FILTERED": 
        return {
            ...state,
            moviesLoaded: action.payload
        }
        default: return {...state}
  }
}
