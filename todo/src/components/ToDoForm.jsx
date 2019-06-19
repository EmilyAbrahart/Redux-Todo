import React from 'react';
import { connect } from 'react-redux';
import { addToDo, clearComplete } from './../actions/actions';
import styled from 'styled-components';
import {
	FlexFunc,
	Button,
	color_transparent,
	color_light,
	color_accent,
	shadow
} from './../~reusables/reusables';

const FormDiv = styled.div`
	${FlexFunc()}

	input {
		border-radius: 1rem;
		border: none;
		padding: 0.5rem;
		width: 25rem;
		outline: none;

		&:focus {
			box-shadow: ${shadow};
		}
	}
`;

const TodoFormButton = styled.button`
	${Button(color_transparent, color_light)};
	margin-left: 1rem;
	&:hover {
		color: ${color_accent};
	}
`;

function ToDoForm(props) {
	const textRef = React.createRef();

	const onAddTodo = e => {
		e.preventDefault();
		props.addToDo(textRef.current.value);
		textRef.current.value='';
	};

	return (
		<FormDiv>
			<form onSubmit={onAddTodo}>
				<input ref={textRef} type="text" />
				<TodoFormButton type="submit" className="addToDo">
					Add ToDo
				</TodoFormButton>
			</form>
			<TodoFormButton className="clearCompleted" onClick={props.clearComplete}>
				Clear Complete
			</TodoFormButton>
		</FormDiv>
	);
}

function mapStateToProps(state) {
	return { todos: state.todos };
}

export default connect(
	mapStateToProps,
	{ addToDo, clearComplete }
)(ToDoForm);
