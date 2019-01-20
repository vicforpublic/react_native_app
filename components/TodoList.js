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
            <View style={styles.container}>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            navigation={this.props.navigation}>
                        </Todo>
                    )

                })}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15
    }
})

export default TodoList