import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Contact = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mes, setMes] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [sub, setSub] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
 const submitBtn = () => {
  if(!name &&!email){
    Alert.alert(`plz fill name and email`);
  
  }else if(!mes ){
    Alert.alert(`plz write your query`);
  }
  else if(!phone ){
    Alert.alert(`plz enter phone number`);
  }
  else if(name &&phone&&mes&&email){
Alert.alert(`thank you ${name}`)

  }
else{
  Alert.alert("all fields are mandatory to fill")
}
nav()
 }
 const nav=()=>{
  navigation.navigate("Home")
 }
  return (
    <View style={styles.container}>
      <View style={styles.levelText}>
        <Text style={[styles.blue, { textAlign: "center" }]}>
          Level up your knowledge
        </Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("mailto:farihakausar24@gmail.com");
          }}
        >
          <Text style={[styles.blue, { color: "black", textAlign: "center" }]}>
            You can reach us at anytime at farihakausar24@gmail.com{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Enter your Name:</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="false"
          autoCorrect={false}
          onChangeText={(n)=>{
            setName(n)}}
          placeholder="Enter your name"
        ></TextInput>
        <Text>Enter your email:</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(n)=>{
            setEmail(n)}}
          autoCapitalize="false"
          autoCorrect={false}
          placeholder="Enter your email"
        ></TextInput>
        <Text>Enter your phone:</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="false"
          autoCorrect={false}
          onChangeText={(n)=>{
            setPhone(n)}}
          placeholder="Enter your phone"
        ></TextInput>
        <Text>How we can help you?</Text>
        <TextInput
          style={styles.inputStyle}
          numberOfLines={3}
          multiline={true}
          onChangeText={(n)=>{
            setMes(n)}}
          autoCapitalize="false"
          autoCorrect={false}
          placeholder="enter your query"
        ></TextInput>
<View>

<BouncyCheckbox onPress={(isChecked) => {setIsChecked(true)}} />
        <Text style={styles.text}>
          I have read and agreed with the terms and conditions
        </Text>
        <TouchableOpacity
          onPress={submitBtn}
          disabled={!isChecked}
          style={styles.btn}
          
        >
         
          <Text
            style={styles.btn}
            onChangeText={(n)=>{
              setSub(n)
            }}
          >
            Contact us
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btn:{
    borderColor: "white",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10
  },

  levelText: {
    marginTop: 50,
    textAlign: "center",
  },
  blue: {
    fontSize: 20,
    color: "purple",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 2,

    padding: 10,
    marginVertical: 10,
  },
});
