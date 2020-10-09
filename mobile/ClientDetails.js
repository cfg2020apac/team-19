import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

function ClientDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={require("./nhcs.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.image3Column}>
          <Image
            source={require("./nhcs.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <View style={styles.rect1}>
            <View style={styles.newClientStack}>
              <Text style={styles.newClient}>NEW CLIENT</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ClientDetails2")}
                style={styles.button}
              >
                <Text style={styles.next}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.image2Row}>
            <Image
              source={require("./canyon.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.textInputColumn}>
              <TextInput
                placeholder="First Name"
                style={styles.textInput}
              ></TextInput>
              <TextInput
                placeholder="Last Name"
                style={styles.textInput1}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInput2Row}>
            <TextInput placeholder="Age" style={styles.textInput2}></TextInput>
            <TextInput
              placeholder="Gender"
              style={styles.textInput3}
            ></TextInput>
          </View>
        </View>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder3}
        ></TextInput>
      </View>
      <TextInput placeholder="Address" style={styles.textInput4}></TextInput>
      <TextInput
        placeholder="Phone Number"
        style={styles.textInput5}
      ></TextInput>
      <TextInput placeholder="Email-ID" style={styles.textInput6}></TextInput>
      <TextInput placeholder="Status" style={styles.textInput7}></TextInput>
      <Text style={styles.loremIpsum}>OTHER IMPORTANT INFORMATION</Text>
      <TextInput placeholder="Income" style={styles.placeholder}></TextInput>
      <TextInput
        placeholder="Housing Status"
        style={styles.placeholder1}
      ></TextInput>
      <TextInput
        placeholder="Physical Health"
        style={styles.placeholder2}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 64
  },
  image3: {
    width: 94,
    height: 68,
    marginLeft: 150
  },
  rect1: {
    width: 420,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 4
  },
  newClient: {
    top: 11,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "rgba(121,60,174,1)",
    height: 37,
    width: 242,
    fontSize: 20
  },
  button: {
    top: 0,
    left: 200,
    width: 76,
    height: 38,
    position: "absolute",
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  next: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 60,
    marginTop: 9,
    marginLeft: 15
  },
  newClientStack: {
    width: 250,
    height: 49,
    marginTop: 9,
    marginLeft: 116
  },
  image2: {
    width: 68,
    height: 62,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 184,
    textDecorationLine: "underline",
    marginLeft: 2
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 184,
    textDecorationLine: "underline"
  },
  textInputColumn: {
    width: 186,
    marginLeft: 99
  },
  image2Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 7,
    marginRight: 15
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 72,
    textDecorationLine: "underline"
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 72,
    textDecorationLine: "underline",
    marginLeft: 49
  },
  textInput2Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 116,
    marginRight: 66
  },
  image3Column: {
    width: 375,
    marginLeft: 141
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    marginLeft: 66,
    marginTop: 48
  },
  imageRow: {
    height: 264,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: -341,
    marginRight: -370
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 315,
    textDecorationLine: "underline",
    marginTop: 57,
    marginLeft: 24
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 315,
    textDecorationLine: "underline",
    marginTop: 18,
    marginLeft: 24
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 315,
    textDecorationLine: "underline",
    marginTop: 30,
    marginLeft: 24
  },
  textInput7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 315,
    textDecorationLine: "underline",
    marginTop: 26,
    marginLeft: 24
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    fontWeight:'bold',
    height: 33,
    width: 315,
    marginTop: 23,
    marginLeft: 24
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginLeft: 24
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginTop: 21,
    marginLeft: 22
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginTop: 11,
    marginLeft: 22
  }
});

export default ClientDetails;
