import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import React, { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import EventCard from '../components/EventCard';
import Task from '../components/Task';
import { getSessAuth } from '../components/TEMP_auth';

function Home() {

  //TODO testing
  useEffect(() => {
    getSessAuth()
  })
  
  return (
    <div className="Home">
      <Typography variant="h2">
        TEST GID
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Stack spacing={2}>
          <Button component={RouterLink} to="/login">
            LogIn page
          </Button>
          <Button component={RouterLink} to="/signup">
            SignUp page
          </Button>
          <Button component={RouterLink} to="/taskdetails">
            Task DETAILS page
          </Button>
          <Button component={RouterLink} to="/eventdetails">
            Event DETAILS page
          </Button>
          <Button component={RouterLink} to="/taskpage">
            Task page
          </Button>
          <Button component={RouterLink} to="/eventpage">
            Event page
          </Button>
          <Button component={RouterLink} to="/profilesettings">
            Profile Settings Page
          </Button>
        </Stack>
      </Box>

      <div>
        <Task>

        </Task>
      </div>


      <div>
        <EventCard>

        </EventCard>
      </div>


    </div>
  );
}
export default Home;