import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
     <View style={styles.home}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
});
