import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function ClientDetails4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button1Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ClientDetails3")}
            style={styles.button1}
          >
            <Text style={styles.back2}>Back</Text>
          </TouchableOpacity>
          <View style={styles.button7Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ClientDetails5")}
              style={styles.button7}
            ></TouchableOpacity>
            <Text style={styles.done}>Done!</Text>
          </View>
        </View>
      </View>
      <Text style={styles.loremIpsum1}>SELECT SERVICES REQUIRED</Text>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.legalCouncelling}>Legal Councelling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.jobCoach}>Job Coach</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.medicalCare}>Medical Care</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <Text style={styles.housingHelp}>Housing Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
        <Text style={styles.financialServices}>Financial Services</Text>
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
  rect1: {
    width: 415,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 110
  },
  button1: {
    width: 76,
    height: 38,
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  back2: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 60,
    marginTop: 10,
    marginLeft: 16
  },
  button7: {
    top: 0,
    left: 0,
    width: 76,
    height: 38,
    position: "absolute",
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  done: {
    top: 10,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 60
  },
  button7Stack: {
    width: 80,
    height: 38,
    marginLeft: 230
  },
  button1Row: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    marginTop: 12
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "rgba(121,60,174,1)",
    height: 33,
    width: 315,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 10
  },
  button2: {
    width: 248,
    height: 58,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 57,
    marginLeft: 56
  },
  legalCouncelling: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 48
  },
  button3: {
    width: 248,
    height: 58,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 23,
    marginLeft: 63
  },
  jobCoach: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 57
  },
  button4: {
    width: 248,
    height: 58,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 33,
    marginLeft: 63
  },
  medicalCare: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 41
  },
  button5: {
    width: 248,
    height: 58,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 33,
    marginLeft: 63
  },
  housingHelp: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 41
  },
  button6: {
    width: 248,
    height: 58,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 43,
    marginLeft: 63
  },
  financialServices: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 41
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -694,
    marginLeft: 150
  }
});

export default ClientDetails4;
