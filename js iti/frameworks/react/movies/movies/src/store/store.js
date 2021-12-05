import { applyMiddleware, createStore } from 'redux';
// import favoriteReducer from './reducers/reducer';
// import moviesReducer from './reducers/moviesReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/combinedReducers';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;