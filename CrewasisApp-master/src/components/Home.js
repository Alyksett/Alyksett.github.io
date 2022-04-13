import React from 'react'
import logo from "../Assets/CrewasisLogo.png"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Divider,
  Button
} from "@material-ui/core";
import { borderLeft } from '@mui/system';
import { formHelperTextClasses } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center"
  },
  Title: {
    fontSize: "70px",
    textAlign: 'center',
  },
  Button: {
    marginTop: 10,
    marginLeft: 1590
  }
  }));

const Home = () => {
  const classes = useStyles();
  return (
    <div >
      <Button className = {classes.Button}> Download </Button>
      <div className = {classes.logo}>
        <img src = {logo} ></img>
      </div>
      <Divider></Divider>
      <Typography className={classes.Title}>We explore new ideas!</Typography>
    </div>
  )
}

export default Home
