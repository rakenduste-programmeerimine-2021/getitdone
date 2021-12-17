import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  //var imgUrl = 'https://picsum.photos/' + getWindowDimensions().width + '/' + getWindowDimensions().height

  const imgUrl = 'https://picsum.photos/300/300'

  //console.log(imgWidthStr)

  return (

    //<Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{ flexDirection: { xs: "column", md: "row" }, minHeight: '100vh'  }}
    >
      <Grid align='center' item xs={6}>
        <Typography align='center' variant="h3" gutterBottom component="div">
          Get It Done
        </Typography>
        <Typography align='center' variant="subtitle1" color="#787878" gutterBottom component="div">
          Create and manage your TODO list in one, convenient app.
        </Typography>

        <Stack sx={{ m: 4, width: '330px' }} spacing={2} >
          <Button size="large" component={RouterLink} to="/login" variant="contained">Log in now!</Button>
          <Button size="medium" component={RouterLink} to="/signup" variant="outlined">Sign up</Button>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <img src={imgUrl} style={{borderRadius: '10%'}} />
      </Grid>
    </Grid>
    //</Box>
    //style = { borderRadius: "50%" }
  );
}
export default Home;