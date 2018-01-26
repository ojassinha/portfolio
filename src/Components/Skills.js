import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';


const cardStyle ={
    height : "500px",
    width : "500px",
    backgroundColor : "#af8eb5",
    marginRight :"0px",
    position:"relative",
    textAlign :"right",
    float:"right"
}

class Skills extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Card style={cardStyle}>
                    </Card>
                </div>
            </MuiThemeProvider>
        );

        
    }
}
export default Skills;

