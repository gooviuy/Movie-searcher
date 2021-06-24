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
} from "react-native";
import ButtonSearch from "./ButtonSearch";

export default function Main() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    Keyboard.dismiss();
    axios
      .get("https://www.omdbapi.com/?apikey=93064b0b&s=" + movieName)
      .then((result) => {
        setMovies(result.data.Search);
      });
  };

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          value={movieName}
          onChangeText={setMovieName}
          placeholder="Enter a movie name"
          style={styles.textInput}
        />
        <ButtonSearch title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.Poster }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.Title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
      />
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
  movieTitle: {
    color: "white",
  },
  movieImage: {
    width: 150,
    height: 150,
  },
});