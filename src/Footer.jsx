import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function Footer() {
    return (
        <SafeAreaView style={styles.view} >
            <Text style={styles.text}>Made by Gonzalo Fontes</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
view: {
    height: 40,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
},
text: {
color: "white",
}
})
