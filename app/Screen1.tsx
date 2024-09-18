import { Pressable, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
export default function Screen1() {
   const [count, setcount]= useState(1);
   const [tien, setTien] = useState(141800);
 const handleClickIncrease=()=>{

   setcount(count+1);
   setTien(141800*(count+1))
  
 };
 const handleClickDecrease=()=>{
  setcount(count-1);
  setTien(141800*(count-1))

 }

  
  return (

    <View style={styles.container}>
      <View style={{backgroundColor:'white',flex:1, justifyContent:'flex-start', flexDirection:'column' }}>
        <View style={{backgroundColor:'white',flex:1, justifyContent:'flex-start', flexDirection:'row' }}>
          <Image source={require('../assets/book.png')} 
           style={{width:104, height:127}}
          ></Image>
          <View style={{flexDirection:'column', left:10}}>
           <Text style={{fontWeight:'bold'}}>Nguyên hàm tích phân và ứng dụng </Text>
          
           <Text style={{fontWeight:'bold', top:10}}>Cung cấp bởi Tiki Trading</Text>
           
           <Text style={{fontWeight:'bold', top:20, color:'red'}}>141.800 đ</Text>
           <Text style={{fontWeight:'bold', top:20, color:'#808080', textDecorationLine:'line-through'}}>141.800 đ</Text>
           <View style={{flexDirection:'row', top: 30,marginHorizontal:10 }}>
           <Pressable  onPress={handleClickDecrease}  style={{backgroundColor:'#808080',height:20,width:20,alignItems:'center', marginHorizontal:10}}><Text>-</Text></Pressable>
           <Text>{count}</Text>
           <Pressable  onPress={handleClickIncrease} style={{backgroundColor:'#808080',height:20, width:20,alignItems:'center',marginHorizontal:10}}><Text>+</Text></Pressable>
           
           <TouchableOpacity style={{marginLeft:70}} ><Text style={{color:'#134FEC'}}>Mua sau</Text></TouchableOpacity>
         
           </View>
           </View>
           
          
           </View>


           <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:'column'}}>
           <View style={{flexDirection:'row'}}>
           <Text>Mã giảm giá đã lưu</Text>
           <TouchableOpacity><Text style={{color:'#134FEC'}}>Xem tại đây</Text></TouchableOpacity>
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{borderWidth:1,height:45, width:208, alignItems:'center', justifyContent:'center'}}><Text style={{fontWeight:'bold'}}>Mã giảm giá</Text></View>
          <Pressable style={{height:45, width:99,backgroundColor:'#0A5EB7', justifyContent:'center', alignItems:'center',marginLeft:20}}><Text style={{color:'white', fontWeight:'bold'}}>Áp dụng</Text></Pressable>
           </View>
           
           </View>
           </View>
           </View>

           <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', top:20}}>
            <Text style={{fontWeight:'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <TouchableOpacity><Text style={{color:'#134FEC'}}>Nhập tại đây?</Text></TouchableOpacity>
            </View>
          
          

          
<View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
 <Text style={{ marginLeft:20,fontWeight:'bold'}}>Tạm tính</Text>
 <Text style={{color:'red', marginLeft:200}}>{tien} đ</Text>
</View>

<View style={{flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}}>
<View style={{flexDirection:'row'}}>
  <Text style={{ marginLeft:20,fontWeight:'bold'}}>Thành tiền</Text>
  <Text style={{color:'red', marginLeft:200}}>{tien} đ</Text>
</View>
 <Pressable style={{backgroundColor:'red', width:331, height:45, justifyContent:'center', alignItems:'center' }}> <Text style={{color:'white', fontWeight:'bold'}}>TIẾN HÀNH ĐẶT HÀNG</Text></Pressable>
</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'white'
  }

})