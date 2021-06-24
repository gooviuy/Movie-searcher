import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function Header() {
    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.text}>Movie Searcher</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 60,
        backgroundColor: "#E50914",
        alignItems: "center",
        justifyContent: "center"

    },
    text : {
        color: "white"
    }
})
