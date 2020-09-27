import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


const AddToDo = ({ addToDoHandler }) => {

    const [todo, setTodo] = useState('');

    return (
        <View >
            <TextInput
                style={styles.todoInput}
                onChangeText={(todo) => {
                    setTodo(todo);
                }}
                placeholder="Enter your todo" />

            <TouchableOpacity
                onPress={() => {
                    addToDoHandler(todo)
                }}
                style={styles.addToDoButton}>
                <Text style={styles.addToDoButtonTitle} >Add ToDo</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    todoInput: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    addToDoButton: {
        padding: 20,
        marginTop: 16,
        backgroundColor: 'coral',
        borderRadius: 50,
        width: 200,
        margin: 75

    },
    addToDoButtonTitle: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }


})

export default AddToDo;