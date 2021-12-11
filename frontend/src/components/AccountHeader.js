import Grid from '@mui/material/Grid';
import React, { useContext } from "react";
import { Context } from "../webapp";
import UserAvatar from './UserAvatar';

function AccountHeader() {

  const [state, setState] = useContext(Context);

  console.log(state)

  return (

    <Grid container>
      <Grid item>
        ACCOUNT HEADER HERE
      </Grid>
      <Grid item>
        <UserAvatar />
      </Grid>
    </Grid>
  )
}

export default AccountHeader;