import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function ClientDetails3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button2Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ClientDetails2")}
            style={styles.button2}
          >
            <Text style={styles.back1}>Back</Text>
          </TouchableOpacity>
          <View style={styles.button1Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ClientDetails4")}
              style={styles.button1}
            ></TouchableOpacity>
            <Text style={styles.next1}>Next</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.passport}>Passport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.nric}>NRIC</Text>
      </TouchableOpacity>
      <View style={styles.button5Stack}>
        <TouchableOpacity style={styles.button5}></TouchableOpacity>
        <Text style={styles.incomeDocument}>Income Document</Text>
      </View>
      <View style={styles.button6Stack}>
        <TouchableOpacity style={styles.button6}></TouchableOpacity>
        <Text style={styles.others}>Others</Text>
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
    marginTop: 108
  },
  button2: {
    width: 76,
    height: 38,
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  back1: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 60,
    marginTop: 10,
    marginLeft: 16
  },
  button1: {
    top: 0,
    left: 30,
    width: 76,
    height: 38,
    position: "absolute",
    backgroundColor: "rgba(126,229,9,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  next1: {
    top: 10,
    left: 50,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 60
  },
  button1Stack: {
    width: 85,
    height: 38,
    marginLeft: 202
  },
  button2Row: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginLeft: 10,
    marginTop: 14
  },
  button3: {
    width: 248,
    height: 67,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 44,
    marginLeft: 56
  },
  passport: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 176,
    fontSize: 30,
    marginTop: 18,
    marginLeft: 56
  },
  button4: {
    width: 248,
    height: 67,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    shadowColor: "rgba(126,211,33,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 42,
    marginLeft: 56
  },
  nric: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 176,
    fontSize: 30,
    marginTop: 24,
    marginLeft: 56
  },
  button5: {
    top: 0,
    left: 0,
    width: 248,
    height: 67,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)"
  },
  incomeDocument: {
    top: 18,
    left: 29,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 278,
    fontSize: 25
  },
  button5Stack: {
    width: 307,
    height: 67,
    marginTop: 80,
    marginLeft: 56
  },
  button6: {
    top: 0,
    left: 0,
    width: 248,
    height: 67,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 55,
    backgroundColor: "rgba(126,211,33,1)",
    shadowColor: "rgba(126,211,33,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  others: {
    top: 18,
    left: 81,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 176,
    fontSize: 30
  },
  button6Stack: {
    width: 257,
    height: 67,
    marginTop: 65,
    marginLeft: 56
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -649,
    marginLeft: 150
  }
});

export default ClientDetails3;
