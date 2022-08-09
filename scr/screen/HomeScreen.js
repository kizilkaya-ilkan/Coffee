import React, {useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  View,  
  Text,
  Button,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

export default HomeScreen = () => {
  const navigation = useNavigation()
  const [isLoading, setLoading] = useState(false);
  
  const getMovies = async () => {
   {navigation.navigate("MainScreen")}
  }

    setTimeout(() => {
      getMovies();
  }, 4000);

  return (
    <SafeAreaView style={styles.background}> 
    <View style={styles.container}>
    { isLoading ? <ActivityIndicator/> : (
    <ImageBackground source={require('../../image/background.jpg')} resizeMode="cover" style={styles.image}>
    <Image source={require('../../image/logo.png')} style={{width:120,height:120,bottom:170}}/>
    <Text style={styles.text}>Coffe <Text style={{color:'white'}}>HUB</Text></Text>
    </ImageBackground>
    )}
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  background:
  {
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    justifyContent: "center",
    alignItems:'center',

  },
  text: {
    color: "black",
    bottom:170,
    fontSize: 36,
    lineHeight: 50,
    textDecorationLine:'underline',
    fontWeight: "bold",
    textAlign: "center",

  }
});