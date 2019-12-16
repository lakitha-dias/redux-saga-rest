import {combineReducers} from "redux";

// import all reducers
import loadingReducer from "./loadingReducer";
import usersReducer from "./usersReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    users: usersReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;

