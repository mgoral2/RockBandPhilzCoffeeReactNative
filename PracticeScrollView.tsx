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
function PracticeScrollView() {

  const inputEl = useRef(null);
  const sv1 = useRef(null);
  const sv2 = useRef(null);
  const sv3 = useRef(null);
  const sv4 = useRef(null);
  const sv5 = useRef(null);

  var b1 = false;



/*
  useEffect(() =>  {
    onButtonClick();
  })
*/
/*
  const onButtonClick = () => {
    inputEl.current.scrollTo({x: windowWidth*2, animated: false});
  }
*/

  const onButtonClick = () => {
    console.log("B1: " + b1);
  }

  const onEndScroll = () => {
    if (b1 == false) {
    sv1.current.scrollTo({y: 0, animated: false});
  }
    sv2.current.scrollTo({y: 0, animated: false});
    sv3.current.scrollTo({y: 0, animated: false});
    sv4.current.scrollTo({y: 0, animated: false});
    sv5.current.scrollTo({y: 0, animated: false});

    b1 =  false;
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
    onMomentumScrollEnd={onEndScroll}
    >

      <ScrollView
      ref = {sv1}
      onScroll = { () => {b1 = true}}
      >
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView
      ref = {sv2}
      >
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView
      ref = {sv3}
      >
        <Card passedImage = {image3}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView
      ref = {sv4}
      >
        <Card passedImage = {image1}/>
        <Card passedImage = {image2}/>
        <Card passedImage = {image3}/>
        <Card passedImage = {image4}/>
        <Card passedImage = {image5}/>
      </ScrollView>

      <ScrollView
      ref = {sv5}
      >
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
