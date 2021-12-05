
const INITIAL_STATE = {
    fav: []
}

function addFavReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_FAVORITE':
            return {
                fav: action.payload
            };
            default :
                return state;
    }
}

export default addFavReducer;