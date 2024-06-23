import { Button,View,Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Profile({navigation}){
  return(
  <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
    <Button
    title="Minhas Info"
    onPress={ ()=> navigation.navigate('Info2')}
    />
    
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