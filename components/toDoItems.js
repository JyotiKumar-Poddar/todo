import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ToDoItems = ({ item, onPresHandler }) => {
    return (
        <TouchableOpacity onPress={() => onPresHandler(item.id)}>
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <MaterialIcons name="delete" size={24} color="ba" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

})
export default ToDoItems;