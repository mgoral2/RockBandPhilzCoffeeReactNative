//PracticeScrollView.tsx

import React, {useEffect, useRef} from "react";
import {Dimensions, View, ScrollView,
  StyleSheet, Text, Image, Button } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var image1 = require('./images/1.jpg');
var image2 = require('./images/2.jpg');
var image3 = require('./images/3.jpg');
var image4 = require('./images/4.jpg');
var image5 = require('./images/5.jpg');

import Card from './Card.tsx';
/*
<ScrollView style={styles.container} ref={(scroller) => {this.scroller = scroller}}>
        <View style={[styles.screen, styles.screenA]}>
*/
const PracticeScrollView = () => {
/*
    scrollToMiddleHorizontal = () => {
    this.horiScroll.scrollTo({x: 50});
  };
*/

  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.scrollTo({x: windowWidth*2, animated: false});
  }

  return(
    <View>
    <Button
    onPress={onButtonClick}
    title="Scroll To Middle"
    />

    <ScrollView
    ref={inputEl}
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
        <Card passedImage = {image3}/>
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
    </View>
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
