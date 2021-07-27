import axios from 'axios'
//------------------  Action Types

const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';



//----------------- Action Creator

// ---- Set 
export const setUsers = (users) => {
  return {
  type: SET_USERS,
  users
  }
};

// ---- Add
export const addUserAction = (user) => {
  return {
    type: ADD_USER,
    user
  }
}

// ---- Remove 
export const deleteUserAction = (user) => {
  return {
    type: DELETE_USER,
    user
  }
}


//--------------- Thunk Creator

// ---- Set 
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(setUsers(data));
    } catch (err) {
      console.log(err)
    }
  }
};

// ---- Add
export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/users', user);
      dispatch(addUserAction(data));
    } catch (err) {
      console.log(err);
    }
  }
};

// ---- Remove
export const deleteUser = (user) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/users/${user.id}`);
      dispatch(deleteUserAction(data));
    } catch (err) {
      console.log(err);
    }
  }
};


// ---------------- Reducer


export default function basicReducer (state = {}, action) {
    switch (action.type) {
        case SET_USERS:
          return action.users;
        case ADD_USER:
          return [...state, action.user];
        case DELETE_USER:
          return state.filter((user) => user.id !== action.user.id);
        default:
          return state
    }
}

