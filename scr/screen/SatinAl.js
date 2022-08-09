import React,{useState}from 'react';
import { useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { SetMiktar, SetName, } from "../redux/action";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
  Alert,
  } from 'react-native';

export default SatinAlma = () => {
  const dispatch = useDispatch()
  const {GeneralResponse} = useSelector(state=>state)
  const navigation = useNavigation()

  const [count, setCount] = useState(1);

  const [countUrunsAdet, setUrunsAdet] = useState(1);
  const [countUruns, setUruns] = useState("");
  const [ücret, setUcret] = useState(17.5);



  const handleIncrease = () => {
    setCount(count + 1);
  };
  
  const handleDecrease = () => {
    setCount(count - 1);
  };

  const fixed = () => {
    setCount(count = 0);

  };

  const MochaArtanÜrün = () => {
    setUruns("Mocha")
    setUrunsAdet(count)
    setUcret(count*17.5)
    dispatch(SetName("Mocha"))
    dispatch(SetMiktar(count))
    handleIncrease()
  }; 
  const MochaÜrünAzalt = () => {
    setUruns("Mocha")
    setUrunsAdet(count)
    dispatch(SetName("Mocha"))
    dispatch(SetMiktar(count))
    handleDecrease()
  };

  
const navigate = useNavigation()
  
  return (
    <SafeAreaView style={styles.background}>
    <View style={{flex:0,zIndex:0}}>
      <ImageBackground style={[styles.background]}source={require('../../image/background.jpg')}/>
    </View>
    <View style={[{flex:-1,zIndex:1},styles.TextBar]}>
      <Text style={styles.TextBar}>Mocchiato</Text>
    </View>
    <TouchableOpacity onPress={()=>Alert.alert("Mocha Dünyanın En iyi Kahvesinden Üretilen Kahve Türü")}>
    <View  style={styles.imageSettings}>
      <Image style={styles.image} source={require('../../image/x.png')}></Image>
    </View>
    </TouchableOpacity>
    <View style={{flex:1,backgroundColor:'#cdc9c9',zIndex:1}}>
      <View style={styles.main}>
          <Text style={styles.mainText}>Mocchiato</Text>
          <View style={styles.buttonController}>
              <Button  title='+' onPress={MochaArtanÜrün}></Button>
              <Text style={{marginLeft:8,marginRight:8,color:'black'}}>{count.toString()}</Text>
              <Button title='-' onPress={MochaÜrünAzalt}></Button>
          </View>
      </View>
      <View style={styles.ödeme}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>{"Ödenecek Tutar: "+ count*17.5+" TL"}</Text>
      </View>
      <View style={[styles.Size]}>
        <Text style={styles.TextBar}>Size</Text>
          <View style={styles.SizeImage}>
            <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
             <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
            <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
           </View>
              <View style={{flexDirection:'row'}}>
                 <Text style={{textDecorationLine:'underline',alignItems:'center',marginLeft:7,marginRight:32,fontWeight:'bold'}}>Mini</Text>
                 <Text style={{alignItems:'center',marginRight:27,fontWeight:'bold'}}>Orta</Text>
                <Text style={{alignItems:'center',fontWeight:'bold'}}>Büyük</Text>
           </View>
      </View>
      <View style={[styles.Size]}>
        <Text style={styles.TextBar}>Sugar</Text>
          <View style={styles.SizeImage}>
            <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
             <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
            <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
            <Image style={{height:50,width:50,marginRight:10}} source={require('../../image/x.png')}></Image>
           </View>
              <View style={{flexDirection:'row'}}>
                 <Text style={{textDecorationLine:'underline',alignItems:'center',marginLeft:7,marginRight:47,fontWeight:'bold'}}>Bir</Text>
                 <Text style={{alignItems:'center',marginRight:44,fontWeight:'bold'}}>İki</Text>
                <Text style={{alignItems:'center',marginRight:40,fontWeight:'bold'}}>Üç</Text>
                <Text style={{alignItems:'center',fontWeight:'bold'}}>Dört</Text>
           </View>     
      </View>
      <View style={styles.top}>
        <TouchableOpacity onPress={
          ()=>navigation.navigate('Sepet',{ürünadi:countUruns,ürünmiktari:countUrunsAdet,ücret:ücret})
        }>
          <Text style={{fontSize: 18,
           color: "#fff",
           fontWeight: "bold",
           alignSelf: "center",
           textTransform: "uppercase"}}>Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  top: {
  marginTop:40,
  marginLeft:20,
  marginRight:20,
  elevation: 18,
  backgroundColor: "#009688",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  },
  SizeImage: {
    flex:-1,
    marginTop:10,
    marginLeft:-2,
    justifyContent:'flex-start',
    flexDirection:'row',
   },
  Size: {
    flex:-1,
    justifyContent:'flex-start',
    flexDirection:'column',
    marginLeft:20,
    marginTop:30
   },
  ödeme: {
    flex:-1,
    justifyContent:'flex-start',
    flexDirection:'column',
    marginLeft:20,
    marginTop:-15
   },
  buttonController:{
  flexDirection:'row',
  height:30,
  alignItems:'center',
  },
  main: {
    flex:-1,
    justifyContent:'space-between',
    flexDirection:'row',
    margin:20,
   },
  mainText:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:5
  },
  background: {
   flex:1,
   flexDirection:'column',
   width:Dimensions.get('screen').width,
   height:Dimensions.get('screen').height,
   backgroundColor:'black'
  },
  imageSettings:{
    flex:-1,
    top:10,
    marginLeft:30,
    marginBottom:70,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    zIndex:1,
  },
  image:{
    height:160,
    width:160,
  },
  TextBar:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  }
});