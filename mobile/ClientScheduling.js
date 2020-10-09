import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function ClientScheduling(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.ellipseRow}>
          <Svg viewBox="0 0 56.25 52.23" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={28}
              cy={26}
              rx={28}
              ry={26}
            ></Ellipse>
          </Svg>
          <Text style={styles.activitiesTimeline}>ACTIVITIES TIMELINE</Text>
        </View>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <Text style={styles.legalAid}>
                LEGAL AID{"\n"}
                {"\n"}Status: In Prpogress{"\n"}
                {"\n"}Start Date{"\n"}
                {"\n"}Date Modified{"\n"}
                {"\n"}Result{"\n"}
                {"\n"}Notes
              </Text>
              <View style={styles.rect2Stack}>
                <View style={styles.rect2}></View>
                <View style={styles.rect3}></View>
              </View>
              <Text style={styles.legalAid1}>
                MEDICAL AID{"\n"}
                {"\n"}Status: In Prpogress{"\n"}
                {"\n"}Start Date{"\n"}
                {"\n"}Date Modified{"\n"}
                {"\n"}Result{"\n"}
                {"\n"}Notes
              </Text>
              <View style={styles.rect6}></View>
              <Text style={styles.legalAid3}>
                JOB COACHING{"\n"}
                {"\n"}Status: In Prpogress{"\n"}
                {"\n"}Start Date{"\n"}
                {"\n"}Date Modified{"\n"}
                {"\n"}Result{"\n"}
                {"\n"}Notes
              </Text>
              <View style={styles.rect5}></View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ClientProfile")}
            style={styles.button}
          ></TouchableOpacity>
          <Text style={styles.back}>Back</Text>
        </View>
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
  rect: {
    width: 420,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 109,
    alignSelf: "center"
  },
  ellipse: {
    width: 56,
    height: 52
  },
  activitiesTimeline: {
    fontFamily: "roboto-700",
    fontWeight:'bold',
    color: "rgba(121,60,174,1)",
    height: 37,
    width: 242,
    fontSize: 20,
    marginLeft: 32,
    marginTop: 15
  },
  ellipseRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 21,
    marginTop: 9
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15
  },
  scrollArea: {
    top: 7,
    left: 0,
    width: 400,
    height: 552,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
  },
  scrollArea_contentContainerStyle: {
    height: 649,
    width: 357
  },
  legalAid: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 149,
    width: 269,
    marginTop: 24,
    marginLeft: 11
  },
  rect2: {
    top: 0,
    left: 0,
    width: 400,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 400,
    height: 2,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect2Stack: {
    width: 357,
    height: 2,
    marginTop: 67
  },
  legalAid1: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 183,
    width: 269,
    marginTop: 13,
    marginLeft: 11
  },
  rect6: {
    width: 400,
    height: 1,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 8
  },
  legalAid3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 175,
    width: 269,
    marginTop: 5,
    marginLeft: 17
  },
  rect5: {
    width: 400,
    height: 2,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 19
  },
  button: {
    top: -1,
    left: 117,
    width: 116,
    height: 22,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  back: {
    top: 4,
    left: 159,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    height: 22,
    width: 166
  },
  scrollAreaStack: {
    width: 357,
    height: 559,
    marginLeft: 183
  },
  loremIpsumRow: {
    height: 559,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: -173,
    marginRight: 8
  },
  image1: {
    width: 94,
    height: 68,
    marginTop: -718,
    marginLeft: 150
  }
});

export default ClientScheduling;
