import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import produce from "immer";
import React, { useContext, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Context } from "../webapp";
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import { setCurrentEvent } from './TEMP_auth';

function EventCard() {


  const [state, setState] = useContext(Context);
  const navigate = useNavigate();
  //const [actionAreaEnabled, setActionAreaEnabled] = useState(true);
  var actionAreaEnabled = true;

  //const actionAreaEnabled = false;
  //setActionAreaEnabled(true)
  //console.log(actionAreaEnabled)

  const handleEditClick = (id) => {
    //setActionAreaEnabled(false)
    actionAreaEnabled = false;
    setState(
      produce((draft) => {
        draft.events.openEventId = id
      })
    );
  }


  //TODO sep this
  const handleEventClick = (id) => {

    setCurrentEvent(id)
    console.log('<< EVENT SESSION ID >>')
    console.log(window.sessionStorage.getItem("currentEvent"))

    setState(
      produce((draft) => {
        draft.events.openEventId = id
      })
    );
    //TODO fix task target async
    if (actionAreaEnabled === true) {
      navigate('/taskpage')
    }
  }


  const TEMP_TasksDone = '100'
  const TEMP_TasksToDo = '300'
  const TEMP_TasksProgress = 100 * (TEMP_TasksDone / TEMP_TasksToDo)

  console.log('EVENT CARD MAP')
  console.log(state.events.data)

  return (

    <Container sx={{ py: 10}} maxWidth="md">
      <Grid container spacing={5} direction="column">
        {/*{state.events.data.map((evnt) => (*/}
        {state.events.data.map((evnt) => (
          <Grid item key={evnt.event_id} xs={12}>
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              <CardActionArea onClick={() => handleEventClick(evnt.event_id)}  >
              {/*<CardActionArea>*/}
                <Grid container p={3} direction="row">
                <Grid item xs={6} >
                  <Grid container direction="column">
                    <Grid item sx={{ minWidth: '280px' }} xs={2} >
                      <Paper sx={{ maxHeight: '45px', borderRadius: '5px' }} elevation={2} >
                        <Typography align={'left'} sx={{ p: '6px' }} variant="h6" >
                          {evnt.event_name}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={2} >
                      <Typography align={'left'} sx={{ p: '1px' }} noWrap variant="subtitle1" >
                        {"Next deadline:"}
                      </Typography>
                    </Grid>
                    {/*<Grid item sx={{ minWidth: '280px' }} xs={2} >*/}
                    <Grid item sx={{ minWidth: '250px' }} xs={2} >
                      <Paper sx={{ maxHeight: '40px', maxWidth: '170px' }} elevation={2} >
                        <Typography align={'left'} sx={{ p: '1px', wordBreak: "keep-all" }} variant="subtitle1" >
                          {evnt.event_next_deadline}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={2} >
                      <Typography align={'left'} sx={{ p: '1px' }} noWrap variant="subtitle1" >
                        {"Progress:"}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ p: '1px' }} xs={4} >
                      <Paper elevation={2} sx={{ p: '1px', maxWidth: '110px' }}>
                        <Grid container direction="row">
                          <Grid item xs={5} >
                            <Typography align={'left'} sx={{ p: '4px' }} variant="h6" >
                              {TEMP_TasksDone}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} >
                            <Typography align={'center'} sx={{ p: '4px' }} variant="h6" >
                              {'/'}
                            </Typography>
                          </Grid>
                          <Grid item xs={5} >
                            <Typography align={'right'} sx={{ p: '4px', pr: '5px' }} variant="h6" >
                              {TEMP_TasksToDo}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                      <Box sx={{ width: '70%', maxWidth: '130px', pt: '20px' }}>
                        <LinearProgress
                          variant="determinate"
                          value={TEMP_TasksProgress}
                          sx={{ height: '12px', borderRadius: '5px' }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} >
                  <Grid container direction="column" alignItems="flex-end" >
                    <Grid item xs={2} pb={2} sx={{ width: '45px', height: '45px' }} >
                      <Fab
                        onClick={() => handleEditClick(evnt.event_id)}
                        component={RouterLink} to="/eventdetails"
                        sx={{ width: '45px', height: '45px' }}
                        color="secondary"
                        aria-label="settings" >
                        <SettingsIcon>
                        </SettingsIcon>
                      </Fab>
                    </Grid>
                    <Grid item xs={10} >
                      {/*TODO use 300x200 image as baseline*/}
                      <Card>
                        <CardMedia
                          component="img"
                          alt="event image"
                          height="120px"
                          width="220px"
                          image={evnt.event_image_url}
                          sx={{ width: '100%', height: '100%', maxWidth: '410px', maxHeight: '200px' }}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                </Grid>
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}


export default EventCard