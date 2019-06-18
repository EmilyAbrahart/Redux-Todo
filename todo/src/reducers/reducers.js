import { ADD_TODO, MARK_COMPLETE, CLEAR_COMPLETE } from './../actions/actions';
import uuid from 'uuid';

const initialState = {
	todos: [
		{ id: uuid(), value: 'Make a todo list', completed: false },
		{ id: uuid(), value: 'Fix todo list', completed: false },
		{ id: uuid(), value: 'Learn Redux', completed: false },
		{ id: uuid(), value: 'Try not to break everything!', completed: false },
	]
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [...state.todos, action.payload]
			};

		case MARK_COMPLETE:
			return {
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return { ...todo, completed: !todo.completed };
					}
					return todo;
				})
			};

		case CLEAR_COMPLETE:
			return { todos: state.todos.filter(todo => !todo.completed) };

		default:
			return state;
	}
}
