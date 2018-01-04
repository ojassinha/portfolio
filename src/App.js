import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
    
          <h2 className="App-title">This page is under construction </h2>
        </header>
        <AppBar title = "Articles" iconClassNameRight="uidocs-icon-navigation-expand-more">
        </AppBar>
        
        <p className="App-intro">
          I am not an awesome project 
        </p>
        <RaisedButton label="Default">
        </RaisedButton>
        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
