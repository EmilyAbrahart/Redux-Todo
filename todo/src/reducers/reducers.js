import { ADD_TODO, MARK_COMPLETE, CLEAR_COMPLETE } from './../actions/actions';
import uuid from 'uuid';

const initialState = {
	todos: [
		{ id: uuid(), value: 'Make a todo list', completed: false },
		{ id: uuid(), value: 'Fix todo list', completed: false }
	]
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state.todos, action.payload];

		case MARK_COMPLETE: {
			return state.map(todo => {
				return todo.id === action.payload.id
					? { ...todo, completed: true }
					: todo;
			});
		}

		case CLEAR_COMPLETE: {
			return state.filter(todo => !todo.completed);
		}

		default:
			return state;
	}
}
