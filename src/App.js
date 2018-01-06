import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import profilePic from './profile.jpg';
import Card from 'material-ui/Card';
import {Document,Page} from 'react-pdf';
import resume from './Resume.pdf';

const profileImageStyle ={
  height : 100,
  width : 100,
  margin: 20,
  textAlign:'center',
  display:'inline-block'
}
const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    height : 'auto',
    position : 'relative',
    backgroundColor : '#49599a'
  },
  cardStyle:{
    margin :'0px 100px 0px 400px',
    height : 'auto',
    position : 'relative'
  },
  resumeStyle:{
    position:'relative',
    margin : '50px'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};
var divStyle = {
  background: "#6f74dd",
  padding: "0px",
  margin: "0px 0px"
};


class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <MuiThemeProvider>
      <div className="App">
        
        <header className="App-header">
    
          <h2 className="App-title">This page is under construction </h2>
        </header>
       
        <AppBar
          title= "I am still not awesome project :("
          style ={divStyle} showMenuIconButton = {false}>
              
        </AppBar>
        
        
        
      <Paper style={style.paper}>
          <Paper style={profileImageStyle} 
           zDepth={3} circle={true}>
            <div>
              <Avatar src={profilePic} style={{backgroundColor:"gray",height:"100px",width:"100px"}} />
            </div>
          </Paper>

        <Divider/>

      <Menu>
        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      </Menu>
    </Paper>
        
        <Card style={style.cardStyle}>
          <Document style={style.resumeStyle} file={resume} onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={pageNumber}/>
          </Document>
        </Card>
       
        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
