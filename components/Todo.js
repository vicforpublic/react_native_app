import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

class Todo extends Component {
    constructor() {
        super();
    }
    render() {
        const { todo } = this.props
        return (
            <TouchableNativeFeedback
            onPress={() => {
                this
                  .props
                  .navigation
                  .navigate('TodoDetails', { 
                    text: this.props.todo.text
                  })
            }}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {todo.text ? todo.text : "Naruto"}
                    </Text>
                </View>
            </TouchableNativeFeedback>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 7.5,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 8, height: 8 },
        shadowRadius: 5,
        elevation: 7,
    },
    text: {

    }
})

export default Todo