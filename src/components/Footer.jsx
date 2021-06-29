import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import {Link} from "react-router-native"



export default function Footer() {
    return (
        <SafeAreaView style={styles.view} >
            <Link style={styles.text} underlayColor="red" to="/">
            <Text>Home</Text>
            </Link>
            <Link style={styles.text} to="/search">
                <Text>Search</Text>
            </Link> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
view: {
    height: 65,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
},
text: {
color: "white",
}
})
