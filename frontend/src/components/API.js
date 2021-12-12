import axios from 'axios';


export function addNewTask(data) {



  //TODO event description

  axios.post('http://localhost:8080/api/event/create', data).then(resp => {
    console.log('New Task added')
  });

  
}

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



