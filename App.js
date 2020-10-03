import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Alert, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import Header from './components/header'
import Fotter from './components/fotter'
import ToDoItems from './components/toDoItems'
import AddToDo from './components/addToDos'
import FlexSandBox from './components/flexSnadBox'
import { MaterialIcons } from '@expo/vector-icons';
import * as dataApi from './components/data-api/dataApi';


export default function App() {

  const [todos, setTodos] = useState([
    {
      "title": "Clean kitchen",
      "key": "1"
    },
    {
      "title": "Call Eric",
      "key": "2"
    },
    {
      "title": "Water flowers",
      "key": "3"
    }
  ]);
  useEffect(() => {
    //console.log(todos);
    dataApi._retrieveData().then(v => {
      if (v != null) {
        console.log("First item is", JSON.parse(v));
        setTodos(JSON.parse(v));
      }
    });

  }, [])
  useEffect(() => {
    //  console.log("Todo lenght", todos.length);
    //  console.log("saving todos", todos);
    dataApi._storeData(todos);
    //  console.log("Fettching agian")
    // dataApi._retrieveData().then(v => console.log(v));

  }, [todos])

  const onPresHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.key != key)
    });
  }
  const addToDoHandler = (todo) => {
    if (todo.length > 3) {
      setTodos((prevTodos) => {
        console.log("prevTodos", prevTodos);
        const newId = prevTodos != 'undefined' && prevTodos.length > 0 ?
          (new Number(prevTodos[prevTodos.length - 1].key) + 1).toString() : "1";
        return [
          ...prevTodos,
          { title: todo, key: newId }

        ]
      });

    } else {
      Alert.alert("Opps!", "Todo must be more than 3 characters",
        [{ test: 'OK' }]
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
        <Fotter />
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
