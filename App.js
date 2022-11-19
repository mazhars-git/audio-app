import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  else{
    
    return (
      <View style={styles.container}>
        <Text style={{fontSize: '40px', color: 'red'}}>Welcome to My Audio app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
  },
});
