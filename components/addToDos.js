import React, { useState, useRef } from 'react';
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
                value={todo}
                placeholder="Enter your todo" />

            <TouchableOpacity
                onPress={() => {
                    addToDoHandler(todo);
                    setTodo('')
                }}
                style={styles.addToDoButton}>
                <Text style={styles.addToDoButtonTitle} >Add ToDo</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    todoInput: {
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    addToDoButton: {
        padding: 20,
        marginTop: 10,
        backgroundColor: 'coral',
        borderRadius: 50,
        width: 150,
        marginLeft: 85,
        alignItems: 'center'
    },
    addToDoButtonTitle: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }


})

export default AddToDo;