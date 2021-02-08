//PracticeScrollView.tsx

import React from "react";
import {Dimensions, View, ScrollView, StyleSheet, Text, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var image1 = require('./images/1.jpg');
var image2 = require('./images/2.jpg');
var image3 = require('./images/3.jpg');
var image4 = require('./images/4.jpg');
var image5 = require('./images/5.jpg');

import Card from './Card.tsx';

const PracticeScrollView = () => {

  return(
    <ScrollView
    horizontal
    snapToInterval = {windowWidth}
    >

      <ScrollView>
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView>
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView>
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView>
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView>
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>


    </ScrollView>
  )
}
/*
const  PracticeScrollView = () => {

  return(
    <ScrollView
    horizontal
    >
      <Card passedImage = {image1}/>
      <Card passedImage = {image1}/>
      <Card />
      <Card passedImage = {image1}/>
      <Card passedImage = {image1}/>
    </ScrollView>
  )
}
*/
/*
const PracticeScrollView = () => {

  return (
    <ScrollView
    horizontal
    >
      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />

      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />

      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />

      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />

      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />

      <Image source = {image1}
      style = {{
        height: windowHeight/2,
        width: windowWidth/2,
      }}
      />


    </ScrollView>
  )
}
*/

export default PracticeScrollView;
