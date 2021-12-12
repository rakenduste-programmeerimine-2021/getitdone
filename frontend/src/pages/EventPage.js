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
import { Context } from "../webapp";


function EventPage() {

  const [state, setState] = useContext(Context);


  //TODO fix double get
  console.log(state)

  useEffect(() => {
    axios.get('http://localhost:3003/events').then(resp => {
      const setEvents = (data) => {
        setState(
          produce((draft) => {
            draft.events = data
          })
        );
      }
      setEvents(resp)
    });
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