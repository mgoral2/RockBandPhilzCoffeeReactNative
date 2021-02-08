import React from "react";
import {Dimensions, View, ScrollView, StyleSheet, Text, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var image1 = require('./images/1.jpg');

const Card = ({passedImage}) => {

  return (
    <View style = {styles.container} >
      <View style = {styles.image}>
        <Image
        source = {passedImage}
        style = {{
          height: windowHeight * .7,
          width: windowWidth  * .7,
        }}
        />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight*.8,
  },
  image:  {
    borderRadius: 16,
          margin: 32,
          flex: 1,

          padding: 16,
          justifyContent: "space-between",
  }
})

/*
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight*.8,
  },
  image:  {
    width: windowWidth*.7,
    height: windowHeight&.7,
  }
})
*/
export default Card;
