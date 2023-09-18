
import { createStore,applyMiddleware } from 'redux'
import MoviesReducer from '../reducer/MovieReducer';
import thunk from 'redux-thunk';

//1-create store
export const store = createStore(MoviesReducer,applyMiddleware(thunk));
