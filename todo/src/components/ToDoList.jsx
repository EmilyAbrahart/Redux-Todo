import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';

function ToDoList(props) {
	return (
		<div className="toDoList">
			{props.todos.map(todo => (
				<ToDo key={todo.id} {...todo} />
			))}
		</div>
	);
}
export default connect(
  state => ({
    todos: state.todos
  })
)(ToDoList)