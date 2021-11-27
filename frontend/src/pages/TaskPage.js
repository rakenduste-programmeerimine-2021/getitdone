import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import Task from '../components/Task';
import { Context } from "../webapp";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




function TaskPage() {

  const [state, dispatch] = useContext(Context);

  console.log('THIS >>')
  console.log(state)

/*  const tasks = state.tasks.data;*/


  return (
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
              <Fab sx={{ width: '45px', height: '45px' }} color="primary" aria-label="back" >
                <ArrowBackIosNewIcon />
              </Fab>
            </Grid>
            <Grid item xs={5}>
              <Fab variant="extended" sx={{ width: '145px', height: '45px' }}  color="primary" aria-label="add">
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
          <Grid item xs={12} fullWidth>
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