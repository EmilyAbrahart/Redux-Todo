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
	margin-left: 1rem;
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
	${Button(color_subtle, color_light)};
	&:hover {
		background-color: ${color_warning};
		color: ${color_light};
		border-color: ${color_light};
	}
`;
const TodoSpan = styled.span`
	text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
	color: ${props => (props.completed ? color_subtle : 'black')};
`;

export default function ToDo(props) {
	return (
		<TodoDiv>
			<TodoDeleteButton onClick={() => props.deleteTodo(props.id)}>
				x
			</TodoDeleteButton>
			<TodoCompleteButton
				onClick={() => props.markComplete(props.id)}
				completed={props.completed}
			>
				{props.completed ? 'Undo' : 'Complete'}
			</TodoCompleteButton>
			<TodoSpan completed={props.completed}>{props.value}</TodoSpan>
		</TodoDiv>
	);
}
