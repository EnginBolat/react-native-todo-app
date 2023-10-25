import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
// Datat
import data from "./data.json";
// Components
import Header from "./components/Header/index";
import AddTodo from "./components/Button/AddTodo/index";
import TodoCard from "./components/Card/TodoCard/TodoCard";

export default function App() {
  const [todos, setTodos] = useState(data);
  const [text, setText] = useState('');

  

  // Logic

  const handleInput = text => {
    console.log(text);
    setText(text);
  }

  const addTodo = title => {
    if (text.trim()) {
      const newTodo = {
        id: Math.random().toString(),
        title: text,
        isDone: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setText('');
    }
  }

  const changeIsDone = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const deletedTodoIndex = todos.findIndex((item) => item.id === id);
    if (deletedTodoIndex > -1) {
      const updatedTodos = [...todos];
      updatedTodos.splice(deletedTodoIndex, 1);
      setTodos(updatedTodos);
      console.log('deleted work')
    }
  };

  // Logic End

  return (
    <SafeAreaView style={styles.container}>
      <Header dataLength={todos.filter((e) => !e.isDone).length} />
      <FlatList style={styles.list}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoCard item={item} onPressed={() => changeIsDone(item.id)} deleteTodo={deleteTodo} />}
      />
      <AddTodo addTodo={addTodo} handleInput={handleInput} text={text} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#132620",
  },
  list: {
    padding: 8,
  }
});
