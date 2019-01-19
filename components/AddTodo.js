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
      <View style = {styles.container}>
        <TextInput
        style = {styles.input}
          onChangeText={text => this.onTextInput(text)}
          value={this.state.text}>

        </TextInput>
        <Button
        style = {styles.button}
         title={"Add"} 
         onPress={() => this.addTodo()}
         ></Button>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width:"100%",
    padding:10,
    backgroundColor:'lightgray',
    flexDirection:'row'
  },
  input:{
    flex:1,
    padding:5,
    backgroundColor:'white',
    borderRadius:5,
    marginRight:10
  },
  button:{
    flexShrink:0
  }
});

export default AddTodo