import SignUpForm from '../components/SignUpForm';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

function SignUp() {



  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <SignUpForm>

      </SignUpForm>
    </Grid>
    )
}


export default SignUp