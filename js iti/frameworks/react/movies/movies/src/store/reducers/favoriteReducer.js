
const INITIAL_STATE = {
    favorite: false
}

function favoriteReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                favorite: action.payload
            };
            default :
                return state;
    }
}

export default favoriteReducer;