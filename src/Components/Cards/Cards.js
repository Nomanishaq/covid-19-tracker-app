import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import style from './Cards.module.css';
import {Container,Paper} from '@material-ui/core';

export default function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {    


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
}));
const classes = useStyles();

    if(!confirmed){
        return 'loading';
    }

   return (
 
 <Container className={style.container}>
   <h1 className={style.h1}>Covid-19 Tracker</h1>
   <div className={classes.root}>
      <Paper className={style.paper} elevation={5} >
        <h1>confirmed</h1>
        <CountUp start={0} end={confirmed.value} duration={5.0}></CountUp>
        </Paper>
      <Paper className={style.paper} elevation={5} >
      <h1>recovered</h1>
        <CountUp start={0} end={recovered.value} duration={5.0}></CountUp>
      </Paper>
       <Paper className={style.paper} elevation={5} >
      <h1>deaths</h1>
          <CountUp start={0} end={deaths.value} duration={5.0}></CountUp>
          </Paper>
     </div>
       <p>{new Date(lastUpdate).toDateString()}</p>
     </Container>
 
    )
}

