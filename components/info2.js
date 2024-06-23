import { View,Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Info2(){
  return(
  <View style={styles.container}>
    <Text style={styles.title}>infoss</Text>
  </View>
  )}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',

  }
})