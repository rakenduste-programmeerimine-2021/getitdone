import SettingsIcon from '@mui/icons-material/Settings';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import { Context } from "../webapp";
import UserAvatar from './UserAvatar';

function AccountHeader() {

  const [state, setState] = useContext(Context);

  console.log(state)

  var userName = state.auth.name;
  if (!userName) {
    userName = 'DEFAULT TESTING USER'
  }

  console.log(userName)

  return (

    <Grid container direction="row">
      <Grid item sx={{ display: "flex", justifyContent: "flex-start" }} xs={8}>
        <Typography align={'left'} sx={{ p: '6px' }} noWrap variant="h6" >
          {userName}
        </Typography>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={1}>
        <Fab
          //onClick={() => handleEditClick(evnt.event_id)}
          //component={RouterLink} to="/eventdetails"
          sx={{ width: '35px', height: '35px' }}
          color="primary"
          aria-label="user settings" >
          <SettingsIcon>
          </SettingsIcon>
        </Fab>
      </Grid>

      <Grid item sx={{ display: "flex", justifyContent: "flex-end" }} xs={1}>
        <UserAvatar   />
      </Grid>
    </Grid>
  )
}

export default AccountHeader;