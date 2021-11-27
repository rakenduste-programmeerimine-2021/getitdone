import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function EventCard() {

  const events = [1, 2, 3,];


  //const TEMP_desc = "Lorem Ipsum is simply dummy text of the "
  //const TEMP_desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
/*  const TEMP_desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."*/


  const TEMP_title = "EVENT - eriti pikk event name"

  const TEMP_nextDeadline = '12.05.2022 20:53'
  const TEMP_TasksDone = '100'
  const TEMP_TasksToDo = '300'
  const TEMP_TasksProgress = 100 * (TEMP_TasksDone / TEMP_TasksToDo)



  return (

    <Container sx={{ py: 10}} maxWidth="md">
      <Grid container spacing={5} direction="column">
        {events.map((evnt) => (
          <Grid item key={evnt}>
            <Paper elevation={4} sx={{ bgcolor: 'background.default' }}>
              <Grid container p={3} direction="row">
                <Grid item xs={6} >
                  <Grid container direction="column">
                    <Grid item sx={{ minWidth: '280px' }} xs={2} >
                      <Paper sx={{ maxHeight: '45px', borderRadius: '21px' }} elevation={2} >
                        <Typography align={'left'} sx={{ p: '6px' }} variant="h6" >
                          {TEMP_title}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={2} >
                      <Typography align={'left'} sx={{ p: '1px' }} noWrap variant="subtitle1" >
                        {"Next deadline:"}
                      </Typography>
                    </Grid>
                    {/*<Grid item sx={{ minWidth: '280px' }} xs={2} >*/}
                    <Grid item sx={{ minWidth: '250px' }} xs={2} >
                      <Paper sx={{ maxHeight: '40px', maxWidth: '170px' }} elevation={2} >
                        <Typography align={'left'} sx={{ p: '1px', wordBreak: "keep-all" }} variant="h6" >
                          {TEMP_nextDeadline}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={2} >
                      <Typography align={'left'} sx={{ p: '1px' }} noWrap variant="subtitle1" >
                        {"Progress:"}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ p: '1px' }} xs={4} >
                      <Paper elevation={2} sx={{ p: '1px', maxWidth: '110px' }}>
                        <Grid container direction="row">
                          <Grid item xs={5} >
                            <Typography align={'left'} sx={{ p: '4px' }} variant="h6" >
                              {TEMP_TasksDone}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} >
                            <Typography align={'center'} sx={{ p: '4px' }} variant="h6" >
                              {'/'}
                            </Typography>
                          </Grid>
                          <Grid item xs={5} >
                            <Typography align={'right'} sx={{ p: '4px', pr: '5px' }} variant="h6" >
                              {TEMP_TasksToDo}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                      <Box sx={{ width: '70%', maxWidth: '130px', pt: '20px' }}>
                        <LinearProgress
                          variant="determinate"
                          value={TEMP_TasksProgress}
                          sx={{ height: '12px', borderRadius: '5px' }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} >
                  <Grid container direction="column" alignItems="flex-end" >
                    <Grid item xs={2} pb={2} sx={{ width: '45px', height: '45px' }} >
                      <Fab sx={{ width: '45px', height: '45px' }} color="secondary" aria-label="settings" >
                        <SettingsIcon>
                        </SettingsIcon>
                      </Fab>
                    </Grid>
                    <Grid item xs={10} >
                      {/*TODO use 300x200 image as baseline*/}
                      <Card >
                        <CardMedia
                          component="img"
                          alt="event image"
                          height="120px"
                          width="220px"
                          image="https://source.unsplash.com/random"
                          sx={{ width: '100%', height: '100%', maxWidth: '410px', maxHeight: '200px' }}
                        />
                      </Card>
                    </Grid>
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


export default EventCard