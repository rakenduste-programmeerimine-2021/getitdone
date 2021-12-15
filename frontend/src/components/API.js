import axios from 'axios';


export function addNewEvent(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/event/create', data).then(resp => {
    console.log('New Event added')
  }).catch(error => {
    console.log(error)
  })
}

export function editEvent(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/event/changeeventdetails', data).then(resp => {
    console.log('Edit Event')
  }).catch(error => {
    console.log(error)
  })
}

//TODO .. backend is broken
export function addNewTask(data) {
  axios.post('', data).then(resp => {
    console.log('New Task added')
  }).catch(error => {
    console.log(error)
  })
}

export function editTask(data) {
  //TODO event description
  axios.post('', data).then(resp => {
    console.log('Edit Task')
  }).catch(error => {
    console.log(error)
  })
}

  //.post("/createtask", taskController.createTask)
  //.post("/gettask", taskController.getTaskDetails)
  //.post("/changetaskdetails", taskController.changeTaskDetails)
  //.post("/geteventtasks", taskController.getEventTasks)
  //.post("/completetask", taskController.completeTask)

//export function getEvents(uid, runAfter) {
//  axios.get('http://localhost:3003/events').then(resp => {
//    const setEvents = (data) => {
//      setState(
//        produce((draft) => {
//          draft.events = data
//        })
//      );
//    }
//    runAfter
//  });
//}



