import { Context } from "../webapp";

import React, { useContext, Component } from "react";

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
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import CropDinIcon from '@mui/icons-material/CropDin';


//TODO desc max character len
//TODO kui lisada pilt, jagatakse disc ruum pooleks




class TodoToggle extends Component {

  state = {
    toggleState: true,
    visibilityState: ''
    //TODO db hook
  }

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  toggleDone() {
    if (this.state.toggleState == true) {
      this.setState({ toggleState: !this.state.toggleState })
      this.state.visibilityState = 'hidden'
      //TODO db hook
    } else if (this.state.toggleState == false) {
      this.setState({ toggleState: !this.state.toggleState })
      this.state.visibilityState = ''
      //TODO db hook
    }
  }

  render() {
    return (
      <CardActionArea onClick={() => this.toggleDone()} >
        <Paper elevation={2} >
          <CheckCircleOutlineIcon
            ref={this.child}
            sx={{
              width: '100%',
              height: '100%',
              visibility: this.state.visibilityState
            }}
          />
        </Paper>
      </CardActionArea>
    );
  }
}


function Task() {

  const [state, dispatch] = useContext(Context);


  const tasks = [];

  const TEST_task = {
    id: 'teasttaskid 123',
    name: 'TASK NAME - eriti pikk task name',
    deadline: '12.05.2022 20:53',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img_url: 'TODO',
    completed_by: 'ARRAY?',
    members: 'ARRAY?'
  }

  for (let i = 0; i < 4; i++) {
    tasks.push(TEST_task)
  }


  return (

    <Container sx={{ py: 10 }} maxWidth="md">
      <Grid container spacing={5} direction="column">
        {tasks.map((task) => (

          <Grid item key={task} xs={12} >
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              <Grid container p={3}>

                <Grid container item md={9} xs={8}>
                  <Grid item pr={2} pb={1} xs={9} >
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px', minWidth: '250px' }} elevation={2} >
                      <Typography align={'left'} sx={{ p: '6px' }} noWrap variant="h6" >

                        {task.name}

                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', minWidth: '150px' }} xs={3}>
                    <Paper sx={{ width: '100%', height: '100%', maxHeight: '45px' }} elevation={2} >
                      <Grid container item justify="left"
                        alignItems="center" sx={{ width: '100%', height: '100%', maxHeight: '45px' }} xs={12}>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "none", md: "block" }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'primary.main',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        {/*TODO some hidden element here*/}
                        <Grid item sx={{ margin: '4px' }} display={{ xs: "block", md: "none" }} xs={2} >
                          <Avatar sx={{
                            bgcolor: 'red',
                            width: '35px',
                            height: '35px'
                          }}>
                          </Avatar>
                        </Grid>
                        {/*TODO avatar overflow handle here*/}
                        <Grid item xs={1} >
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item sx={{ width: '100%', height: '100%', pt: '7px', pb: '7px'}} xs={12}>
                    <Typography sx={{
                      width: '100%',
                      minHeight: '60px',
                      maxHeight: '25px',
                      overflow: "hidden",
                    }} gutterBottom variant="body2">

                      {task.details}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item  xs={1}>
                </Grid>
                <Grid item sx={{ minWidth: '70px', minHeight: '70px' }} md={2} xs={3}>
                  <TodoToggle/>
                </Grid>
                <Grid container item sx={{ maxHeight: '45px', maxWidth: '355px', minWidth: '355px' }} xs={8}>
                  <Grid item xs={6}>
                    <Paper elevation={1} >
                      <Typography sx={{
                        wordBreak: "keep-all",
                        p: '6px',
                      }} variant="h6">
                        {task.deadline}

                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item display={{ xs: "none", md: "block" }} xs={2}>
                  </Grid>
                  {/*<Grid item md={2} xs={1}>*/}
                  <Grid item xs={1}>
                    <Fab sx={{ width: '45px', height: '45px' }} color="secondary" aria-label="edit" >

                      <EditIcon/>

                    </Fab>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
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