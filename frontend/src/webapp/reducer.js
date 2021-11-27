import { USER_LOGIN, USER_LOGOUT } from "./actions";


const authReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
}

//TODO cleanup
const taskReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export { authReducer, taskReducer }