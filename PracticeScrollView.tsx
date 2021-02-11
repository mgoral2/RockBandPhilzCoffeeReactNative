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

var taylor1 = require('./images/taylor1.jpg');
var taylor2 = require('./images/taylor2.png');
var taylor3 = require('./images/taylor3.jpg');
var taylor4 = require('./images/taylor4.jpeg');
var taylor5 = require('./images/taylor5.jpg');

var weeknd1 = require('./images/weeknd1.jpg');
var weeknd2 = require('./images/weeknd2.jpg');
var weeknd3 = require('./images/weeknd3.jpeg');
var weeknd4 = require('./images/weeknd4.jpg');
var weeknd5 = require('./images/weeknd5.jpg');

var matchbox1 = require('./images/matchbox1.jpg');
var matchbox2 = require('./images/matchbox2.jpg');
var matchbox3 = require('./images/matchbox3.jpg');
var matchbox4 = require('./images/matchbox4.jpg');
var matchbox5 = require('./images/matchbox5.jpg');

var ella1 = require('./images/ella1.jpg');
var ella2 = require('./images/ella2.jpeg');
var ella3 = require('./images/ella3.jpg');
var ella4 = require('./images/ella4.jpeg');
var ella5 = require('./images/ella5.jpg');

var luke1 = require('./images/luke1.jpeg');
var luke2 = require('./images/luke2.jpg');
var luke3 = require('./images/luke3.jpg');
var luke4 = require('./images/luke4.jpg');
var luke5 = require('./images/luke5.jpg');

var backgroundColors = ["lightcoral", "lightseagreen", "lightsalmon", "magenta", "lightskyblue"];

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

  const arr = [0,1,2,3,4];

  const backgroundColorChange = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateHoriz.value,
      arr.map((count) =>  windowWidth*count),
      arr.map((count) => backgroundColors[count])
    );
    return {backgroundColor};
  })

  return(
    <Animated.View
    style = {backgroundColorChange}>
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
        <Card passedImage = {taylor1}/>
        <Card passedImage = {taylor2}/>
        <Card passedImage = {taylor3}/>
        <Card passedImage = {taylor4}/>
        <Card passedImage = {taylor5}/>
      </ScrollView>

      <ScrollView
      ref = {sv2}
      >
        <Card passedImage = {weeknd1}/>
        <Card passedImage = {weeknd2}/>
        <Card passedImage = {weeknd3}/>
        <Card passedImage = {weeknd4}/>
        <Card passedImage = {weeknd5}/>
      </ScrollView>

      <ScrollView
      ref = {sv3}
      >
        <Card passedImage = {matchbox1}/>
        <Card passedImage = {matchbox2}/>
        <Card passedImage = {matchbox3}/>
        <Card passedImage = {matchbox4}/>
        <Card passedImage = {matchbox5}/>
      </ScrollView>

      <ScrollView
      ref = {sv4}
      >
        <Card passedImage = {ella1}/>
        <Card passedImage = {ella2}/>
        <Card passedImage = {ella3}/>
        <Card passedImage = {ella4}/>
        <Card passedImage = {ella5}/>
      </ScrollView>

      <ScrollView
      ref = {sv5}
      >
        <Card passedImage = {luke1}/>
        <Card passedImage = {luke2}/>
        <Card passedImage = {luke3}/>
        <Card passedImage = {luke4}/>
        <Card passedImage = {luke5}/>
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
