import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import produce from "immer";
import React, { useContext, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import BackButton from '../components/BackButton';
import EventCard from '../components/EventCard';
import { getSessAuth } from '../components/TEMP_auth';
import { Context } from "../webapp";


function EventPage() {

  const [state, setState] = useContext(Context);


  //TODO fix double get
  console.log('EVENT page load')


  console.log('<< EVENT SESSION ID >>')
  console.log(window.sessionStorage.getItem("TEMP_uid"))
  const reqBody = {
    "user_id": window.sessionStorage.getItem("TEMP_uid")
    //"user_id": "727a9c2f-d80d-47c7-bba5-f6798630feb9"
  }
  //axios get/post disc
  //https://stackoverflow.com/questions/46404051/send-object-with-axios-get-request

  useEffect(() => {
    const makeEventReq = async () => {
      try {
        //axios.get('http://localhost:3003/events').then(resp => {
        axios.post('http://localhost:8080/api/event/getuserevents', reqBody).then(resp => {

          console.log('Axios request sent')
          console.log(resp)
          //console.log(state)
          const setEvents = (data) => {
            console.log('SET EVENTS >> ')
            console.log(data)
            //console.log(data.data.userEvents)
            setState(
              produce((draft) => {
                //draft.events = data
                draft.events.data = data.data.userEvents

              })
            );
          }
          console.log('NEW STATUS >>')
          console.log(state)
          setEvents(resp)
        }).catch(error => {
          console.log({
            error
            //error,
            //'error status': error.response.status,
            //'error response': error.response.data
          });
        })
      } catch (err) {
        console.error(err);
      }
    }
    makeEventReq()
    getSessAuth()

  }, [setState]);



  const handleAddClick = () => {
    setState(
      produce((draft) => {
        draft.events.openEventId = null
      })
    );
  }


  return (
    <Grid container direction="column">
      {/*TODO account status header n local status header here*/}
      <Grid item xs={2} sx={{ bgcolor: 'background.default' }}>

        <Grid container>
          <Grid item p={2} xs={12}>
            <AccountHeader />
          </Grid>
          {/*TODO refactor and finish backbutton*/}
          <Grid item container p={2}>
            <Grid item xs={5}>
              <BackButton />
            </Grid>
            <Grid item xs={5}>
              {/*TODO bind to element*/}
              <Fab
                variant="extended"
                onClick={() => handleAddClick()}
                component={RouterLink} to="/eventdetails"
                sx={{ width: '145px', height: '45px' }}
                color="primary"
                aria-label="add">
                <AddIcon sx={{ mr: 1 }} />
                <Typography display="inline">Addevent</Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item pt={8} pb={8} xs={10}>
        <Grid container>
          <Grid item xs={12}>
            <EventCard>
            </EventCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default EventPage;