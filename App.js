import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./src/screens/About";
import Courses from "./src/screens/Courses";
import Contact from "./src/screens/Contact";
import Student from "./src/screens/Student";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" options={{headerShown:false,headerTitleAlign:"center"}}component={Home} />
    <Stack.Screen name="About" options={{headerTitleAlign:"center"}}component={About} />
    <Stack.Screen name="Courses" options={{headerTitleAlign:"center"}}component={Courses} />
    <Stack.Screen name="Contact" options={{headerTitleAlign:"center"}} component={Contact} />
    <Stack.Screen name="CourseDetails" options={{headerTitleAlign:"center"}} component={CourseDetails} />
    
    <Stack.Screen name="Student" component={Student} />
  </Stack.Navigator>
  </NavigationContainer>
  //   <View>
  //  {/* <Home/> */}
  //  {/* <About/> */}
  //  <Contact/>
  //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
