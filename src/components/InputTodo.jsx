import React, { useState } from 'react';

export const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    
    const addTodo = () => {
        setTodos([...todos, inputText]);
        setInputText('');
    };
    
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    
    return (
        <div>
            <h1>
                とぅーどぅーりすと
            </h1>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                         {todo} <button onClick={() => deleteTodo(index)}>さくじょ</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}