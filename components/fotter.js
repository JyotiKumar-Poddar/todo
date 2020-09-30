import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Fotter = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Made with <MaterialIcons name="favorite" size={15} color="#DDD" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        borderRadius: 80 / 2,
        width: 400,
        alignContent: 'center',
        marginBottom: 2
    },
    title: {
        textAlign: 'center',
        color: '#DDD',
        fontSize: 20,
        fontWeight: 'bold',

    }

});

export default Fotter;