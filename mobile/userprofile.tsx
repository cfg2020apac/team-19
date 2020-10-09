import { preventAutoHide } from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet, Image, ScrollView, Button, SafeAreaView, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <Text style={styles.title}>{"\n"}Benedictus Alvian Sofjan{"\n"}</Text>
        <Image
          style={styles.emoji}
          source={{
            uri: 'https://i.pinimg.com/236x/29/3b/84/293b84f3561f0f895b54554ff195ea1a.jpg',
          }}
        />
        <Text></Text>
      </View>
      <View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={{fontSize: 18}}>{`       Phone Number: 6434 3299
       Email: ben@gmail.com
       Status: Divorce`}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <View style={styles.row}>
            <Text style={{fontSize: 18}}>       Pending Actions: </Text>
            <Button
              onPress={() => {}}
              title="See Timeline"
              color="deepskyblue"
            />
          </View>
          <Text style={{fontSize: 18}}>       Notes: xxxxxxxx</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={{fontSize: 18}}>       Document List</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}>
            <Text style={styles.buttonText}>PASSPORT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}>
            <Text style={styles.buttonText}>NRIC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}>
            <Text style={styles.buttonText}>INCOME DOCUMENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}>
            <Text style={styles.buttonText}>OTHERS</Text>
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}>
            <Text style={{
              color: '#9f3aa0',
              textAlign:'center',
              paddingLeft : 10,
              paddingRight : 10,
              fontSize : 18
            }}>EDIT CLIENT</Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  topcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5d35d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9f3aa0',
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: '100%',
  },
  content: {
    fontSize: 20 ,
    alignItems: 'flex-start',
  },
  emoji: {
    width: 80,
    height: 80,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button:{
    marginRight:75,
    marginLeft:75,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#b5d35d',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText:{
      color: 'black',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize : 18,
  }

});
