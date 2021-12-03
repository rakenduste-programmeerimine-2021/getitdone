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
import BackButton from '../components/BackButton';
import { Context } from "../webapp";

//TODO handle submit

function EventDetails() {

  const [state, setState] = useContext(Context);

  const [eventData, setData] = useState([]);

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
                ACCOUNT HEADER HERE
              </Grid>
              {/*TODO refactor and finish backbutton*/}
              <Grid item container p={2}>
                <Grid item xs={5}>
                  <BackButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item component="form" noValidate xs={10}>
            {/*TODO fix multiline hack here*/}
            <Stack spacing={2} p={7}>
              <TextField
                id="outlined-helperText"
                label="Event Name"
                multiline
                rows={1}
                defaultValue={eventData.event_name}
                helperText="Some important text"
              />

              <TextField
                id="outlined-multiline-static"
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

              <Button variant="outlined" startIcon={<DeleteIcon />}>
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