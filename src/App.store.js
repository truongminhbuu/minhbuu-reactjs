import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerReducer from "./components/RegisterForm/RegisterForm.reducer";
import loginReducer from "./components/LoginForm/LoginForm.reducer";
import productListReducer from "./components/ProductList/ProductList.reducer";
import productDetailReducer from "./components/ProductDetail/ProductDetail.reducer";
import thunk from 'redux-thunk';

export const store = createStore(
    combineReducers({
        registerReducer,
        loginReducer,
        productDetailReducer,
        productListReducer
    }),
    applyMiddleware(thunk)
)