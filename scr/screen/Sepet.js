import {useRoute} from '@react-navigation/native';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList
} from 'react-native';


export default Sepet = () => {
  const route = useRoute()
  const {GeneralResponse} = useSelector(state=>state)
  return (
    <SafeAreaView style={styles.background}> 
     <View style={{flex:0,zIndex:0}}>
      <ImageBackground style={[styles.background]}source={require('../../image/background.jpg')}/>
        <View style={styles.special}>
            <Text style={styles.Texte}>Sepetim</Text>
            <Text>Coffe İsmi:{GeneralResponse.coffeeName} Coffee Miktari:{GeneralResponse.coffeeBirim}</Text>
        </View> 
        <View style={{flexDirection:'row', margin:8,marginTop:300,justifyContent:'center'}}>
           <Text style={{fontSize:20 , fontWeight:'bold'}}>{route.params.ürünmiktari + 1} Adet </Text>
           <Text style={{fontSize:20,  fontWeight:'bold'}}>{route.params.ürünadi}</Text>
        </View>
        <View style={{flexDirection:'row', margin:8,justifyContent:'center'}}>
       <Text style={{fontSize:20,  fontWeight:'bold'}}>Ödenecek Tutar TL: {route.params.ücret}</Text>
       </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  background:
  {
    flex:1,
    flexDirection:'column',
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    backgroundColor:'black'
  },
  Sepet:{
    flex:-1,
    margin:20,
    alignItems:'center',
    backgroundColor:'red'
  },
  special:{
    flex:-1,
    marginTop:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background:'red',
    color:'red',
    zIndex:1
  },
  Texte:{
    fontSize:20,
    fontWeight:'bold',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }
});