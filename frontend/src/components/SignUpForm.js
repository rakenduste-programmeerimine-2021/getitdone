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
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
{/*        TODO GIT ICON HERE
 *        <LockOutlinedIcon />*/}
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      {/*TODO HANDLE SUBMIT*/}
      {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>*/}
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          id="firstName"
          label="First Name"
          name="firstName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          required
          name="passwordConfirm"
          label="Confirm"
          type="passwordConfirm"
          id="passwordConfirm"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">
              {"Already have an account? Log In Here!"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    )
}

export default SignUpForm