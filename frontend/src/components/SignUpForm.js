import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Context } from "../webapp";


function SignUpForm() {

  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  //TODO bind backend
  console.log(state)
  console.log(setState)

  const handleSignUp = (event) => {
    event.preventDefault(); 

    //navigate('/eventpage')
    //TODO fix this

    const fullName = event.target.firstName.value + ' ' + event.target.lastName.value
    const signinOut = {
      "name": fullName,
      "email": event.target.email.value,
      "password": event.target.password.value
    }

    axios.post('http://localhost:8080/api/user/register', signinOut).then(resp => {

      console.log(resp)
      navigate('/login')

    });

  }

  return (
    <Box

      sx={{ marginTop: 8 , marginLeft: 3}}
    >
      {/*<Grid container spacing={0} direction="column">*/}
      <Box sx={{ ml: 5, minWidth: '100px' }}>
        <Avatar sx={{ m: 1, ml:2 , bgcolor: 'secondary.main' }}>
  {/*        TODO GIT ICON HERE
    *        <LockOutlinedIcon />*/}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      </Box>
      {/*TODO HANDLE SUBMIT*/}
      {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>*/}
      <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1 }}>
        <div>
          <TextField
            margin="normal"
            required
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            sx={{ mr: 2, width: '25ch' }}
          />
          <TextField
            margin="normal"
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            sx={{ mr: 2, width: '25ch' }}
          />
        </div>
        <div>
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            sx={{ mr: 2, width: '100%', minWidth: '25ch', maxWidth: '447px' }}
          />
        </div>
        <div>
          <TextField
            //helperText="Use 8 or more characters with a mix of letters and symbols"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            sx={{ mr: 2, width: '25ch' }}
          />
          <TextField
            //TODO confirm pass
            //helperText=" "
            margin="normal"
            required
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
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">

              {/*{"Already have an account? Log In Here!"}*/}
              {"Log in instead"}

            </Link>
          </Grid>
        </Grid>
      </Box>

      {/*</Grid>*/}

    </Box>
    )
}

export default SignUpForm