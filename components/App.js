/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, PermissionsAndroid } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TodoList from './TodoList'
import AddTodo from './AddTodo';


class TodoDetails extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Todo'
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.navigation.getParam('text')}
        </Text>
      </View>
    )
  }
}

class Home extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Todo App',
  };
  constructor() {
    super();

    let todo1 = {
      text: "texto 1",
      id: 0
    }
    let todo2 = {
      text: "texto 2",
      id: 1
    }

    this.state = {
      text: "",
      todos: [todo1, todo2],
      idCount: 1
    }
    this.requestMapsPermission();
  }

  async requestMapsPermission() {
    try {
      const isGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        'title': "todo app location access",
        'message': 'We need your location to know here you are'
      })
      this.setState({
        geolocationPermissionGranted: isGranted,
      })

    } catch (err) {
      console.error(err)
      return;
    }
  }

  addTodo = (text) => {
    let id = this.state.idCount + 1
    this.setState({
      todos: this.state.todos.concat([{ text: text, id: id }]),
      idCount: id
    })

    if (this.state.geolocationPermissionGranted) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setTodoLocation(id, pos.coords)
      }, null, { enableHighAccuracy: true })

    }
  }

  async setTodoLocation(id, coords) {
    const { latitude, longitude } = coords; // useless for now

    try {
      API_KEY = "nops"
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
      );
      const data = await response.json();

      if (!data.error_message) {
        const address = data.results.formatted_address[0];
        const { todos } = this.state
        todos.find(todo => todo.id === id).location = address
        this.setState({
          todos
        })
      } else {
        throw data.status
      }

    } catch (e) {
      console.error(e)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          <AddTodo add={this.addTodo}></AddTodo>
          <TodoList
            todos={this.state.todos}
            navigation={this.props.navigation}>
          </TodoList>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1564bf',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
}

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  TodoDetails: { screen: TodoDetails }
})

export default createAppContainer(AppNavigator);