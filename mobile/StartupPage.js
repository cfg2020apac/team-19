import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import ClientsPage from './ClientsPage';

function StartupPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientsPage")}
          style={styles.button1}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("./nhcs.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect: {
    width: 415,
    height: 600,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgb(178,97,179)",
    borderRadius: 5,
    marginTop: 346
  },
  button1: {
    width: 330,
    height: 65,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgb(127,46,128)",
    borderRadius: 5,
    marginTop: 126,
    marginLeft: 40
  },
  login: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 219,
    fontSize: 30,
    marginTop: 19,
    marginLeft: 111
  },
  button: {
    width: 330,
    height: 65,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgb(127,46,128)", 
    borderRadius: 5,
    marginTop: 75,
    marginLeft: 40
  },
  register: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 219,
    fontSize: 30,
    marginTop: 19,
    marginLeft: 111
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -900,
    marginLeft: 100

  }
});

export default StartupPage;
