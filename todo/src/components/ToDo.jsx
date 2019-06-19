import React from 'react';
import styled from 'styled-components';
import {
	Button,
	color_accent,
	color_light,
	color_warning,
	color_subtle
} from './../~reusables/reusables';

const TodoDiv = styled.div`
	margin-left: 3rem;
	padding: 1rem;
`;

const TodoCompleteButton = styled.button`
	${Button(color_accent, color_light)};
	background: ${props => (props.completed ? color_subtle : color_accent)};
	margin-right: 1rem;

	&:hover {
		border-color: ${props => (props.completed ? color_subtle : color_accent)};
		color: ${props => (props.completed ? color_subtle : color_accent)};
	}
`;

const TodoDeleteButton = styled.button`
	${Button(color_warning, color_light)}
`;

export default function ToDo(props) {
	return (
		<TodoDiv>
			<TodoDeleteButton onClick={() => props.deleteTodo(props.id)} >Delete</TodoDeleteButton>
			<TodoCompleteButton
				onClick={() => props.markComplete(props.id)}
				completed={props.completed}
			>
				{props.completed ? 'Undo' : 'Complete'}
			</TodoCompleteButton>
			<span>{props.value}</span>
		</TodoDiv>
	);
}
