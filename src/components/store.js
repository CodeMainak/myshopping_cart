import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"


const initialState={};

const middleWare=[thunk]

// const store=createStore(rootReducer,initialState,compose(applyMiddleware(...middleWare ),
//     window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION_
// ))
const store=createStore(rootReducer,initialState,composeWithDevTools (applyMiddleware(...middleWare)))
export default store;



