import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from './Todo'
class TodoList extends Component {
    constructor() {
        super();
    }
    render() {
        const { todos } = this.props
        return (
            <View>
                {todos.map(todo => {
                    return (<Todo todo={todo}></Todo>)

                })}
            </View>

        )
    }
}

export default TodoList