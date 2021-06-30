import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "react-router-native";
export default function MovieCard({ movie }) {
  return (
    <Link to={"/movies/" + movie.imdbID}>
      <View style={styles.card}>
       
        <Text style={styles.movieTitle}>{movie.Title}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  movieTitle: {
    color: "white",
  },
  movieImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  card: {
    alignContent: "space-between",
    width: 150,
    margin: 15,
  },
});