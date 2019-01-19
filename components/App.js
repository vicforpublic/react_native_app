/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TodoList from './TodoList'
import AddTodo from './AddTodo';


export default class App extends Component {
  constructor() {
    super();

    let todo1 = {
      text: "texto 1"
    }
    let todo2 = {
      text: "texto 2"
    }

    this.state = {
      text: "",
      todos: [todo1, todo2]

    }

  }

  addTodo = (text) => {
    this.setState({
      todos: this.state.todos.concat([{ text: text }])
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <AddTodo add={this.addTodo}></AddTodo>
        <TodoList todos={this.state.todos}></TodoList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hor: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
