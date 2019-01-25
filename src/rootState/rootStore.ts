import { applyMiddleware, combineReducers, createStore, } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "../../node_modules/redux-saga";
import { IRootState } from "./IRootState";
import rootSaga from "./rootSaga";
import { userReducer } from "../user/userReducer";


const rootReducer = combineReducers<IRootState>({
    userState: userReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;