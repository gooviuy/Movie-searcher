import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import Header from "./src/components/Header"
import Main from "./src/views/Main"
import Footer from "./src/components/Footer"
import Home from "./src/views/Home"



export default function App() {
  return (
<NativeRouter>
    <SafeAreaView  style={styles.container}>
      <KeyboardAvoidingView // formula to hide status bar
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.container}
>
<StatusBar backgroundColor="#E50914" style="auto" />
      <Header />
      
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movies/:movieId" />
        <Route exact path="/search" component={Home} />
      </Switch>
      
      <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView >
</NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
});
