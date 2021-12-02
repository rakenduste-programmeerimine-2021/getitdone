export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

//https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

export const loginUser = data => ({
  type: USER_LOGIN,
  payload: data
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})

//export const getTasks = () => ({
//  type: GET_TASKS
//})