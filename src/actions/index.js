
// import constants
import {USERS} from "../constants";

// action  that signifies the load of users
const loadUsers = () => ({
    type: USERS.LOAD,
});


// action  that signifies the successfully load of users
const setUsers = users => ({
     type: USERS.LOAD_SUCCESS,
     users,
});

// action  that signifies the failure of handling of users
const setError = error => ({
     type: USERS.LOAD_FAIL,
     error,
});

// export all the actions
export{
    loadUsers,
    setUsers,
    setError
}
