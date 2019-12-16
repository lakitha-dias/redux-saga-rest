import {USERS} from "../constants";
import {takeEvery,select,call,put} from "redux-saga/effects";
import {fetchUsers} from "../api";
import {setUsers, setError} from "../actions";

const getPage = state => state.nextPage;

function* handleUsersLoad(){
    try{
        const page = yield  select(getPage);
        const users = yield call(fetchUsers);
        yield put(setUsers(users));
    }
    catch(error){
        //dispatch error
        yield put(setError(error.toString()));
    }
}

export default function* watchUsersLoad(){
    yield takeEvery(USERS.LOAD, handleUsersLoad);
}
