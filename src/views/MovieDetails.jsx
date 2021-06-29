import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useParams } from "react-router-native";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=93064b0b&i=" + movieId)
      .then((result) => {
        setMovie(result.data);
      });
  }, [movieId]);

  if (!movie) {
    return <Text style={{ flex: 1 }}>Cargarndo Movie...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={
          movie.Poster === "N/A" ? imagePlaceholder : { uri: movie.Poster }
        }
      />
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.h3}>
        {movie.Title} ({movie.Year})
      </Text>
      {movie.Plot !== "N/A" && <Text style={styles.plot}>{movie.Plot}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  poster: {
    width: 280,
    height: 420,
  },
  h3: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    width: 280,
    marginTop: 10,
  },
  plot: {
    marginTop: 10,
    color: "white",
    borderTopColor: "white",
    borderTopWidth: 1,
    width: 280,
  },
});