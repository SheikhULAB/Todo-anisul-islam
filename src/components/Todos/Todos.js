import React from 'react';
import Todo from '../Todo/Todo';
import "./Todos.css";

const Todos = (props) => {
    return (
        <section className='todos'>
            {
                props.todos.map((todo) => 
                
                <Todo
                key={todo.id}
                todo={todo.todo}
                id={todo.id}
                onRemoveTodo={props.onRemoveTodo}
                />)
            }
        </section>
    );
};

export default Todos;