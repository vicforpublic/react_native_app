import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }
  onTextInput(text) {
    this.setState({
      text: text
    })

  }
  myfunc() {
    return 2
  }
  addTodo = () => {
    const { add } = this.props

    add(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={text => this.onTextInput(text)}
          value={this.state.text}>

        </TextInput>
        <Button title={"Add"} onPress={() => this.addTodo()}></Button>
      </View>


    )
  }
}

export default AddTodo