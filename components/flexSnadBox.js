import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const FlexSandBox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text_1} >One</Text>
            <Text style={styles.text_2} >Two</Text>
            <Text style={styles.text_3}  >Three</Text>
            <Text style={styles.text_4}  >Three</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#dddd',
    },
    text_1: {
        flex: 4,
        padding: 20,
        backgroundColor: 'gold'
    },
    text_2: {
        flex: 1,
        padding: 30,
        backgroundColor: 'green'
    },
    text_3: {
        flex: 4,
        padding: 40,
        backgroundColor: 'red'
    },
    text_4: {
        flex: 1,
        padding: 50,
        backgroundColor: 'violet'
    },


})

export default FlexSandBox;