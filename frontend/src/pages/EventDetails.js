import DeleteIcon from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import { addNewEvent, editEvent } from "../components/API";
import BackButton from '../components/BackButton';
import { Context } from "../webapp";
//TODO handle submit

function EventDetails() {

  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  const [eventData, setData] = useState([]);



  const handleSave = (event) => {
    //TODO handle case update vs add new
    //TODO save confirmation
   //TODO remove random imgurl
    event.preventDefault();

    if (!state.events.openEventId) {
      //TESTING ONLY
      //new Date().getTime()
      const newEventJSON = {
        "name": event.target.eventname.value,
        "user_id": window.sessionStorage.getItem("TEMP_uid"),
        "event_details": event.target.eventdetails.value,
        //"event_image_url": 'https://picsum.photos/500/300'
        "event_image_url": "https://picsum.photos/500/300/?random&rnd" + new Date().getTime()
      }
      addNewEvent(newEventJSON);
      console.log('NEW EVENT ADDED')
    } else {
      //TODO backend changes?
      const newEventJSON = {
        "event_id": state.events.openEventId,
        "event_name": event.target.eventname.value,
        "event_details": event.target.eventdetails.value,
        //"event_image_url": 'https://picsum.photos/500/300'
        "event_image_url": "https://picsum.photos/500/300/?random&rnd" + new Date().getTime()
      }
      editEvent(newEventJSON)
      console.log('EVENT CHANGED >> ' + state.events.openEventId)
    }
    //TODO confirmation animation here
    navigate(-1)
  }

  const handleDelete = (event) => {
    //TODO need delete api
    console.log('DELETE HANDEL >> ')
    console.log(eventData)

  }


  useEffect(() => {
    if (state.events.openEventId != null) {
      
      console.log(state.events.openEventId)
      var eventDataPre = state.events.data.find(item => {
        return item.event_id === state.events.openEventId
      })
      setData(eventDataPre)
    }
  }, [state.events.data, state.events.openEventId]);

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item component="form" onSubmit={handleSave} xs={10}>
            {/*TODO fix multiline hack here*/}
            <Stack spacing={2} p={7}>
              <TextField
                id="eventname"
                label="Event Name"
                multiline
                rows={1}
                required
                defaultValue={eventData.event_name}
                helperText="Some important text"
              />

              <TextField
                id="eventdetails"
                label="Event description"
                multiline
                rows={3}
                defaultValue={eventData.event_details}
              />

              {/*TODO fix placeholder*/}
              <Avatar sx={{
                bgcolor: 'primary.main',
                width: '35px',
                height: '35px'
              }}>
              </Avatar>


              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>


              {/*TODO HANDLE SUBMIT*/}

              <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                Save
              </Button>

              <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}
export default EventDetails;