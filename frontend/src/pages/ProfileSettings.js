import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import BackButton from '../components/BackButton';
import { Context } from "../webapp";



function ProfileSettings() {

  const [state, setState] = useContext(Context);

  //TODO split name
  //TODO account settings change API
  //TODO handle API endpoints
  const name = window.sessionStorage.getItem("name");
  const email = window.sessionStorage.getItem("email");


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
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ marginTop: 8, marginLeft: 3 }}>
      {/*<Grid container spacing={0} direction="column">*/}
      <Box sx={{ ml: 5, minWidth: '100px' }}>
        <Typography component="h1" variant="h5">
          Change Your Account Settings
        </Typography>
      </Box>
      {/*TODO HANDLE SUBMIT*/}
      {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>*/}
      <Box component="form" sx={{ mt: 1 }}>
        <div>
          <TextField
            margin="normal"
            id="firstName"
            label="First Name"
            name="firstName"
            defaultValue={name}
            sx={{ mr: 2, width: '25ch' }}
          />
          <TextField
            margin="normal"
            id="lastName"
            label="Last Name"
            name="lastName"
            defaultValue={name}
            sx={{ mr: 2, width: '25ch' }}
          />
        </div>
        <div>
          <TextField
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            defaultValue={email}
            sx={{ mr: 2, width: '100%', minWidth: '25ch', maxWidth: '447px' }}
          />
        </div>
        <div>
          <TextField
            //helperText="Use 8 or more characters with a mix of letters and symbols"
            margin="normal"
            name="password"
            label="New Password"
            type="password"
            id="password"
            sx={{ mr: 2, width: '25ch' }}
          />
          <TextField
            //TODO confirm pass
            //helperText=" "
            margin="normal"
            name="passwordConfirm"
            label="Confirm"
            type="password"
            id="passwordConfirm"
            sx={{ mr: 2, width: '25ch' }}
          />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 5, width: '100px' }}
        >
          SAVE
        </Button>
      </Box>

      {/*</Grid>*/}

        </Box>
      </Grid>
    </Grid>
  )
}


export default ProfileSettings;