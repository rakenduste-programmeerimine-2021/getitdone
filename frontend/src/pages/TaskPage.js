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
import Task from '../components/Task';
import { Context } from "../webapp";

function TaskPage() {

  const [state, setState] = useContext(Context);

  //useEffect(() => {
  //  axios.get('http://localhost:3003/tasks').then(resp => {
  //    //setTasks(resp)
  //    const setTasks = (data) => {
  //      setState(
  //        produce((draft) => {
  //          draft.tasks = data
  //        })
  //      );
  //    }
  //    setTasks(resp)
  //  });
  //}, [setState]);


  //useEffect(() => {
  //  axios.get('http://localhost:3003/tasks').then(resp => {
  //    //setTasks(resp)
  //    const setTasks = (data) => {
  //      setState(
  //        produce((draft) => {
  //          draft.tasks = data
  //        })
  //      );
  //    }
  //    setTasks(resp)
  //  });
  //}, [setState]);


  const reqBody = {
    //"event_id": "49b58445-0c96-4c55-b40e-391e224438fe"
    "event_id": window.sessionStorage.currentEvent
  }
  useEffect(() => {
    const makeTaskReq = async () => {
      try {
        axios.post('http://localhost:8080/api/task/geteventtasks', reqBody).then(resp => {
          const setTasks = (data) => {
            setState(
              produce((draft) => {
                //draft.events = data
                draft.tasks.data = data.data.eventTasks

              })
            );
          }
          setTasks(resp)
        }).catch(error => {
          console.log({
            error
          });
        })
      } catch (err) {
        console.error(err);
      }
    }
    makeTaskReq()

  }, [setState]);




  const handleAddClick = () => {
    setState(
      produce((draft) => {
        draft.tasks.openTaskId = null
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
              <Fab
                variant="extended"
                onClick={() => handleAddClick()}
                component={RouterLink} to="/taskdetails"
                sx={{ width: '145px', height: '45px' }}
                color="primary"
                aria-label="add">
                <AddIcon sx={{ mr: 1 }} />
                <Typography display="inline">Add Task</Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item pt={8} pb={8} xs={10}>
        {/*TODO back to top button*/}
        <Grid container>
          {/*<Grid item xs={1} fullWidth/>*/}
          {/*</Grid>*/}
          <Grid item xs={12}>
            {/*<Container sx={{ py: 10 }} maxWidth="md">*/}
            {/*<Grid container spacing={5} direction="row">*/}
            <Task>
            </Task>
            {/*</Grid>*/}
            {/*</Container>*/}
          </Grid>
{/*          <Grid item xs={1} fullWidth/>*/}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default TaskPage;