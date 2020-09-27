import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>  My ToDo's</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 25,
        backgroundColor: 'coral',
        borderRadius: 80 / 2,
        width: 360,
        alignContent: 'center',
        margin: 25
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',

    }

});

export default Header;