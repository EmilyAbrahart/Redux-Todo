import React from 'react';


export default function ToDo(props) {
	return (
		<div className="toDo">
			<button onClick={() => props.markComplete(props.id)} className="completeTask">
				Complete
			</button>
			<span>{props.value}</span>
		</div>
	);
}
