// generator function
// watcher saga --> action ---> invoke worker saga
import {takeEvery, put,take,call} from  'redux-saga/effects';
import {USERS} from '../constants';

/*function* workerSaga(){
    console.log("From a worker saga!");
    console.log(put({type: "ACTION_FROM_WORKER"}));
    yield put({type: "ACTION_FROM_WORKER" });
}

function* byebyeSaga(){
    console.log('byebye');
}

//watcher saga
function* rootSaga(){
    /!*yield takeEvery("HELLO", workerSaga);*!/
    yield take('LOGIN');
    yield call(workerSaga);
    yield take('LOGOUT');
    yield call(byebyeSaga);
}*/


/*function* workerSaga(){
    console.log("Fetching users from the API");
}

function* rootSaga(){
    yield takeEvery(USERS.LOAD, workerSaga);
}

export default rootSaga;*/

import usersSaga from "./usersSaga";

export default usersSaga;
