import Grid from '@mui/material/Grid';
import React, { useContext } from "react";
import BackButton from '../components/BackButton';
import { Context } from "../webapp";



function TaskDetails() {

  const [state, dispatch] = useContext(Context);

  console.log('THIS >>')
  console.log(state)

  /*  const tasks = state.tasks.data;*/


  return (
    <>
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
      </Grid>
    </>
  );
}
export default TaskDetails;