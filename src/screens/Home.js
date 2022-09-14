import { StyleSheet, Text,Image,View, Alert,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
 
        <SafeAreaView style={styles.container}>
     <Image style={styles.imgStyle}source={require('../../assets/person.png')} resizeMode="contain"></Image>
    <Text style={styles.mainText}>welcome to</Text>
    <Text style={[styles.mainText,styles.blue]}> my channel </Text>
    <Text style={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab adipisci velit explicabo reprehenderit distinctio nihil, unde magni eligendi ut tenetur laboriosam quod cumque aperiam?</Text>
    <Text style={styles.lineStyle}></Text>
    <View style={styles.iconRe}>
    <TouchableOpacity onPress={()=>{
    navigation.navigate("About")
    }}>
      <Image style={styles.iconStyle} source={require("../../assets/account1.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
    navigation.navigate("Contact")
    }}>
      <Image  style={styles.iconStyle} source={require("../../assets/contact.jpg")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
   navigation.navigate("Courses")
    }}>
      <Image  style={styles.iconStyle} source={require("../../assets/course.jpg")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
      navigation.navigate("Student")
    }}>
      <Image style={styles.iconStyle} source={require("../../assets/student.png")}></Image>
      </TouchableOpacity>
      </View>
      <Text style={styles.lineStyle}></Text>
    </SafeAreaView>

 ) }
export default Home

const styles = StyleSheet.create({
  container: {
    display:"flex",
    padding:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRe:{
    display:"flex",
    flexDirection:"row",
    padding:30
  },
  iconStyle:{
    width:30,
    height:20,
    padding:40
  },
    mainText:{
      textTransform:'uppercase',
      fontSize:40
    },
    blue:{
      color:"blue"
    },
    des:{
color:"grey",

    },
    imgStyle:{
      width:250,
    
      height:170,
      marginTop:100
    },
    lineStyle:{
      height:3,
      width:350,
      color:"grey",
      backgroundColor:"black",
      marginTop:20,
      marginHorizontal:5,
      borderRadius:7
    }
})