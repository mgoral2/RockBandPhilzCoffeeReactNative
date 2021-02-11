//PracticeScrollView.tsx

import React, {useEffect, useRef} from "react";
import {Dimensions, View, ScrollView,
  StyleSheet, Text, Image, Button } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";


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

  const translateHoriz = useSharedValue(5);

  const onHorizontalScroll = useAnimatedScrollHandler({
    onScroll: (event)  => {
      translateHoriz.value = event.contentOffset.x;
    },
  });

  const inputEl = useRef(null);
  const sv1 = useRef(null);
  const sv2 = useRef(null);
  const sv3 = useRef(null);
  const sv4 = useRef(null);
  const sv5 = useRef(null);



  const onButtonClick = () => {
    console.log("translateHoriz: " + translateHoriz.value);
  }

  const onEndScroll = () => {

    console.log("in end scroll: ", + translateHoriz.value);

    if (!((-10 <= translateHoriz.value) &&  (translateHoriz.value <= 10))) {
    sv1.current.scrollTo({y: 0, animated: false});
    //console.log("one hit: " + translateHoriz.value);
  }
    if(!((windowWidth-10 <= translateHoriz.value) && (windowWidth+10 >= translateHoriz.value))) {
      //console.log("Two hit");
      sv2.current.scrollTo({y: 0, animated: false});
  }
    if(!(((windowWidth*2)-10 <= translateHoriz.value) && ((windowWidth*2)+10 >= translateHoriz.value))) {
      //console.log("three hit");
      sv3.current.scrollTo({y: 0, animated: false});
  }
    if(!(((windowWidth*3)-10 <= translateHoriz.value) && ((windowWidth*3)+10 >= translateHoriz.value))) {
      //console.log("four hit");
    sv4.current.scrollTo({y: 0, animated: false});
  }
    if(!(((windowWidth*4)-10 <= translateHoriz.value) && ((windowWidth*4)+10 >= translateHoriz.value))) {
      console.log("five hit");
    sv5.current.scrollTo({y: 0, animated: false});
  }
  }

  return(
    <Animated.View>
    <Button
    onPress={onButtonClick}
    title="Scroll To Middle"
    />

    <Animated.ScrollView
    onScroll={onHorizontalScroll}
    ref={inputEl}
    horizontal
    snapToInterval = {windowWidth}
    onMomentumScrollEnd={onEndScroll}
    >

      <ScrollView
      ref = {sv1}
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

    </Animated.ScrollView>
    </Animated.View>
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
