export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const newState = [...state];
            return newState.map(movie => {
                if (movie.id === action.id) {
                    return { ...movie, isFavorite: !movie.isFavorite }
                } else {
                    return movie
                }
            })
        default: return state;
    }
}
