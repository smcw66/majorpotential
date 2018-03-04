import React, { Component } from 'react';
import {Image, Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ut from '../images/UTlogo.jpg';
import uh from '../images/UHlogo.png';
import am from '../images/A&Mlogo.png';
import Card from './Card.js';


{/* Use following url for default image: http://bit.ly/2H25MuS */}
(/* Grid automatically creates new rows for additional card components. */)

class Colleges extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <Grid>
        
        <Card name='University of Texas at Austin' model='colleges' imgsrc='http://bit.ly/2H25MuS'> </Card>
        <Card name='Texas A&M Univeristy' model='colleges' imgsrc='http://bit.ly/2H25MuS'> </Card>
        <Card name='The University of Houston' model='colleges' imgsrc='http://bit.ly/2H25MuS'> </Card>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </Grid>
    )
  }

}

export default Colleges;