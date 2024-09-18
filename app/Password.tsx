import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Password() {
  const [random , setrandom]=useState('');
   const phatSinhNhauNhien = ()=>{
    const randomString= Math.random().toString(36)
  setrandom(randomString);
     
   };

  return (
        



    <View style={styles.container}>
      <View style={{backgroundColor:'#23235B', borderRadius:15, flex:1, height:605, width:322, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <View style={{justifyContent:'space-between',alignItems:'center', flex:1}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>PASSWORD <br/>GENERATOR</Text>
        

       
        </View>
        <Text style={{width:297, height:55, backgroundColor:'#151537'}}>{random}</Text>
        <View style={{justifyContent:'center', flex:4}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}} >Password length</Text>
        <Text style={{backgroundColor:'white', marginLeft:5, width:118, height:33}}>{random.length}</Text>
        </View>
         
          <Text style={{color:'white', fontWeight:'bold',fontSize:20,marginTop:10}}>Include lower case letters</Text>
          <Text style={{color:'white', fontWeight:'bold',fontSize:20,marginTop:10}}>Include upcase letters</Text>
          <Text style={{color:'white', fontWeight:'bold',fontSize:20,marginTop:10}}>Include number</Text>
          <Text style={{color:'white', fontWeight:'bold',fontSize:20,marginTop:10}}>Include special symbol</Text>
          </View>
          <Pressable onPress={phatSinhNhauNhien} style={{backgroundColor:'#3B3B98', width:269, height:55, justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontWeight:'bold',fontSize:20}}>GENERATE PASSWORD </Text></Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      backgroundColor:'#3B3B98',
      justifyContent:'center',
      alignItems:'center'
    }
})
