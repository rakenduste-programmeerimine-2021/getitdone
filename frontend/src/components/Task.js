import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import produce from "immer";
import React, { useContext, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Context } from "../webapp";
import { setTaskDone, setTaskUnDone } from './API';
import UserAvatar from './UserAvatar';
import moment from 'moment';




//TODO desc max character len
//TODO kui lisada pilt, jagatakse disc ruum pooleks



function TodoToggle({ taskId }) {

  const [visibilityState, setvisibilityState] = useState('hidden')

  const child = React.createRef();

  const reqBody = {
    "task_id": taskId
  }
  axios.post('http://localhost:8080/api/task/getcompletestatus', reqBody).then(resp => {  
    if (resp.data === true) {
      setvisibilityState('')
    } else {
      setvisibilityState('hidden')
    }

  }).catch(error => {
    console.log(error)
  })

  const toggleDone = () => {
    console.log('toggleDone onClick')
    if (visibilityState === 'hidden') {
      setvisibilityState('')
      //TODO db hook
      console.log('toggleState === true  >>  ' + taskId)
      const doneJSON = {
        "task_id": taskId,
        "user_id": window.sessionStorage.getItem("TEMP_uid")
      }
      //console.log('<< initState >> ' + initState)
      setTaskDone(doneJSON)
    } else if (visibilityState === '') {
      setvisibilityState('hidden')
      //TODO db hook
      console.log('toggleState === false  >>  ' + taskId)
      const undoneJSON = {
        "task_id": taskId,
        "user_id": null
      }
      setTaskUnDone(undoneJSON)
    }
  }

  return (
    <CardActionArea onClick={toggleDone} >
      <Paper elevation={2} >
        <CheckCircleOutlineIcon
          ref={child}
          sx={{
            width: '100%',
            height: '100%',
            visibility: visibilityState
          }}
        />
      </Paper>
    </CardActionArea>
  );
}



function Task() {

  const [state, setState] = useContext(Context);

  const handleEditClick = (id) => {
    console.log('handleEditClick => ' + id)
    setState(
      produce((draft) => {
        draft.tasks.openTaskId = id
      })
    );
  }

  return (

    <Container>
      <Grid container spacing={5} direction="column">
        {state.tasks.data.map((task) => (
          <Grid item key={task.task_id} xs={12} >
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              <Grid container p={3}>

                <Grid container item md={9} xs={8}>
                  <Grid item pr={2} pb={1} xs={9} >
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px', minWidth: '250px' }} elevation={2} >
                      <Typography align={'left'} sx={{ p: '6px' }} noWrap variant="h6" >

                        {task.task_name}

                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', minWidth: '150px' }} xs={3}>
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px' }} elevation={2} >
                      <Grid container item justify="left"
                        alignItems="center" sx={{ width: '100%', height: '100%', maxHeight: '45px' }} xs={12}>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <UserAvatar />
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <UserAvatar />
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <UserAvatar />
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "none", md: "block" }} xs={2} >
                          <UserAvatar />
                        </Grid>
                        {/*TODO some hidden element here*/}
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "block", md: "none" }} xs={2} >
                          <UserAvatar />
                        </Grid>
                        {/*TODO avatar overflow handle here*/}
                        <Grid item xs={1} >
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', height: '100%', pt: '7px', pb: '7px'}} xs={12}>
                    <Typography sx={{
                      width: '100%',
                      minHeight: '60px',
                      maxHeight: '25px',
                      overflow: "hidden",
                    }} gutterBottom variant="body2">

                      {task.task_details}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item  xs={1}>
                </Grid>
                <Grid item sx={{ minWidth: '70px', minHeight: '70px' }} md={2} xs={3}>
                  <TodoToggle taskId={task.task_id}/>
                </Grid>
                <Grid container item sx={{ maxHeight: '45px', maxWidth: '355px', minWidth: '355px' }} xs={8}>
                  <Grid item xs={6}>
                    <Paper elevation={1} >
                      {/*TODO presentation - remove seconds*/}
                      <Typography sx={{
                        wordBreak: "keep-all",
                        p: '6px',
                      }} variant="subtitle1">
                        {moment(task.task_deadline).format('MMMM Do YYYY')}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item display={{ xs: "none", md: "block" }} xs={2}>
                  </Grid>
                  {/*<Grid item md={2} xs={1}>*/}
                  <Grid item xs={1}>
                    <Fab
                      onClick={() => handleEditClick(task.task_id)}
                      component={RouterLink} to="/taskdetails"
                      sx={{ width: '45px', height: '45px' }}
                      color="secondary"
                      aria-label="edit" >

                      <EditIcon/>

                    </Fab>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

}

export default Task