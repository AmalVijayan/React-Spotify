export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove later
    token: null,
    playlist: null,
    discover_weekly:null,
}

const reducer = (state, action) => {
    console.log("Action ::", action)

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
};

export default reducer;