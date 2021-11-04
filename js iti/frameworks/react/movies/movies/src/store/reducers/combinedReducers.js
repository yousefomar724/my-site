import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import favoriteReducer from './favoriteReducer';
import addToFav from './addToFav';
import langReducer from './langReducer'

export const rootReducer = combineReducers({
    moviesList: moviesReducer,
    favoriteList: favoriteReducer,
    fav: addToFav,
    lang: langReducer
})