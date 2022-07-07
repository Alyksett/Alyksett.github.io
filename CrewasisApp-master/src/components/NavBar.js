import React from "react";
import logo from "../Assets/CrewasisLogo.png" 
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import DrawerComp from "./DrawerComp";
import weeklyInsightsFile from "../Assets/files/disabilities.pdf";




const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    fontSize: "20px",
    flexGrow: "1",
    cursor: "pointer",
    color: 'purple',
    fontWeight: '600',
    marginLeft: theme.spacing(2)
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    textDecoration: "none",
    // letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: "purple",
    fontWeight: 600,
    padding: '10px',
    width: '160px',
    transition: '0.3s all',
    fontSize: "15px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      // borderBottom: "4px solid purple",
      background: '#e0b6e1',
      transition: 'all 0.25s ease-in',
    },
  },
  toolbar: {
    flex: 1,
    padding: '0px 32px',
    justifyContent: 'space-between',
    background: "#ede7f6",
    [theme.breakpoints.up('md')]: {
      height: '100px',
      padding: '0px 100px',
    },
  },
  downloadLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '300px',
    letterSpacing: '0.5px',
    textDecoration: 'none',
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
  }
}));

const NavBar = ({user}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <img src = {logo} width="200" height="50" alt="logo"></img>
        {/* <Typography variant="h4" className={classes.logo}>
          CREWASIS
        </Typography> */}
          {isMobile ? (
            <DrawerComp />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/weekly_insights" className={classes.link}>
                Weekly Insights
              </Link>
              <Link to="/history" className={classes.link}>
                History
              </Link>
              <Link to="/billings" className={classes.link}>
                Billing
              </Link>
              <Box to="/get_started" className={classes}>
                <Button
                  className={classes.downloadLink}
                  href={weeklyInsightsFile}
                  download="disabilities.pdf">
                  Download Software Here
                </Button>
              </Box>
              {/* {user
              ? <em>{user} logged in</em>
              : <Link to="/login" className={classes.link}>Login</Link>
            } */}
            </div>
        )}
      </Toolbar>
    </AppBar>
      
    </div>    
  )
}

export default NavBar;
