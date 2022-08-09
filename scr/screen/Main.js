import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';



export default MainScreen = () => {
    const navigation = useNavigation()
  

    return (
        <SafeAreaView style={styles.background}> 
        <View style={{flex:0,zIndex:0}}><ImageBackground style={[styles.background]}source={require('../../image/background.jpg')}/></View>
        <View style={{flexDirection:'row',justifyContent:'space-between',flex:-1,zIndex:1}}>
          <Image style={{width:30,height:30,margin:20}} source={require('../../image/menu.png')}></Image>
          <Image style={{width:40,height:40,margin:15}} source={require('../../image/scanner.png')}></Image> 
        </View>
             <View style={{flexDirection:'column',justifyContent:'flex-start',margin:20,flex:-1,zIndex:1}}>
                 <Text style={styles.Text}>It's Great <Text style={{color:'black'}}>Day for Coffee.</Text></Text>
             </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',flex:-1,zIndex:1}}>
            <Image style={{width:70,height:70,margin:20}} source={require('../../image/v.png')}></Image>
            <Text style={{fontSize:20,fontFamily: "Cochin",fontWeight: "bold",top:40,left:60,margin:0}}>Experesso</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',flex:-1,zIndex:1}}>
            <Image style={{width:70,height:70,margin:20}} source={require('../../image/d.png')}></Image>
            <Text style={{fontSize:20,fontFamily: "Cochin",fontWeight: "bold",top:40,left:60,margin:0}}>Mocho</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',flex:-1,zIndex:1}}>
            <Image style={{width:70,height:70,margin:20}} source={require('../../image/e.png')}></Image>
            <Text style={{fontSize:20,fontFamily: "Cochin",fontWeight: "bold",top:40,left:60,margin:0}}>Latte</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',flex:-1,zIndex:1}}>
            <Image style={{marginLeft:25,width:70,height:70,margin:20}} source={require('../../image/x.png')}></Image>
            <Text style={{fontSize:20,fontFamily: "Cochin",fontWeight: "bold",top:40,left:57,margin:0}}>Cappuccino</Text>
        </View>
        <View style={{flex:-1,zIndex:1,flexDirection:'row',margin:20,alignItems:'center'}}>
        </View>
        <View style={styles.topbottom}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={()=>navigation.navigate('SatinAlma')}>
        <Image style={{height:40,width:40,}}  source={require('../../image/sepet.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Image style={{height:40,width:40,}} source={require('../../image/ödeme.png')}></Image>
        </TouchableOpacity>
        
      </View>
    </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    topbottom:{
      flex:-1,
      top:12,
      backgroundColor: "#a0522d",
      borderWidth: 3,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      
    },
    topbar:{
    flex:-1,
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-between',
    margin:20,
    },
    background:
    {
      width:Dimensions.get('screen').width,
      height:Dimensions.get('screen').height,
      color:'black',
      flex:1,
    },
    image:{
      width:Dimensions.get('screen').width,
      height:Dimensions.get('screen').height,
      color:'black',
      flex:3,
      zIndex:0,
    },
    Text:{
      fontSize:40,
      color:'white',
      fontFamily: "Cochin",
      fontWeight: "bold"
    }
  });
