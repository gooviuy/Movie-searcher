import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, useState } from 'react-native';  
import ButtonSearch from './ButtonSearch'

export default function Main() {

     return (
        <SafeAreaView style={styles.view}>
           <SafeAreaView style={styles.search}>
           <TextInput style={styles.textInput} value={movieName}></TextInput>
              <ButtonSearch title="Search" />
            </SafeAreaView>
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
