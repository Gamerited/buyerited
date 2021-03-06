import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
// initial state
// reducer
const initialstate = {
    cart:{
        cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')): [],
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer, 
    cart: cartReducer,
})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialstate, composeEnchancer(applyMiddleware(thunk)));
export default store;
