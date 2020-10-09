import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Switch,
  Image
} from "react-native";

function ClientDetails2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button2StackRow}>
          <View style={styles.button2Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ClientDetails")}
              style={styles.button2}
            ></TouchableOpacity>
            <Text style={styles.back}>Back</Text>
          </View>
          <View style={styles.newClient2Stack}>
            <Text style={styles.newClient2}>NEW CLIENT</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ClientDetails3")}
              style={styles.button1}
            >
              <Text style={styles.next1}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.placeholder1Stack}>
        <TextInput
          placeholder="Mental Health"
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder="Employment Status"
          style={styles.placeholder2}
        ></TextInput>
      </View>
      <TextInput
        placeholder="Education Status"
        style={styles.placeholder3}
      ></TextInput>
      <View style={styles.placeholder4Stack}>
        <TextInput placeholder="Race" style={styles.placeholder4}></TextInput>
        <TextInput
          placeholder="Languages"
          style={styles.placeholder5}
        ></TextInput>
      </View>
      <TextInput
        placeholder="Willingness to Relocate"
        style={styles.placeholder6}
      ></TextInput>
      <TextInput
        placeholder="Marital Status"
        style={styles.placeholder7}
      ></TextInput>
      <TextInput placeholder="Religion" style={styles.placeholder8}></TextInput>
      <TextInput placeholder="Need" style={styles.placeholder9}></TextInput>
      <View style={styles.smokingRow}>
        <Text style={styles.smoking}>Smoking?</Text>
        <Switch value={true} style={styles.switch}></Switch>
      </View>
      <View style={styles.drinkingRow}>
        <Text style={styles.drinking}>Drinking?</Text>
        <Switch value={true} style={styles.switch2}></Switch>
      </View>
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
  rect1: {
    width: 420,
    height: 78,
    backgroundColor: "rgb(178,97,179)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 108,
    alignSelf: "center"
  },
  button2: {
    top: 0,
    left: 0,
    width: 76,
    height: 34,
    position: "absolute",
    backgroundColor: "rgb(127,46,128)",
    borderWidth: 0,
    borderRadius:5,
    borderColor: "#000000"
  },
  back: {
    top: 6,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#FFFFFF",
    height: 19,
    width: 60
  },
  button2Stack: {
    width: 83,
    height: 34
  },
  newClient2: {
    top: 6,
    left: 7,
    position: "absolute",
    fontWeight: 'bold',
    fontFamily: "roboto-700",
    color: "rgb(255,255,255)",
    height: 37,
    width: 242,
    fontSize: 20
  },
  button1: {
    top: 0,
    left: 195,
    width: 76,
    height: 38,
    position: "absolute",
    backgroundColor: "rgb(127,46,128)",
    borderWidth: 0,
    borderRadius:5,
    borderColor: "#000000"
  },
  next1: {
    fontFamily: "roboto-700",
    color: "#FFFFFF",
    height: 19,
    width: 60,
    marginTop: 6,
    marginLeft: 16
  },
  newClient2Stack: {
    width: 251,
    height: 44,
    marginLeft: 24
  },
  button2StackRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 3,
    marginLeft: 14,
    marginTop: 10
  },
  placeholder1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline"
  },
  placeholder2: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline"
  },
  placeholder1Stack: {
    width: 304,
    height: 65,
    marginTop: 57,
    marginLeft: 14
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginLeft: 14
  },
  placeholder4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline"
  },
  placeholder5: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline"
  },
  placeholder4Stack: {
    width: 304,
    height: 65,
    marginLeft: 14
  },
  placeholder6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginLeft: 14
  },
  placeholder7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginTop: 2,
    marginLeft: 14
  },
  placeholder8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginTop: 8,
    marginLeft: 14
  },
  placeholder9: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 304,
    textDecorationLine: "underline",
    marginTop: 7,
    marginLeft: 14
  },
  smoking: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 23,
    width: 84
  },
  switch: {
    marginLeft: 23
  },
  smokingRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 57,
    marginLeft: 14,
    marginRight: 209
  },
  drinking: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 23,
    width: 84
  },
  switch2: {
    marginLeft: 23
  },
  drinkingRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 14,
    marginRight: 209
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -647,
    marginLeft: 150
  }
});

export default ClientDetails2;
