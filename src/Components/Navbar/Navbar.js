import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logo from '../../img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  inherit:{
    background: '#3f51b5',
    color: '#fff'
  }
}));

export default function Navbar() {
  const classes = useStyles();
 return (
    <div className={classes.root}>
  
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <img src={Logo} width="60px" alt="covid-19" />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <p>Covid-19 Tracker</p>
        </Typography>
       
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <a href="https://github.com/nomanishaq"><GitHubIcon title="Noman Ishaq" /></a>
            </IconButton>
          </div>
     
      </Toolbar>
    </AppBar>
  </div>
  );
}
