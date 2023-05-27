import React from 'react';
import { View, Text, Button,FlatList,StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  let users=[
    {
        id:1,name:"AbdulRehman"
    },
    {
        id:2,name:"AliRaza"
    },
    {
        id:3,name:"Samsung"
    },
    {
        id:4,name:"Apple"
    },
    {
        id:10,name:"Zeeshan"
    }
  ]
  return (
    <View>
   <FlatList 
   data={users}
   renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
   keyExtractor={item=>item.id}
   />
    </View>
  );
};

export default HomeScreen;


const styles=StyleSheet.create({
  item:{
      fontSize:30,
      padding:20,
      borderWidth:2,
      borderColor:'blue',
      margin:10,
      color:'blue',
      backgroundColor:"yellow"
  }})