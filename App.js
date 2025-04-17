import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import { getDragonBallCharacters } from "./lib/metacritic";

export default function App() {
  const [characters, setCharacters] = useState([]); // Estado para almacenar los personajes

  useEffect(() => {
    // Llama a la función para obtener los personajes al cargar la app
    getDragonBallCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []); // Se ejecuta solo una vez al inicio

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {characters.map((character) => (
        <View key={character.id} style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <Text style={styles.title}>{character.name}</Text>
          {/*<Text style={styles.description}>{character.description}</Text>*/}
          <Text style={styles.ki}>
            Ki: {character.ki} / Max Ki: {character.maxKi}
          </Text>
          <Text style={styles.affiliation}>
            Affiliation: {character.affiliation}
          </Text>
        </View>
      ))}

      <StatusBar style="dark" />

      <Image
        source={{
          uri: "https://rukminim3.flixcart.com/image/850/1000/kuof5ow0/wall-decoration/9/s/i/cartoon-rick-and-morty-rick-sanchez-wallpaper-1-p111-poster-original-imag7qxqh5fefcfy.jpeg?q=90&crop=false",
        }}
        style={{ width: 215, height: 294 }}
      />
      <Text>Rick Sanchez!</Text>
      <Button
        title="wubba"
        onPress={() => alert("Wubba lubba dub dub!")}
        color="red"
      />

      <Pressable
        onPress={() => {
          alert("You pressed the button!");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1a1a1d", // Fondo oscuro para resaltar los elementos
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff", // Amarillo vibrante inspirado en el aura de los Saiyans
    borderRadius: 15, // Bordes más redondeados
    padding: 20,
    alignItems: "center",
    width: "90%",
    marginTop: 30,
    shadowColor: "#000", // Sombra para dar profundidad
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // Sombra en Android
  },
  image: {
    width: 180, // Ajusta el tamaño de la imagen
    height: 180,
    marginBottom: 15,
    borderRadius: 90, // Imagen circular
    borderWidth: 3,
    borderColor: "#ff5733", // Naranja vibrante para resaltar
    resizeMode: "contain", // Asegura que la imagen se ajuste bien
  },
  title: {
    fontSize: 24, // Título más grande
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1a1d", // Texto oscuro para contraste
    textTransform: "uppercase", // Texto en mayúsculas
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
    fontStyle: "italic", // Estilo cursivo para descripciones
  },
  ki: {
    fontSize: 18, // Texto más grande para destacar
    marginBottom: 5,
    color: "#ff5733", // Naranja vibrante
    fontWeight: "bold",
  },
  affiliation: {
    fontSize: 16,
    color: "#1a1a1d", // Texto oscuro
    backgroundColor: "#fff", // Fondo blanco para resaltar
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    overflow: "hidden", // Asegura que el texto no se desborde
  },
});
