import React from 'react';
import { markComplete } from './../actions/actions';
import { connect } from 'react-redux';

function ToDo(props) {
	return (
		<div className="toDo">
			<button onClick={() => markComplete(props.id)} className="completeTask">
				Complete
			</button>
			<span>{props.value}</span>
		</div>
	);
}

export default connect(
	state => ({
		todos: state.todos
	}),
	{ markComplete }
)(ToDo);
