import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles, orangeText } from './style'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Text style={[styles.title, orangeText]}>
                Style Code
            </Text>
            <Text style={[styles.title, styles.errorText]}>
                Error Text
            </Text> */}

            {/* <Box style={{ backgroundColor: 'red', flex: 1}} />
            <Box style={{ backgroundColor: 'green', flex: 3 }} />
            <Box style={{ backgroundColor: 'blue', flex: 1, }} /> */}
            {/* <Shadow/> */}
        </View>
    );
}


