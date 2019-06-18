import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import { markComplete } from './../actions/actions';

function ToDoList(props) {
	return (
		<div className="toDoList">
			{props.todos.map(todo => (
				<ToDo key={todo.id} markComplete={props.markComplete} {...todo} />
			))}
		</div>
	);
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(
	mapStateToProps,
	{ markComplete }
)(ToDoList);
