import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ToDoItems = ({ item, onPresHandler }) => {
    return (
        <TouchableOpacity onPress={() => onPresHandler(item.id)}>
            <Text style={styles.item} >{item.title}</Text>
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
    },
})
export default ToDoItems;