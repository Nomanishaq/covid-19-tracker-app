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

   <div className={classes.root}>
     <Paper className={style.paper} elevation={5} >
        <h1 className={style.h1}>Confirmed</h1>
        <p className={style.pConfrimed} ><CountUp start={0} separator=", " end={confirmed.value} duration={3.0}></CountUp></p> 
        <p className={style.Child}>Number of confirmed COVID-19 cases</p>
        </Paper>
      <Paper className={style.paper} elevation={5} >
      <h1 className={style.h1}>Recovered</h1>
      <p className={style.pRecoverd} ><CountUp start={0} separator=", " end={recovered.value} duration={3.0}></CountUp></p> 
      <p className={style.Child}>Number of Recovered COVID-19 cases</p>

      </Paper>
       <Paper className={style.paper} elevation={5} >
      <h1 className={style.h1}>Deaths</h1>
         <p className={style.pDeath} ><CountUp start={0} separator=", " end={deaths.value} duration={3.0}></CountUp></p> 
        <p className={style.Child}>Number of Deaths COVID-19 cases</p>

      </Paper>
      <Paper className={style.paper} elevation={5}>
        <h1 className={style.h1}>Last Update</h1>
        <p className={style.p}>{new Date(lastUpdate).toDateString()}</p>
        <p className={style.Child}>Updated</p>

      </Paper>
     </div>
  
     </Container>
 
    )
}

