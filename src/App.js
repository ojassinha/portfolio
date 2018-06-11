import React, { Component } from 'react';
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
import { Document ,Page } from 'react-pdf/build/entry.webpack';
import resume from './Resume.pdf';
import Skills from './Components/Skills';
import {GridList, GridTile} from 'material-ui/GridList';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Subheader from 'material-ui/Subheader';

const profileImageStyle ={
  height : 100,
  width : 100,
  margin: 20,
  textAlign:'center',
  display:'inline-block'
}

const tilesData=[
  {
    img: {profilePic},
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  }
]
const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    height : 'auto',
    position : 'relative',
    backgroundColor : '#49599a'
  },
  skill:{
    float:'right',
    height : '300px',
    width : '200px',
    position :'relative'
  },
  cardStyle:{
    margin :'0px 420px 0px 400px',
    height : 'auto',
    position : 'relative',
    backgroundColor : '#9499b7',
    width : "auto"
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
       
       <Paper style={style.skill}>
         <GridList
          cellHeight={180}
          style={style.gridList}>
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
            <GridTile
              key={profilePic}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><ActionGrade color="white" /></IconButton>}
            >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
       </Paper>
        <Card style={style.cardStyle}>
          <Document style={style.resumeStyle} file={resume} onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={1}/>
            <Page pageNumber={2}/>
          </Document>
          
        </Card>
        
        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
