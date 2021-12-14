import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import produce from "immer";
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Context } from "../webapp";
import { setSessAuth, getSessAuth } from "./TEMP_auth"


//default MUI LogIn page, based on
//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js

function LogInForm() {

  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  //TODO bind backend
  console.log(state)
  console.log(setState)


  //window.sessionStorage.setItem("authTest", "123");

  //console.log('AUTH TEST >> ')
  //console.log(window.sessionStorage.getItem("authTest"))
  //window.sessionStorage.getItem("key");


  const handleLogIn = (event) => {
    event.preventDefault();

    //TODO fix security

    const loginOut = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    axios.post('http://localhost:8080/api/user/login', loginOut).then(resp => {
      const setAuth = (data) => {
        setState(
          produce((draft) => {
            //draft.auth.email = data.email
            //draft.auth.id = data.id
            //draft.auth.token = data.token
            //draft.auth.name = data.name
            setSessAuth(data.token, data.id,  data.name, data.email)
            getSessAuth()
          })
        );
      }
      setAuth(resp.data)

      navigate('/eventpage')
    }).catch(error => {
      console.log({
        error,
        'error status': error.response.status,
        'error response': error.response.data
      })
    });
  }

  return(
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">

        Log in
      </Typography>
      {/*TODO HANDLE SUBMIT*/}
      {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>*/}
      <Box component="form" noValidate onSubmit={handleLogIn} sx={{ mt: 1, ml: 3, mr:3 }}>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>

          <Grid item sx={{ mr: 3 }} xs>

            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>

          <Grid item xs>

            <Link component={RouterLink} to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LogInForm