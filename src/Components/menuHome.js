import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: "#6D712E",
      display: "flex",
  },
  menuLinks: {
    display: "flex",
    flexDirection: "row",
    margin: "auto"
  },
  menubtn1: {
      paddingLeft: "60px",
      paddingRight: "60px",
      fontSize: "20px",
      fontFamily: "Chancery",
  },
}));

export default function MenuHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
        <div className={classes.menuLinks}>
          <Button className={classes.menubtn1} color="inherit">Home</Button>
          <Button className={classes.menubtn1} color="inherit">About</Button>
        </div>
        <div className={classes.menuLinks}>
          <Button className={classes.menubtn1} color="inherit">Services</Button>
          <Button className={classes.menubtn1} color="inherit">Contact Me</Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
