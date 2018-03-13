import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactFilestack from 'filestack-react';

const AddJob = () => (
  <ReactFilestack apikey = {process.env.FILEPICKER_API_KEY}
  buttonText = "Upload Document Here"
  buttonClass = "classname"/>
  <h2 > Hiring portal for HolaCode students </h2>
  <h3 > Made using FileStack </h3>
);

export default AddJob;
