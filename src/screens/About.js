import { StyleSheet, Text, View ,Image, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <View >
     <Text style={styles.mainAbout}>Fariha kausar</Text>
     <Text style={[styles.blue,{color:"black",textAlign:"center"}]}>I am </Text>
     <Text style={styles.blue}>Full Stack Web Developer </Text>
     <Image source={require("../../assets/about.png")} style={{height:120,marginTop:5}}></Image>
     </View>
     <View style={styles.aboutText}>
      <Text style={{color:"white"}}>About me</Text>
      <Text style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quo? Cumque natus aspernatur quasi! Provident soluta ut repellendus cum quaerat.</Text>

     </View>
     <Text style={styles.lineStyle}></Text>
     <Text style={[styles.blue,{color:"black",textAlign:"center"}]}>FOLLOW ME ON SOCIAL MEDIA </Text>
     <View style={styles.iconRe}>
     <TouchableOpacity onPress={()=>{
     
     Linking.openURL('https://www.linkedin.com/in/fariha-kausar-6245b822b/') }}
   >
      <Image style={styles.iconStyle} source={require("../../assets/link.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
    Linking.openURL('mailto:farihakausar24@gmail.com') }}
    >
   
   
      <Image  style={styles.iconStyle} source={require("../../assets/gmail.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/farihakausar')}>
     
    
      <Image  style={styles.iconStyle} source={require("../../assets/git.png")}></Image>
      </TouchableOpacity>
      </View>
      <Text style={[styles.lineStyle,{marginTop:4}]}></Text>
      </View>

  )
}

export default About

const styles = StyleSheet.create({
  blue:{
fontSize:20,
color:"purple"
  },
  aboutText:{
  marginTop:20,
  padding:30,
  backgroundColor:"purple",
  color:"grey"
  },  lineStyle:{
    height:3,
    width:350,
    color:"grey",
    backgroundColor:"black",
    marginTop:9,
    marginHorizontal:5,
    borderRadius:7
  },
  mainAbout:{
    fontSize:24,
color:" purple",
textAlign:"center"
  },
  container: {
    display:"flex",
    marginTop:100,
    padding:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRe:{
    display:"flex",
    flexDirection:"row",
    padding:30
  },  iconStyle:{
    width:30,
    height:20,
    padding:20,
    marginHorizontal:5
  },
})