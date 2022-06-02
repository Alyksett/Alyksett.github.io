import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import DB from '../FakeDB.js'
import { palette } from '@mui/system';
import {Router} from 'react-router';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  Link
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center"
  },
  Title: {
    fontSize: "75px",
    textAlign: 'center',
      
    }
  }));



export default class CategoriesResults extends React.Component {
  
  render() {
    const docs = DB.documents;
    
     return (
      <div>
        <List component='nav' aria-labelledby='nested-list-subheader'>
          {docs.map(doc => {
            return (
              <CustomizedListItem key={doc.id} doc={doc} />
            );
          })}
        </List>     
      </div>
    );
  }
}

class SubListItem extends React.Component{
  constructor(props, data){
    super(props);
    this.state = {
      open:false
    }
    this.title = props;
    // console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Handle Clicked....");
     this.setState(prevState => ({
       open: !prevState.open
     }));
  }

  
  render() {
    
    return (
      <div style = {{width:1400, marginLeft: 50}}>
        <ListItem button onClick={this.handleClick}>
          <ListItemText key = {1} primary = {this.title.data.Title}> </ListItemText> 
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.state.open}
          timeout='auto'
          unmountOnExit
        >
          <Grid container spacing = {2} columns = {2} style = {{marginLeft: 50}}>
            <Grid item xs = {2}>
              <ListItemText primary = "Rating"></ListItemText>
              <Divider></Divider>
              <ListItemText primary = {this.title.data.Feedback.Rating}></ListItemText>
            </Grid>
            <Grid item xs = {6}>
              <ListItemText primary = "Comment"></ListItemText>
              <Divider></Divider>
              <ListItemText primary = {this.title.data.Feedback.Comments}></ListItemText>              
            </Grid>
              <Link
                rel = "noopener noreferre"
                href = "https://crewasis.com/"
                target = "_blank"
                style = {{
                  fontSize: 20,
                  marginTop: 25,
                  marginLeft: 20
                  }}>
                Datasheet
            </Link>
          </Grid>  
        </Collapse>
    </div>
  )}
}


class CustomizedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleSubClick = this.handleSubClick.bind(this);
    }

    handleClick() {
      console.log("Handle Clicked....");
       this.setState(prevState => ({
         open: !prevState.open
       }));
    }
    handleSubClick() {
      console.log("Sub Clicked....");
    }

  render(){
    const { doc } = this.props;
    return (
      <div>
        <ListItem button key={doc.Id} onClick={this.handleClick}>
          {console.log(doc)}
          <ListItemText primary={doc.Date} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          key={doc.Ideas.Id}
          in={this.state.open}
          timeout='auto'
          unmountOnExit
        >
          <List component='li' disablePadding key={doc.Id}>
            {doc.Ideas.map(idea => {
              return (
                <div>
                  <Divider></Divider>
                  
                  <SubListItem data = {idea}>
                    
                  </SubListItem>
                  {/* <ListItemText key={idea.Id} primary={idea.Title} /> */}
                  
                </div>
              )
            })}
          </List>
      </Collapse>
      <Divider />
    </div>
    )
  }
}

