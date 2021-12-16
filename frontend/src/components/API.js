import axios from 'axios';

export function deleteTask(taskId) {

  axios.delete(
    'http://localhost:8080/api/task/deletetask',
    {
      data: { task_id: taskId },
    });
  console.log('TASK DELETED >> ' + taskId)

}

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
  axios.post('http://localhost:8080/api/task/createtask', data).then(resp => {
    console.log('New Task added')
  }).catch(error => {
    console.log(error)
  })
}

export function editTask(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/task/changetaskdetails', data).then(resp => {
    console.log('Edit Task')
  }).catch(error => {
    console.log(error)
  })
}

export function setTaskDone(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/task/completetask', data).then(resp => {
    console.log('TASK DONE')
  }).catch(error => {
    console.log(error)
  })
}

export function setTaskUnDone(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/task/completetask', data).then(resp => {
    console.log('TASK UNDONE')
  }).catch(error => {
    console.log(error)
  })
}

export function getTaskStatus(taskId) {
  //TODO event description
  const reqBody = {
    "task_id": taskId
  }
  var status = false
  axios.post('http://localhost:8080/api/task/getcompletestatus', reqBody).then(resp => {

    console.log('TASK Status >> ' + taskId)
    console.log(resp.data)
    status = resp.data

  }).catch(error => {
    console.log(error)
  })

  return status
}


