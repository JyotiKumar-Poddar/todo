import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/header'
import ToDoItems from './components/toDoItems'
import AddToDo from './components/addToDos'
import FlexSandBox from './components/flexSnadBox'

export default function App() {

  const [todos, setTodos] = useState([
    {
      "title": "Clean kitchen",
      "id": "1"
    },
    {
      "title": "Call Eric",
      "id": "2"
    },
    {
      "title": "Water flowers",
      "id": "3"
    }
  ]);

  const onPresHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.id != key)
    });
  }
  const addToDoHandler = (todo) => {
    if (todo.length > 3) {
      setTodos((prevTodos) => {
        console.log(prevTodos);
        const newId = prevTodos != 'undefined' && prevTodos.length > 0 ?
          (new Number(prevTodos[prevTodos.length - 1].id) + 1).toString() : "1";
        console.log(newId);
        return [
          ...prevTodos,
          { title: todo, id: newId }

        ]
      });
    } else {
      Alert.alert("Opps!", "Todo must be more than 3 characters",
        [{ test: 'OK', onPress: () => console.log('ok cliked') }]
      )
    }
  }

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo addToDoHandler={addToDoHandler} />
          <View style={styles.todoItem}>
            <FlatList
              data={todos}
              renderItem={({ item }) =>
                <ToDoItems item={item} onPresHandler={onPresHandler} />
              }
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignContent: 'center',
    padding: 30,
  },

  todoItem: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
