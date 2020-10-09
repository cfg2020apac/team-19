import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function ClientProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.imageRow}>
          <Image
            source={require("./jag.png")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <Text style={styles.clientName}>CLIENT NAME</Text>
        </View>
      </View>
      <Text style={styles.phoneNumberEmail}>
        Phone Number :{"\n"}Email:{"\n"}Status:
      </Text>
      <View style={styles.rect2}></View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          Pending Activities: {"\n"}
          {"\n"}
          {"\n"}Notes: XXXXXXXXXX
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientScheduling")}
          style={styles.button}
        ></TouchableOpacity>
        <Text style={styles.seeTimeline}>See Timeline</Text>
      </View>
      <View style={styles.loremIpsum2Stack}>
        <Text style={styles.loremIpsum2}></Text>
        <Text style={styles.documents}>Documents</Text>
      </View>
      <View style={styles.rect3}></View>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.passport}>Passport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.nric}>NRIC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.incomeDocuments}>Income Documents</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.otherDocuments}>Other Documents</Text>
      </TouchableOpacity>
      <View style={styles.button5Stack}>
        <TouchableOpacity style={styles.button5}></TouchableOpacity>
        <Text style={styles.editDetails}>Edit Details</Text>
      </View>
      <View style={styles.button6Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientsPage")}
          style={styles.button6}
        ></TouchableOpacity>
        <Text style={styles.back}>Back</Text>
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
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 104,
    alignSelf: "center"
  },
  image: {
    width: 52,
    height: 51,
    borderRadius: 100
  },
  clientName: {
    fontFamily: "roboto-700",
    fontWeight:'bold',
    color: "rgba(121,60,174,1)",
    height: 37,
    width: 136,
    fontSize: 20,
    marginLeft: 67,
    marginTop: 13
  },
  imageRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 107,
    marginLeft: 13,
    marginTop: 11
  },
  phoneNumberEmail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 74,
    width: 223,
    marginTop: 38,
    marginLeft: 13
  },
  rect2: {
    width: 387,
    height: 1,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 14
  },
  loremIpsum: {
    top: 1,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 62,
    width: 307
  },
  button: {
    top: 1,
    left: 122,
    width: 132,
    height: 14,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000"
  },
  seeTimeline: {
    top: 0,
    left: 138,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(74,144,226,1)",
    height: 14,
    width: 127
  },
  loremIpsumStack: {
    width: 307,
    height: 63,
    marginTop: 34,
    marginLeft: 13
  },
  loremIpsum2: {
    top: 0,
    left: 95,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 68
  },
  documents: {
    top: 11,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 153
  },
  loremIpsum2Stack: {
    width: 163,
    height: 33,
    marginTop: 68,
    marginLeft: 15
  },
  rect3: {
    width: 387,
    height: 2,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: -46
  },
  button1: {
    width: 248,
    height: 33,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 58,
    marginLeft: 63
  },
  passport: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 4,
    marginLeft: 54
  },
  button2: {
    width: 248,
    height: 33,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 22,
    marginLeft: 63
  },
  nric: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginTop: 5,
    marginLeft: 67
  },
  button3: {
    width: 248,
    height: 33,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 30,
    marginLeft: 65
  },
  incomeDocuments: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 29,
    width: 186,
    fontSize: 20,
    marginTop: 2,
    marginLeft: 17
  },
  button4: {
    width: 248,
    height: 33,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 18,
    marginLeft: 63
  },
  otherDocuments: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 168,
    fontSize: 20,
    marginLeft: 30
  },
  button5: {
    top: 0,
    left: 0,
    width: 123,
    height: 36,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)"
  },
  editDetails: {
    top: 10,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 15,
    width: 108
  },
  button5Stack: {
    width: 131,
    height: 36,
    marginTop: 14,
    marginLeft: 128
  },
  button6: {
    top: 0,
    left: 0,
    width: 131,
    height: 20,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  back: {
    top: 0,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 20,
    width: 108
  },
  button6Stack: {
    width: 138,
    height: 20,
    marginTop: -586,
    marginLeft: 130
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -172,
    marginLeft: 136
  }
});

export default ClientProfile;
