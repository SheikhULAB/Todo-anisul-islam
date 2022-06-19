import React, { useState } from 'react';
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
import "./Home.css";
import {v4 as uuidv4} from "uuid";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }
    const handleRemoveTodo =(id) => {
   
      setTodos((prevTodos) => {
        const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
        return filteredTodos;
      });
    }
    return (
        <div className='home'>
            <h1 style={{color: "white"}}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    );
};

export default Home;