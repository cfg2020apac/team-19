import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function ClientDetails5(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        CONGRATULATIONS!{"\n"}
        {"\n"} USER CREATED {"\n"}
        {"\n"}#Let&#39;shelponemore!
      </Text>
      <View style={styles.rect1}>
        <Text style={styles.success}>SUCCESS!</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ClientsPage")}
        style={styles.button1}
      >
        <Text style={styles.returnToHome}>Return to Home</Text>
      </TouchableOpacity>
      <Image
        source={require("./nhcs.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 284,
    width: 347,
    fontSize: 36,
    marginTop: 211,
    marginLeft: 20
  },
  rect1: {
    width: 415,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: -385,
    alignSelf: "center"
  },
  success: {
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 50,
    width: 390,
    fontSize: 50,
    marginTop: 7,
    marginLeft: 80
  },
  button1: {
    width: 117,
    height: 44,
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 386,
    marginLeft: 129
  },
  returnToHome: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 105,
    marginTop: 13,
    marginLeft: 6
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -582,
    marginLeft: 150
  }
});

export default ClientDetails5;
