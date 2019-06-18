import React from 'react';
import { connect } from 'react-redux';
import { addToDo, clearComplete } from './../actions/actions';

function ToDoForm() {
	const textRef = React.createRef();

	const onAddTodo = () => {
		addToDo(textRef);
	};
	return (
		<div className="toDoForm">
			<input type="text" ref={textRef} />
			<button className="addToDo" onClick={onAddTodo}>
				Add ToDo
			</button>
			<button className="clearCompleted" onClick={clearComplete}>
				Clear Complete
			</button>
		</div>
	);
}
export default connect(
	state => ({
		todos: state.todos
	}),
	{ addToDo, clearComplete }
)(ToDoForm);
