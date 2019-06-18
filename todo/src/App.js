import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	shadow,
	header_font,
	text_font
} from './~reusables/reusables';

const AppDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 80%;
	margin: 0 auto;
	font-family: ${text_font};

	h1 {
		color: ${color_light};
		text-shadow: ${shadow};
		font-family: ${header_font};
		font-size: 4rem;
	}
`;

export default function App() {
	return (
		<AppDiv>
			<h1>Redux TODOS</h1>
			<ToDoForm />
			<ToDoList />
		</AppDiv>
	);
}
