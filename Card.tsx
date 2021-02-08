import React from "react";
import {Dimensions, View, ScrollView, StyleSheet, Text, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var image1 = require('./images/1.jpg');

const Card = ({passedImage}) => {

  return (
    <View styles = {styles.container} >
      <View styles = {styles.image}>
        <Image
        source = {passedImage}
        style = {{
          height: windowHeight*.7,
          width: windowWidth*.7,
          margin: 32
        }}/>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    width: windowWidth*.8,
    height: windowHeight*.8,
  },
  image:  {
    width: windowWidth*.7,
    height: windowHeight&.7,
  }
})

export default Card;
