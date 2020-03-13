import React, { Component } from 'react';
import TodoForm from '../atom/TodoForm';
import TodoList from '../atom/TodoList';

class Todo extends Component {
    render() {
        let {title,ListData,onClick}= this.props
        return (
            <>
                <h1>{title}</h1>
                <TodoForm onClick={onClick}></TodoForm> 
                <TodoList ListData={ListData}></TodoList>            
            </>
        );
    }
}

export default Todo;