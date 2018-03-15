import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const textstyle = {
  fontFamily: 'Montserrat',
  color: 'white',
  fontSize: 15,
};

const phantomStyle = {
  display: 'block'
}

const appStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
}

const About = () => (
  <div>
      <div style={phantomStyle} />
        <AppBar title="HolaCode is a 5 month immersive software engineering bootcamp
        focused on creating better life opportunities. Hiring portal made by: Garima Batra" titleStyle={textstyle} style={appStyle}>
        </AppBar>
  </div>

);

export default About;