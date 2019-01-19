import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Todo extends Component {
    constructor() {
        super();
    }
    render() {
        const { todo } = this.props
        return (
            <View>
                <Text> {todo.text ? todo.text : "Naruto"}. </Text>
            </View>

        )
    }
}

export default Todo