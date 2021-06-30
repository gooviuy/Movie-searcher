import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import ButtonSearch from "../components/ButtonSearch";
import MovieCard from "../components/MovieCard";

export default function Main() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // para mostrar si esta cargando en la búsqueda.
  const { width: windowWidth} = useWindowDimensions();


  const numColumns = Math.floor(windowWidth / 180) /// ancho del elemento 150 + 15 + 15 margen derecho , margen izquierdo.
                                        // redondeo para abajo usando math.
  
  
  const handleSearch = () => {
    Keyboard.dismiss();
//debugger; // para la ejecucion de programa en sesion debugger

    setLoading(true)
    setMovies([])
    axios
      .get("https://www.omdbapi.com/?apikey=93064b0b&s=" + movieName)
      .then((result) => {
        setMovies(result.data.Search);
      }).finally(() => setLoading(false));
  };

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          value={movieName}
          onChangeText={setMovieName}
          placeholder="Enter a movie name"
          style={styles.textInput}
          onSubmitEditing={handleSearch} // evento qe se dispara cada vez que se busca film
        />
        <ButtonSearch title="Search" onPress={handleSearch} />
      </View>
      <FlatList
   
        data={movies}
        renderItem={({ item }) => <MovieCard movie= {item} />}
        
        keyExtractor={(item) => item.imdbID}
        numColumns={numColumns}
        key={numColumns}// sirve para forzar el recargar el elemento, ej cuando muevo el celular para que se adapte a pantalla movil.
        contentContainerStyle ={styles.list} // para crear items alineados.
        ListEmptyComponent={
        <Text style={{color:"white", marginTop: 150, fontSize: 20, textAlign: "center"}}>{loading ? "Loading" : "The film that you are looking for does not exist"}.</Text>
        }// si no machea ningun film.
 />
      {/* <ScrollView key={numColumns}>
        {movies.map((movie) => (
          <Text style={{ color: "white" }} key={movie.imdbID}>
            {movie.Title}
          </Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 10,
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 220,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 20,
    backgroundColor: "antiquewhite",
    marginRight: 5,
  },
  list: {
    alignItems: "center",
  },
});