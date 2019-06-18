import React from 'react';
import { connect } from 'react-redux';
import { addToDo, clearComplete } from './../actions/actions';

function ToDoForm(props) {
	const textRef = React.createRef();

	const onAddTodo = e => {
		e.preventDefault();
		props.addToDo(textRef.current.value);
	};

	return (
		<div className="toDoForm">
			<form onSubmit={onAddTodo}>
				<input ref={textRef} type="text" />
				<button type="submit" className="addToDo">
					Add ToDo
				</button>
			</form>
			<button className="clearCompleted" onClick={props.clearComplete}>
				Clear Complete
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return { todos: state.todos };
}

export default connect(
	mapStateToProps,
	{ addToDo, clearComplete }
)(ToDoForm);
