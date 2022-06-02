import React from 'react'
import logo from "../Assets/CrewasisLogo.png"
import {
  Typography,
  makeStyles,
  Divider,
  Button,
  Box,
  Icon
} from "@material-ui/core";
import weeklyInsightsFile from "../Assets/files/disabilities.pdf";
import svgIcon from '../Assets/svg/home.svg'


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
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
  Button: {
    marginTop: 10,
    marginLeft: 15,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textDecoration: "none",
    width: '300px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: "purple",
    fontWeight: 600,
    margin: '0px',
    padding: '10px',
    transition: '0.3s all',
    background: '#e0b6e1',
    fontSize: "15px",
    //marginLeft: theme.spacing(3),
    "&:hover": {
      // borderBottom: "4px solid purple",
      background: 'purple',
      color: '#e0b6e1',
      transition: 'all 0.25s ease-in',
    },
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    marginTop: '10px',
    height: '500px',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      height: '200px',
      marginTop: '10px',
    },
  }

  }));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Button className = {classes.Button}> Download </Button>
      <div className = {classes.logo}>
        <img src = {logo} alt="logo"></img>
      </div>
      <Divider></Divider> */}
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src={svgIcon} alt="home svg" />
      </Icon>
      <Typography className={classes.Title}>We explore new ideas!</Typography>
      <Box className={classes.root}>
        <Button
          className={classes.link}
          href={weeklyInsightsFile}
          download="disabilities.pdf">
          Download Most Recent Idea
        </Button>
      </Box>
    </div>
  )
}

export default Home
