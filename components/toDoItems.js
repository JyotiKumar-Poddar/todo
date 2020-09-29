import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ToDoItems = ({ item, onPresHandler }) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => onPresHandler(item.id)}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item: {
        padding: 12,
        marginTop: 12,
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