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
import React, { Component, useContext, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Context } from "../webapp";





//TODO desc max character len
//TODO kui lisada pilt, jagatakse disc ruum pooleks




class TodoToggle extends Component {

  state = {
    toggleState: true,
    visibilityState: ''
    //TODO db hook
  }

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  toggleDone() {
    if (this.state.toggleState === true) {
      this.setState({ toggleState: !this.state.toggleState })
      this.setState({ visibilityState: 'hidden' })
      //TODO db hook
    } else if (this.state.toggleState === false) {
      this.setState({ toggleState: !this.state.toggleState })
      this.setState({ visibilityState: '' })
      //TODO db hook
    }
  }

  render() {
    return (
      <CardActionArea onClick={() => this.toggleDone()} >
        <Paper elevation={2} >
          <CheckCircleOutlineIcon
            ref={this.child}
            sx={{
              width: '100%',
              height: '100%',
              visibility: this.state.visibilityState
            }}
          />
        </Paper>
      </CardActionArea>
    );
  }
}


function Task() {

  const [state, setState] = useContext(Context);

  //useEffect(() => {
  //  axios.get('http://localhost:3003/tasks').then(resp => {
  //    setTasks(resp)
  //  });
  //}, []);

  //const setTasks = (data) => {
  //  setState(
  //    produce((draft) => {
  //      draft.tasks = data
  //    })
  //  );
  //}


  const handleEditClick = (id) => {
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
          <Grid item key={task.id} xs={12} >
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              <Grid container p={3}>

                <Grid container item md={9} xs={8}>
                  <Grid item pr={2} pb={1} xs={9} >
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px', minWidth: '250px' }} elevation={2} >
                      <Typography align={'left'} sx={{ p: '6px' }} noWrap variant="h6" >

                        {task.name}

                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', minWidth: '150px' }} xs={3}>
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px' }} elevation={2} >
                      <Grid container item justify="left"
                        alignItems="center" sx={{ width: '100%', height: '100%', maxHeight: '45px' }} xs={12}>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "none", md: "block" }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        {/*TODO some hidden element here*/}
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "block", md: "none" }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'red',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
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

                      {task.details}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item  xs={1}>
                </Grid>
                <Grid item sx={{ minWidth: '70px', minHeight: '70px' }} md={2} xs={3}>
                  <TodoToggle/>
                </Grid>
                <Grid container item sx={{ maxHeight: '45px', maxWidth: '355px', minWidth: '355px' }} xs={8}>
                  <Grid item xs={6}>
                    <Paper elevation={1} >
                      {/*TODO presentation - remove seconds*/}
                      <Typography sx={{
                        wordBreak: "keep-all",
                        p: '6px',
                      }} variant="subtitle1">
                        {task.deadline}
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
                      onClick={() => handleEditClick(task.id)}
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