import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from './store/reducer/productReducer';
import cartReducer from './store/reducer/cartReducer';
import authReducer from './store/reducer/authReducer';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const reducer = combineReducers({
  product:productReducer,
  cart:cartReducer,
  auth:authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux store
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
    <App />
    </React.StrictMode>
     
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
