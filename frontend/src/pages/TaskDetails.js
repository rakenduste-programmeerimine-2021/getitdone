import DeleteIcon from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Zoom from '@mui/material/Zoom';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import { addNewTask } from '../components/API';
import BackButton from '../components/BackButton';
import { Context } from "../webapp";


//TODO handle submit

function TaskDetails() {

  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  const handleTimeChange = (newValue) => {
    setTimeValue(newValue);
  };

  const [taskData, setData] = useState([]);
  const [timeValue, setTimeValue] = React.useState();

  const [checked, setChecked] = React.useState(false);
  const [doneOpen, setdoneOpen] = React.useState(false);

  const handleDone = (event) => {
    setChecked((prev) => !prev);
    setdoneOpen(true)
  }

  const handleSave = (event) => {
    //TODO remove random imgurl
    event.preventDefault();
    if (!window.currentEvent) {
      console.log('SESS eventId >> OK')
      if (!state.tasks.openTaskId) {
        //TESTING ONLY
        //TODO date!!
        const newTaskJSON = {
          "event_id": window.currentEvent,
          "task_name": event.target.taskname.value,
          "task_deadline": "2021-1-17",
          "task_details": event.target.taskdetails.value,
          "task_image_url": "https://picsum.photos/500/300/?random&rnd" + new Date().getTime()
        }
        addNewTask(newTaskJSON)
      } else {
        //TODO backend changes?
        const newEventJSON = {
          //"event_id": state.events.openEventId,
          //"event_name": event.target.eventname.value,
          //"event_details": event.target.eventdetails.value,
          ////"event_image_url": 'https://picsum.photos/500/300'
          //"event_image_url": "https://picsum.photos/500/300/?random&rnd" + new Date().getTime()
        }
        //editEvent(newEventJSON)
        //console.log('EVENT CHANGED >> ' + state.events.openEventId)
      }
      //TODO confirmation animation here

      handleDone()

      const delay = ms => new Promise(res => setTimeout(res, ms));
      const navDelay = async (time) => {
        await delay(time);
        navigate(-1)
      };
      navDelay(800)
    } else {
      navigate('/eventpage')
    }
  
    
  }

  const handleDelete = (event) => {
    //TODO need delete api
    console.log('DELETE HANDEL >> ')

  }

  useEffect(() => {
    if (state.tasks.openTaskId != null) {
      var taskDataPre = state.tasks.data.find(item => {
        return item.id === state.tasks.openTaskId
      })
      setData(taskDataPre)
      setTimeValue(taskDataPre.deadline)
    } 
  }, [state.tasks.data, state.tasks.openTaskId]);

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
                id="taskname"
                label="Task Name"
                multiline
                rows={1}
                required
                defaultValue={taskData.name}
                //helperText="Some important text"
              />

              <DateTimePicker
                label="Date&Time picker"
                value={timeValue}
                onChange={handleTimeChange}
                renderInput={(params) => <TextField {...params} />}
              />


              <TextField
                id="taskdetails"
                label="Task description"
                multiline
                rows={3}
                defaultValue={taskData.details}
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
            <Popover
              open={doneOpen}
              anchorReference={"none"}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Box >
                <Box sx={{ display: 'flex' }}>
                  {/*        <Zoom in={checked}>{icon}</Zoom>*/}
                  <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
                    <SaveIcon sx={{ width: '100%', height: '100%' }} />
                  </Zoom>
                </Box>
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}
export default TaskDetails;