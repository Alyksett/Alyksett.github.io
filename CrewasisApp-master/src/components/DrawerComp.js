import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Menu,
  Home,
  Insights,
  Settings,
  CreditCard,
  Start,
  Login,
} from '@mui/icons-material';




const useStyles = makeStyles(() => ({
  root: {
      background: 'cyan',
    },
    link:{
        textDecoration:"none",
        color: 'purple',
        fontSize: "20px",
    },
    icon:{
        color: "purple"
    },
  
    paper: {
      background: "#ede7f6",
    }
}));

function DrawerComp() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        classes={{ paper: classes.paper }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <Home />
            </ListItemIcon>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <Insights />
            </ListItemIcon>
            <ListItemText>
              <Link to="/weekly_insights" className={classes.link}>
                Weekly Insights
              </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <Settings />
            </ListItemIcon>
            <ListItemText>
              <Link to="/settings" className={classes.link}>
                Settings
              </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <CreditCard />
            </ListItemIcon>
            <ListItemText>
              <Link to="/billings" className={classes.link}>
                Billings
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <Start />
            </ListItemIcon>
            <ListItemText>
              <Link to="/get_started" className={classes.link}>
                Get Started
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon className={classes.icon}>
              <Login />
            </ListItemIcon>
            <ListItemText>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <Menu />
      </IconButton>
    </>
  );
}
export default DrawerComp;