import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, useState, Keyboard, FlatList} from 'react-native';  
import ButtonSearch from './ButtonSearch';
import axios from "axios";

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
        <SafeAreaView style={styles.view}>
           <SafeAreaView style={styles.search}>
              <TextInput value={movieName} onChangeText={setMovieName} placeholder="Enter  a movie name" style={styles.textInput}></TextInput>
              <ButtonSearch title="Search" onPress={handleSearch} />
            </SafeAreaView>
            <FlatList data={movies} renderItem={({item}) => <Text>{item.Title} </Text> } keyExtractor={(item) =>  item.imbdID} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 view: {
     flex: 1,
     backgroundColor: "#141414"
 },
 search: {
     flexDirection: "row"
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
})
