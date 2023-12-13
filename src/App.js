import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import './App.css'; 

const TodoItem = ({ text }) => {
  return <li>{text}</li>;
};

const TodoList = ({ todos, dispatch }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [highlighted, setHighlighted] = useState(false);

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text: newTodoText });
      setNewTodoText('');
      setHighlighted(true);
    }
  };

  return (
    <div className={`container ${highlighted ? 'container-highlighted' : ''}`}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="New Todo"
          value={newTodoText}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList); 
