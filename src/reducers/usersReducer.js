// import users actions  from constants
import {USERS} from "../constants";


// whenever action type matches load success simply add whatever retrieving
const usersReducer = (state = [], action) => {
    if(action.type === USERS.LOAD_SUCCESS){
        return [...state, ...action.users];
    };
    return state;
};

export default usersReducer;
