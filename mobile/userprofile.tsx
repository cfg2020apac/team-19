import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{"\n"}Benedictus Alvian Sofjan{"\n"}</Text>
        <Image
          style={styles.emoji}
          source={{
            uri: 'https://i.pinimg.com/236x/29/3b/84/293b84f3561f0f895b54554ff195ea1a.jpg',
          }}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontSize: 18}}>{`
            Phone Number: 6434 3299
            Email: ben@gmail.com
            Status: Divorce

            Pending Actions: XXX
            `}</Text>
            
          <Text style={{color: 'deepskyblue', fontSize: 18}}>{`
            See timeline
          `}</Text>

          <Text style={{fontSize: 18}}>{`
            Note: XXXXXX


            Income:
            Housing Status:
            Smoking Habit:
            Drinking Habit:
            Gender:
            Mental Stability:
            `}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    fontSize: 20 ,
    alignItems: 'flex-start',
  },
  emoji: {
    width: 70,
    height: 70,
  },
});
