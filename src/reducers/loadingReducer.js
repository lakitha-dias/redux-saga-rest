// contains the loading state of the entire application

// import users actions  from constants
import {USERS} from "../constants";


const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case USERS.LOAD:
            return true;
        case USERS.LOAD_SUCCESS:
            return false;
        case USERS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};


export default loadingReducer;

