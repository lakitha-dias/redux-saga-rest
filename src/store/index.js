import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from "../sagas";

// create a store
const configureStore = () => {
    const sagaMiddleware =  createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);

    /*store.dispatch({type: 'LOGOUT'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGOUT'});*/
    return store;
};

export default configureStore;
