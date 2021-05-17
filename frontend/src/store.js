import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
// initial state
// reducer
const initialstate = {};
const reducer = combineReducers({
    productList: productListReducer,
})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialstate, composeEnchancer(applyMiddleware(thunk)));
export default store;
