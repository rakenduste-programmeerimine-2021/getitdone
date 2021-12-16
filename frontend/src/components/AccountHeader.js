import SettingsIcon from '@mui/icons-material/Settings';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Context } from "../webapp";
import UserAvatar from './UserAvatar';
import LogoutButton from './LogoutButton';

function AccountHeader() {

  const [state, setState] = useContext(Context);

  console.log(state)

  var userName = window.sessionStorage.getItem("name");
  if (!userName) {
    userName = 'DEFAULT TESTING USER'
  }


  return (

    <Grid container direction="row">
      <Grid item sx={{ display: "flex", justifyContent: "flex-start" }} xs={1}>
        <UserAvatar />
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "flex-start", pl:"7" }} xs={5}>
        <Typography align={'left'} sx={{ p: '6px', pl: '15px' }} noWrap variant="h6" >
          {userName}
        </Typography>
      </Grid>
      <Grid item xs={2}>
      </Grid>

      <Grid item item sx={{ display: "flex", justifyContent: "flex-end" }} xs={2}>
        <Fab
          //onClick={() => handleEditClick(evnt.event_id)}
          component={RouterLink} to="/profilesettings"
          sx={{ width: '35px', height: '35px' }}
          color="primary"
          aria-label="user settings" >
          <SettingsIcon>
          </SettingsIcon>
        </Fab>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "flex-end" }} xs={2}>
        <LogoutButton  />
      </Grid>

    </Grid>
  )
}

export default AccountHeader;