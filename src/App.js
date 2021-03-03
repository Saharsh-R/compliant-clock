import {React, useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Main from './Main';
import Grid from '@material-ui/core/Grid';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {red, blue} from '@material-ui/core/colors';
const redTheme = createMuiTheme({ palette: { primary: red } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://saharsh-r.github.io/">
        Saharsh Rathi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [breakDuration, setBreakDuration] = useState(5);
  const [sessionDuration, setSessionDuration] = useState(25);
  const [running, setRunning] = useState(false);
  const [session, setSession] = useState(true)
  const [remain, setRemain] = useState(25 * 60)

  const getStr = () => {
    let m = Math.floor(remain / 60)
    let s = (remain % 60)
    if (m < 10){
      m = '0' + m
    }
    if (s < 10){
      s = '0' + s
    }
    return  m+ ':' +s
  }

  useEffect(() => {
    let intervalId
    if (remain == 0){
      if (session){
        setRemain(breakDuration * 60)
      }else{
        setRemain(sessionDuration* 60)
      }
      setSession(!session)
      audioBeep.play()

    }
    if (running){
      intervalId = setInterval(() =>{
        setRemain(remain - 1)
      }, 1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [remain, running])

  useEffect(() => {
    setRemain(sessionDuration * 60)
  }, [sessionDuration])




  const reset = () => {
    setBreakDuration(5)
    setSessionDuration(25)
    setRemain(25*60)
    setRunning(false)
    setSession(true)
    audioBeep.pause();
    audioBeep.currentTime = 0;

  }

  const playPause = () => {
    setRunning(!running)
  }

  let audioBeep;



  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >

          <Grid item>
            <Typography variant="h1" component="h1" gutterBottom>
              Timer
            </Typography>
          </Grid>

          <Grid item >
            <Grid container spacing={3}>
              <Grid item  xs = {6} container >
                <Grid item xs = {12}>
                  <Typography id = 'break-label' variant="h6" align='center' gutterBottom>
                    Break Length
                  </Typography>
                </Grid>
                <Grid item xs = {12} container justify='center' alignItems='center'>
                  <Grid item >
                    <IconButton  disabled={(breakDuration == 60 || running) ? true : false } onClick={() => {if (!running && breakDuration < 60) {setBreakDuration(breakDuration + 1)} }} id = 'break-increment' >
                      <ArrowUpwardIcon  fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item >
                    <Typography id = 'break-length' variant="h5" align='center' gutterBottom>
                      {breakDuration}
                    </Typography>
                  </Grid>
                  <Grid item >
                    <IconButton disabled={(breakDuration == 1 || running) ? true : false } onClick={() => {if (!running && breakDuration > 1) {setBreakDuration(breakDuration - 1)} }} id = 'break-decrement'>
                      < ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item  xs = {6} container >
                <Grid item xs = {12}>
                  <Typography id = 'session-label' variant="h6" align='center' gutterBottom>
                    Session Length
                  </Typography>
                </Grid>
                <Grid item xs = {12} container justify='center' alignItems='center'>
                  <Grid item >
                    <IconButton  disabled={(sessionDuration == 60 || running) ? true : false } onClick={() => {if (!running && sessionDuration < 60) {setSessionDuration(sessionDuration + 1)} }} id = 'session-increment'>
                      <ArrowUpwardIcon  fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item >
                    <Typography id = 'session-length' variant="h5" align='center' gutterBottom>
                      {sessionDuration}
                    </Typography>
                  </Grid>
                  <Grid item >
                    <IconButton  disabled={(sessionDuration == 1 || running) ? true : false } onClick={() => {if (!running && sessionDuration > 1) {setSessionDuration(sessionDuration - 1)} }} id = 'session-decrement' >
                      < ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs = {12} container justify='center'>
                
                <Grid item xs = {6}>
                  <ButtonBase style = {{height: '100%', width: '100%', borderRadius: 30}}><Paper elevation={15} style = {{paddingTop: 10 , width: '100%', borderRadius: 30 }}>
                    <Typography id='timer-label' variant="h4" align='center' gutterBottom>
                      {session ?  'Session' : 'Break'}
                    </Typography>
                    <Typography  id="time-left" variant="h2" style = {{marginBottom: 0}} align='center' gutterBottom>
                      {getStr()}
                    </Typography>
                    <audio
                      id="beep"
                      preload="auto"
                      ref={(audio) => {
                        audioBeep = audio;
                      }}
                      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                    />
                  </Paper></ButtonBase>
                </Grid>
              </Grid>

              <Grid item xs ={12} container justify='center'>
                <Grid item >
                  <Box mr = {2}>
                    <MuiThemeProvider theme={running? redTheme : blueTheme}><Button id="start_stop" onClick={() => playPause()} size = 'large' variant="contained" color="primary" >
                      {running ? 'Pause' : 'Start'}
                    </Button></MuiThemeProvider>
                  </Box>
                </Grid>
                <Grid item>
                  <Box ml ={2}>
                    <Button id="reset" onClick={() => reset()} size = 'large' variant="contained" color="secondary">
                      Reset
                    </Button>
                  </Box>
                </Grid>
              </Grid>

            </Grid>
          </Grid>

          <Grid item>
            <Main />
            <Copyright />
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}
