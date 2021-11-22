import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { Context } from "../webapp";
import { useContext } from "react";
import { loginUser, logoutUser } from "../webapp/actions";


function SignUpForm() {

  const [state, dispatch] = useContext(Context);

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
      <Box component="form" noValidate sx={{ mt: 1 }}>
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
            //helperText=" "
            margin="normal"
            required
            name="passwordConfirm"
            label="Confirm"
            type="passwordConfirm"
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