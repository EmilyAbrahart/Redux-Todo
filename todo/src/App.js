import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {
	return (
		<div className="App">
			<h1>ToDo List</h1>
			<ToDoForm />
			<ToDoList />
		</div>
	);
}

