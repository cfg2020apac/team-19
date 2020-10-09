import { preventAutoHide } from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet, Image, ScrollView, Button, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

export default function Timeline() {
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
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>        Legal Aid</Text>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Status: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>In Progress</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Date Modified: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>dd/mm/yy</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Result: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Court date set</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Notes: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Divorce hearing</Text>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>        Job coaching</Text>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Status: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Completed</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Date Modified: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>dd/mm/yy</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Result: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Placed in position</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Notes: </Text>
            <Text style={{fontSize: 18, fontWeight: '600', paddingRight: 100}}>Employer Name - ABC; Position - XYZ; Working Hours - xx hrs/week</Text>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>        Operations</Text>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Status: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Completed</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Date Modified: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>dd/mm/yy</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Result: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>No incident reported</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>        Notes: </Text>
            <Text style={{fontSize: 18, fontWeight: '600'}}>xxxxx</Text>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    backgroundColor: '#B261B3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
