import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "./src/Header"
import Main from "./src/Main"
import Footer from "./src/Footer"



export default function App() {
  return (
   
    <SafeAreaView  style={styles.container}>
      <KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.container}
>
<StatusBar backgroundColor="#E50914" style="auto" />
      <Header />
      <Main />
      <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
});
