import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

function ClientsPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <Text style={styles.myClients}>MY CLIENTS</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.buttonStack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ClientProfile")}
              style={styles.button}
            ></TouchableOpacity>
            <Text style={styles.shlokSinha}>Shlok Sinha</Text>
          </View>
          <View style={styles.rect2}></View>
          <View style={styles.rect3StackStackRow}>
            <View style={styles.rect3StackStack}>
              <View style={styles.rect3Stack}>
                <View style={styles.rect3}></View>
                <Text style={styles.ned}>Ned</Text>
              </View>
              <TouchableOpacity style={styles.button5}></TouchableOpacity>
            </View>
            <Text style={styles.loremIpsum2}></Text>
          </View>
          <View style={styles.simranRajpalStack}>
            <Text style={styles.simranRajpal}>Simran Rajpal</Text>
            <TouchableOpacity style={styles.button1}></TouchableOpacity>
          </View>
          <View style={styles.rect4}></View>
          <View style={styles.ben2Stack}>
            <Text style={styles.ben2}>Ben</Text>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
          <View style={styles.rect5}></View>
          <View style={styles.sunny2Stack}>
            <Text style={styles.sunny2}>Sunny</Text>
            <TouchableOpacity style={styles.button3}></TouchableOpacity>
          </View>
          <View style={styles.rect6}></View>
          <View style={styles.lee2Stack}>
            <Text style={styles.lee2}>Lee</Text>
            <TouchableOpacity style={styles.button4}></TouchableOpacity>
          </View>
          <View style={styles.rect7}></View>
        </ScrollView>
      </View>
      <Image
        source={require("./nhcs.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.button6Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientDetails")}
          style={styles.button6}
        ></TouchableOpacity>
        <Text style={styles.createNew}>CREATE NEW</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 450,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 116
  },
  myClients: {
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 37,
    width: 242,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 31,
    marginLeft: 125,
  },
  scrollArea: {
    width: 400,
    height: 498,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 5
  },
  scrollArea_contentContainerStyle: {
    height: 832,
    width: 363
  },
  button: {
    top: 0,
    left: 0,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  shlokSinha: {
    top: 17,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  buttonStack: {
    width: 340,
    height: 85,
    marginTop: 80,
    marginLeft: 79
  },
  rect2: {
    width: 400,
    height: 1,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect3: {
    top: 61,
    left: 0,
    width: 400,
    height: 2,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  ned: {
    top: 0,
    left: 220,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  rect3Stack: {
    top: 22,
    left: 0,
    width: 513,
    height: 68,
    position: "absolute"
  },
  button5: {
    top: 0,
    left: 79,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect3StackStack: {
    width: 513,
    height: 90
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 273,
    marginTop: 55
  },
  rect3StackStackRow: {
    height: 90,
    flexDirection: "row",
    marginTop: 23,
    marginRight: -423
  },
  simranRajpal: {
    top: 15,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  button1: {
    top: 0,
    left: 0,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  simranRajpalStack: {
    width: 328,
    height: 83,
    marginTop: 36,
    marginLeft: 79
  },
  rect4: {
    width: 400,
    height: 2,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 12
  },
  ben2: {
    top: 17,
    left: 141,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  button2: {
    top: 0,
    left: 0,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  ben2Stack: {
    width: 434,
    height: 85,
    marginTop: 32,
    marginLeft: 79
  },
  rect5: {
    width: 400,
    height: 2,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 11
  },
  sunny2: {
    top: 22,
    left: 121,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  button3: {
    top: 0,
    left: 0,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  sunny2Stack: {
    width: 414,
    height: 90,
    marginTop: 50,
    marginLeft: 79
  },
  rect6: {
    width: 400,
    height: 1,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  lee2: {
    top: 12,
    left: 152,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 68,
    width: 293,
    fontSize: 30
  },
  button4: {
    top: 0,
    left: 0,
    width: 241,
    height: 68,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  lee2Stack: {
    width: 445,
    height: 80,
    marginTop: 65,
    marginLeft: 79
  },
  rect7: {
    width: 400,
    height: 1,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -715,
    marginLeft: 150
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 48,
    marginTop: -285,
    marginLeft: 358
  },
  button6: {
    top: 0,
    left: 0,
    width: 188,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  createNew: {
    top: 11,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "rgba(121,60,174,1)",
    height: 22,
    width: 166
  },
  button6Stack: {
    width: 210,
    height: 43,
    marginTop: 369,
    marginLeft: 103
  }
});

export default ClientsPage;
