import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import {Link} from "react-router-native"


const NavLink = ({ to, text }) => (
  <Link style={styles.text} underlayColor="red" to={to}>
    <Text style={styles.linkText}>{text}</Text>
  </Link>
);


export default function Footer() {
    return (
        <SafeAreaView style={styles.view} >
         <NavLink to="/" text="Home" />
         <NavLink to="/search" text="Search" />
          
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
},
 linkText: {
    color: "white",
    padding: 5,
    fontSize: 15,
  },
})
