import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import { markComplete } from './../actions/actions';
import styled from 'styled-components';
import {FlexFunc, color_light} from './../~reusables/reusables'

const TodoListDiv = styled.div`
${FlexFunc('column', 'center', 'flex-start')};
width: 80%;
background: ${color_light};
margin-top: 2rem;
border-radius: 2rem;
padding: 2rem;
`

function ToDoList(props) {
	return (
		<TodoListDiv>
			{props.todos.map(todo => (
				<ToDo key={todo.id} markComplete={props.markComplete} {...todo} />
			))}
		</TodoListDiv>
	);
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(
	mapStateToProps,
	{ markComplete }
)(ToDoList);
