import axios from 'axios';


export function addNewEvent(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/event/create', data).then(resp => {
    console.log('New Event added')
  });
}

export function editEvent(data) {
  //TODO event description
  axios.post('http://localhost:8080/api/event/changeeventdetails', data).then(resp => {
    console.log('Edit Event')
  }).catch(error => {
    console.log(error)
  })
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



