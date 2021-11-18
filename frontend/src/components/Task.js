import { Context } from "../webapp";
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardActionArea from '@mui/material/CardActionArea';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Avatar from '@mui/material/Avatar';

//TODO desc max character len
//TODO kui lisada pilt, jagatakse disc ruum pooleks

function Task() {

  const [state, dispatch] = useContext(Context);

  const tasks = [1, 2, 3,];

  //const TEMP_desc = "Lorem Ipsum is simply dummy text of the "
  const TEMP_desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
/*  const TEMP_desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."*/
  const TEMP_title = "Task Name - eriti pikk task name"


  return (

    <Container sx={{ py: 10 }} maxWidth="md">
      <Grid container spacing={5} direction="column">
        {tasks.map((task) => (
          <Grid item key={task} xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              {/*<CardActionArea>*/}

              {/*<Grid container rowSpacing={1} columnSpacing={3} >*/}
              <Grid container p={3}>

                <Grid container item xs={9}>
                  <Grid item pr={2} xs={9} >
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px' }} elevation={2} >
                      <Typography align={'left'} noWrap variant="h6" >
                        {TEMP_title}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%' }} xs={3}>
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px' }} elevation={2} >
                      <Grid container item xs={12}>
                        <Grid item xs={3} >
                          <Avatar sx={{  bgcolor: 'secondary.main' }}>
                          </Avatar>
                        </Grid>
                        <Grid item xs={3} >
                          <Avatar sx={{ bgcolor: 'secondary.main' }}>
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    {/*sx={{ width: '100%', height: '100%' }}*/}
                    <Typography noWrap variant="body2">
                      {TEMP_desc}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid xs={1}>
                </Grid>

                <Grid xs={2}>
                  <CardActionArea>
                    <Paper sx={{ width: '100%', height: '100%'}} elevation={2} >
                      <CheckCircleOutlineIcon
                        sx={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </Paper>
                  </CardActionArea>
                </Grid>



                {/*<Grid item xs={6}>*/}
                {/*  <CardMedia*/}
                {/*    component="img"*/}
                {/*    sx={{*/}
                {/*      // 16:9*/}
                {/*      pt: '2%',*/}
                {/*      width: '20%',*/}
                {/*      height: '20%',*/}
                {/*    }}*/}
                {/*    image="https://source.unsplash.com/random"*/}
                {/*    alt="random"*/}
                {/*  />*/}
                {/*</Grid>*/}


                <Grid container item xs={9}>
                  <Grid item xs={6}>
                    <Paper sx={{ width: '100%', height: '100%' }} elevation={1} >
                      <Typography variant="h6">
                        12.05.2022 20:53
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', height: '100%'}} xs={6}>
                    <CardActions>
                      <Button sx={{ cursor: 'pointer' }} size="small">EDIT</Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

}

export default Task