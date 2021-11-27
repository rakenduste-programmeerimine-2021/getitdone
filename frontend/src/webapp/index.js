import { createContext, useReducer } from "react";
import { authReducer, taskReducer } from "./reducer";
import combineReducers from "react-combine-reducers";
import nextId from "react-id-generator";


//TODO testing data


const TEST_tasks = []

//TODO temp testing ID
function TEST_task() {
  return {
    id: '',
    name: 'TASK NAME - eriti pikk task name',
    //deadline: '12.05.2022 20:53',
    deadline: '2014-08-18T21:11:54',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img_url: 'TODO',
    completed_by: 'ARRAY?',
    members: 'ARRAY?'
  }
}

for (let i = 0; i < 4; i++) {
  var newTask = TEST_task();
  newTask.id = nextId("test-id-")
  newTask.name = String(newTask.id) + ' TASK NAME - eriti pikk task name'
  TEST_tasks.push(newTask)
}


function emptyTask() {
  return {
    id: '',
    name: '',
    deadline: '',
    details: '',
    img_url: '',
    completed_by: '',
    members: ''
  }
}

var emptyPlaceholder = emptyTask();

const initialTasks = {
  //TODO data: [],
  data: TEST_tasks,
  nrOfTasks: TEST_tasks.length,  //TESTING
  openTaskId: null,  
  openTaskObj: null,
  emptyTask: emptyPlaceholder
}



const initialAuth = {
  token: null,
  user: null
}

const [combinedReducer, initialState] = combineReducers({
  tasks: [taskReducer, initialTasks],
  auth: [authReducer, initialAuth],
})

export const Context = createContext(initialState)

function Webapp({ children }) {
  const [state, dispatch] = useReducer(combinedReducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Webapp