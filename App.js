import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://rukminim3.flixcart.com/image/850/1000/kuof5ow0/wall-decoration/9/s/i/cartoon-rick-and-morty-rick-sanchez-wallpaper-1-p111-poster-original-imag7qxqh5fefcfy.jpeg?q=90&crop=false" }} style={{ width: 215, height:294 }} />
      <Text>Rick Sanchez!</Text>
      <Button title="wubba" onPress={() => alert("Wubba lubba dub dub!")} />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e4ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
